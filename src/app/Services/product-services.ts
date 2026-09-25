import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../Models/Product';

@Service()
export class ProductServices {
    private httpClient = inject(HttpClient)
    private urlBase = environment.apiUrl;

    GetProducts(){
        return this.httpClient.get<Product[]>(this.urlBase + 'GetProductos')
    }

    CreateProduct(item : Product){
        return this.httpClient.post(this.urlBase + 'CreateProducto', item, { responseType: 'text'})
    }
}
