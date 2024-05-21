import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page | DevJobs',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page | Devjobs',
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page Not Found | Devjobs'
    }
];
