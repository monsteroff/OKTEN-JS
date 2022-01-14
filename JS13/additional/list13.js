let keyProducts = "products";
let products = JSON.parse(localStorage.getItem(keyProducts)) || [];

if(products.length){
    let productsDiv = document.createElement("div");
    productsDiv.classList.add("productsDiv");

    products.forEach(product => {
        let productDiv = document.createElement("div");
        let productDiv__upper = document.createElement("div");
        let productDiv__lower = document.createElement("div");
        let productDiv__lower__left = document.createElement("div");
        let productDiv__lower__right = document.createElement("div");
        let productName = document.createElement("h1");
        let productCount = document.createElement("h2");
        let productPrice = document.createElement("h2");
        let productImage = document.createElement("img");
        let productRemoveButton = document.createElement("button");

        productDiv.classList.add("productDiv");
        productDiv__upper.classList.add("productDiv__upper");
        productDiv__lower.classList.add("productDiv__lower");
        productDiv__lower__left.classList.add("productDiv__lower__left");
        productDiv__lower__right.classList.add("productDiv__lower__right");
        productName.classList.add("productName");
        productCount.classList.add("productCount");
        productPrice.classList.add("productPrice");
        productImage.classList.add("productImage");
        productRemoveButton.classList.add("productRemoveButton");
    
        productName.innerText = "Product name : " + product.name;
        productCount.innerText = "In stock : " + product.count;
        productPrice.innerText = "Price : "  + product.price + "$";
        productImage.setAttribute("src",`${product.img}`);
        productImage.setAttribute("alt",`Image of ${product.name}`);
        productRemoveButton.innerText = "Remove this product";
        productRemoveButton.onclick = () => {
            let itemsArr = JSON.parse(localStorage.getItem(keyProducts));
            let removeIndex = itemsArr.indexOf(itemsArr.find(i=> i.id === product.id));
            itemsArr.splice(removeIndex,1);
            localStorage.setItem(keyProducts,JSON.stringify(itemsArr));
            location.reload();
        };
    
        productDiv__upper.append(productName);
        productDiv__lower__left.append(productImage);
        productDiv__lower__right.append(productPrice, productCount, productRemoveButton);
        productDiv__lower.append(productDiv__lower__left, productDiv__lower__right);
        productDiv.append(productDiv__upper, productDiv__lower);
        productsDiv.append(productDiv);
    });

    let deleteAllButton = document.createElement("button");
    deleteAllButton.classList.add("deleteAllButton");
    deleteAllButton.innerText = "Remove all products";
    deleteAllButton.onclick = () => {
        localStorage.clear();
        location.reload();
    };
    productsDiv.append(deleteAllButton);
    document.body.insertBefore(productsDiv,document.body.getElementsByTagName("script")[0]);
    
}