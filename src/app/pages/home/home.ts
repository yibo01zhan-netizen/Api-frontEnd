import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductServices } from '../../Services/product-services';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private productServices = inject(ProductServices)
  private refresh = inject(ChangeDetectorRef)
  private navigator = inject(Router)
  public productos : Product[] = []

 ngOnInit():void{
  this.CallProducts();
 }

 GoToCreateProduct(){
  this.navigator.navigate(['create-products'])
 }

  CallProducts(){
    this.productServices.GetProducts().subscribe({
      next:(data)=>{
        this.productos = data
        this.refresh.markForCheck()
      },error(err) {
        console.error('Error:', err)
      },
    })
  }
}
