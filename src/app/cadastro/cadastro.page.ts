import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

 
  [x: string]: any;
  constructor(
    private authService : AuthService,
    private router: Router,
    public loadingController: LoadingController,
    private navController: NavController
  
  ) { }

  userCadastro: User = {}

  async realizarCadastro() {
    await this.presentLoading();
    try{
      console.log(this.userCadastro);
      await this.authService.cadastro(this.userCadastro);
    }catch(error){
      let message: string;
      switch(error.code){
        case 'auth/email-already-in-use':
          message = "Email já cadastrado!";
          break;
        case 'auth/invalid-email':
          message = "Email inválido!";
          break;
        case 'auth/weak-password':
          message = "A senha deve ter pelo menos 6 caracteres";
          break;
        default:
          message = "Ocorreu um erro no cadastro!";
          break;
      
      }
      console.log(error);
      this.presentToast(message);
    }finaly{
      this.loading.dismiss();
    }
    /* console.log(this.userCadastro);
    try {
      let user = await this.authService.cadastro(this.userCadastro);
      if (user) {
        this.router.navigate(["tabs"]);
      }
    } catch (error) {
      console.log(error);
    } */

  }


ngOnInit() {
}

  

}
