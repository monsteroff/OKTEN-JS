let keyProducts = "products";
let form = document.forms.form1;

form.onsubmit = function(e){
    e.preventDefault();
    let malName = form.input1_1;
    let malCount = form.input1_2;
    let malPrice = form.input1_3;
    let malImage = form.input1_4;
    saveProduct(malName.value,malCount.value,malPrice.value,malImage.value);
    malName.value = "";
    malCount.value = "";
    malPrice.value = "";
    malImage.value = "";
};

function saveProduct(prodName, prodCount, prodPrice, prodImage){
    let products = JSON.parse(localStorage.getItem(keyProducts)) || [];
    let number = products.length ? products.sort((a,b) => b.id - a.id)[0].id : 0;
    let product = {id:++number, name:prodName, count:prodCount, price: prodPrice, img:prodImage};
    products.push(product);
    localStorage.setItem(keyProducts, JSON.stringify(products.sort((a,b) => a.id - b.id)));
}