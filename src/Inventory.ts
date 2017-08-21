import {saveToLocalStorage,loadFromLocalStorage} from './services/localStorageService';

interface ItemType{
    name: string;
    price: number;
    type: number;
}

class Inventory{
    public items: any[] = [];
    constructor(){
        let lsItems = loadFromLocalStorage();
        if(lsItems){
           this.items = lsItems;
           this.printItems();
        }
    }
    addItem(item: ItemType){
        this.items.push(item);
        this.printItems();
    }
    printItems(){
        let container = document.querySelector('#inventory-contanier');
        container.innerHTML = "";
        this.items.forEach( (item)=>{
            let listItem = document.createElement('li');
            listItem.className = "collection-item";
            listItem.innerHTML = `<span class="title"> ${item.name} </span><span class="secondary-content">${item.price}</span>`;
            container.appendChild(listItem);
        } );
        saveToLocalStorage(this.items);
    }
    clearAll(){
        this.items = [];
        this.printItems();
    }
}

export default new Inventory();