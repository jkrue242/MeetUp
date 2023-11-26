//
//  HomeScreenViewController.swift
//  MeetUp
//
//  Created by John McCulloch on 8/17/23.
//

import UIKit

class HomeScreenViewController: UIViewController {
    lazy var leftButtonItem = UIBarButtonItem(image: UIImage(systemName: "sidebar.leading")?.withRenderingMode(.alwaysOriginal),style: .done,target: self, action: #selector(leftButtonItemTapped))
     
    
    @objc
    func leftButtonItemTapped() {
        
    }

    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        navigationItem.setRightBarButton(leftButtonItem, animated: false)

        
        navigationItem.setRightBarButton(leftButtonItem, animated: false)
        //navigationItem.setHidesBackButton(true, animated: false)
    }
        
        
        
}
