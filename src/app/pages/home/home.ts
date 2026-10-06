import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductServices } from '../../Services/product-services';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
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

 GoToUpdateProduct(id : number){
  this.navigator.navigate(['create-products/' + id])
 }

 DeleteProduct(id: number){
  this.productServices.DeleteProduct(id).subscribe({
    next:(response)=>{
    this.CallProducts();
    },error(err){
      console.error('Error: ', err)
    },
  })
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
