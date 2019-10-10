import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private loadingController: LoadingController
    private authService: 
  ) { }

  ngOnInit() {
  }

  realizarLogin(){
    /* this.loadingController.create({
      message: "Realizando login...",
      duration: 3000
    }).then((res) =>{
      res.present();
      res.onDidDismiss().then((dis) =>{
        this.router.navigateByUrl("tabs");
      }) 

    })*/
  }

}
