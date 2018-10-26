import {Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';

export const AppRoute:Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

