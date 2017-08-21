
export function saveToLocalStorage(items:any[]){
    localStorage.setItem("items", JSON.stringify(items));
}

export function loadFromLocalStorage(){
    let items = localStorage.getItem("items");
    return JSON.parse(items);
}
