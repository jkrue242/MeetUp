//
//  AccountViewController.swift
//  MeetUp
//
//  Created by John McCulloch on 8/16/23.
//

import UIKit

class AccountViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title =  "Account"
        view.backgroundColor = .systemYellow
        
        navigationController?.navigationBar.tintColor = .label
        tableItems()
    }
    
    
    private func tableItems(){
        
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: nil)
        
        navigationItem.leftBarButtonItem = UIBarButtonItem(image: UIImage(systemName:"gear"),style: .done, target: self, action: nil)
    }
}
