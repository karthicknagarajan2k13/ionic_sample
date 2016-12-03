import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage
  ],
  providers: [GithubUsers] // Add GithubUsers provider
})
export class AppModule {}