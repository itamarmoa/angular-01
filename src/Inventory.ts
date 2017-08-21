interface ItemType{
    name: string;
    price: number;
    type: number;
}

class Inventory{
    public items: any[] = [];
    constructor(){
        let lsItems = this.loadFromLocalStorage();
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
        this.saveToLocalStorage(this.items);
    }
    clearAll(){
        this.items = [];
        this.printItems();
    }
    saveToLocalStorage(items:any[]){
        localStorage.setItem("items", JSON.stringify(items));
    }
    loadFromLocalStorage(){
        let items = localStorage.getItem("items");
        return JSON.parse(items);
    }
}

export default new Inventory();