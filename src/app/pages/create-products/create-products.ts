import { Component, inject } from '@angular/core';
import { ProductServices } from '../../Services/product-services';
import { Product } from '../../Models/Product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-create-products',
  styleUrl: './create-products.css',
  templateUrl: './create-products.html',
})
export class CreateProducts {
  private productServices = inject(ProductServices)
  private navigator = inject(Router)
  public newProduct : Product ={ id: 0, nombre: '', descripcion: '', precio: 0, stock:0 }

CreateProduct(){
  this.productServices.CreateProduct(this.newProduct).subscribe({
    next:(response)=>{
      this.navigator.navigate(['/'])
    },error(err) {
      console.error('Error: ', err)
    },
  })
}
}