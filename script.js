var products = [];

document.querySelector('input[type=submit').addEventListener('click', ()=>{
    //Input has been clicked
    let productName = document.querySelector('input[name=product_name');
    let productPrice = document.querySelector('input[name=product_price');

    products.push({
        //Add products to array
        name: productName.value,
        price: productPrice.value
    })

    let productList = document.querySelector('.product-list');
    let total = 0;
    productList.innerHTML = "";
    products.map((value)=>{
        total+=parseFloat(value.price);
        productList.innerHTML += 
        `
            <div class="product-list-single">
                <h3>`+value.name+`</h3>
                <h3 class="product-price"><span>$`+value.price+`</span></h3>
            </div>        
        `;
    });
    total = total.toFixed(2);
    productName.value = "";
    productPrice.value = "";

    document.querySelector('.product-total h1').innerHTML = "Total: $" +total;
});


document.querySelector('button[name=clear').addEventListener('click',()=>{
    products = [];
    document.querySelector('.product-list').innerHTML = "";
    document.querySelector('.product-total h1').innerHTML = "Total: $0";
})