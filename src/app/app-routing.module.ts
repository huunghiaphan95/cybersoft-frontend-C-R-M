import { MemberComponent } from './member/member.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'member',      component: MemberComponent },
  { path: 'group',      component: GroupComponent },
  { path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
