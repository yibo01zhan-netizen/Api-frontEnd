import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CreateProducts } from './pages/create-products/create-products';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'create-products',
        component: CreateProducts
    },
    {
        path: 'create-products/:id',
        component: CreateProducts
    }
];
