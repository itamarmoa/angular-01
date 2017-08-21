import Product from './Product';
import Inventory from './components/Inventory';

let clearButton = document.querySelector("button[name=clear-inventory]");
let addButton = document.querySelector("button[name=add-product]");
clearButton.addEventListener('click',()=>{
    Inventory.clearAll();
});

addButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let name = (<HTMLInputElement>document.querySelector('#menuName')).value;
    let type = (<HTMLInputElement>document.querySelector('#dishType')).value;
    let price = (<HTMLInputElement>document.querySelector('#dishPrice')).value;
    Inventory.addItem( new Product(name, parseInt(type), parseInt(price)) );
});

