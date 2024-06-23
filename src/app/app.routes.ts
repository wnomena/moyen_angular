import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OtherComponentsComponent } from './other-components/other-components.component';
import { SlideComponentForHomeComponent } from './slide-component-for-home/slide-component-for-home.component';
import { LoginAndSubscriptionComponent } from './login-and-subscription/login-and-subscription.component';
import { ChoiceBetweenAdminOrMemberComponent } from './choice-between-admin-or-member/choice-between-admin-or-member.component';

export const routes: Routes = [{
    path : "rakoto",
    component : ChoiceBetweenAdminOrMemberComponent
}];
