var products = [];

document.querySelector('input[type=submit').addEventListener('click', ()=>{
    //Input has been clicked
    let productName = document.querySelector('input[name=product_name').value;
    let productPrice = document.querySelector('input[name=product_price').value;

    products.push({
        //Add products to array
        name: productName,
        price: productPrice
    })
});