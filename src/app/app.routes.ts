import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page | DevJobs',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page | Devjobs',
    }
];
