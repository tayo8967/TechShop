import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent {
  products = [
    { name: 'Smartphone X', price: '$699', image: 'assets/img/product1.jpg' },
    { name: 'Laptop Pro', price: '$1299', image: 'assets/img/product2.jpg' },
    { name: 'Wireless Earbuds', price: '$199', image: 'assets/img/product3.jpg' },
    { name: 'Smartphone X', price: '$699', image: 'assets/img/product1.jpg' },
    { name: 'Laptop Pro', price: '$1299', image: 'assets/img/product2.jpg' },
    { name: 'Wireless Earbuds', price: '$199', image: 'assets/img/product3.jpg' },
  ];
  
}
