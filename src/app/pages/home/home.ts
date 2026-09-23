import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductServices } from '../../Services/product-services';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private productServices = inject(ProductServices)
  private refresh = inject(ChangeDetectorRef)
  public productos : Product[] = []

 ngOnInit():void{
  this.CallProducts();
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
