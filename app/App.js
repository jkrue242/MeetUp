
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

// driver
function App() {

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');

  // fetch data on initial load
  useEffect(function() {
    fetchData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Data from Server:</Text>
      {data.map(item => (
        <Text key={item.text}>{item.text}</Text>
      ))}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        placeholder="Type something..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Post Data" onPress={postData} />
    </View>
  );
};

// fetch data from server
const fetchData = async function() {
  try 
  {
    // GET
    const response = await axios.get('http://localhost:3000/api/data');
    setData(response.data);

  } 
  catch (exception) 
  {
    console.error('Could not fetch data from server: ', exception);
  }
};

// post data to server
const postData = async function() {
  try
  {
    const response = await axios.post('http://localhost:3000/api/data', {
      text: inputText,
    });

    fetchData();
    setInputText('');
  }
  catch (exception) 
  {
    console.error('Could not post data to server: ', exception);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;