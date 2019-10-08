import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private authService : AuthService,
    private router: Router,
    public loadingController: LoadingController,
    private navController: NavController
  ) { }

  userCadastro: User = {}

  async realizarCadastro() {
    console.log(this.userCadastro);
    try {
      let user = await this.authService.cadastro(this.userCadastro);
      if (user) {
        this.router.navigate(["tabs"]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /* this.loadingController.create({
    message: 'Cadastrando....',
    duration: 10000,
  }).then((res) =>{
    res.present();
    res.onDidDismiss().then((dis) =>{
      this.navController.navigateBack("");
    })
  });
   */
}

ngOnInit() {
}

  

}
