import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CreateProducts } from './pages/create-products/create-products';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'registro',
        component: Registro
    },
    {
        path: 'create-products',
        component: CreateProducts
    },
    {
        path: 'create-products/:id',
        component: CreateProducts
    },
    {
        path: '**',
        redirectTo: ''
    }
];
