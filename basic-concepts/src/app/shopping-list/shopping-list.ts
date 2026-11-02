import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from './item';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.scss',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  item: string = '';
  itemList: Item[] = [];

  addItem(){
    if(this.item.trim() !== ''){
      let newItem: Item = { 
        id: this.itemList.length + 1,
        name: this.item,
        isPurchased: false
      };

      this.itemList.push(newItem);
      this.item = '';
    }
  }

  togglePurchased(item: Item){
    item.isPurchased = !item.isPurchased;
  }
}
