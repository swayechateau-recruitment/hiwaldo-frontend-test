import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:userId', component: UserProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
