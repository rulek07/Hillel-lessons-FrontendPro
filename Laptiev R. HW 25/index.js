$(document).ready(function () {
    $("#usernumber").inputmask("+38 (099) 999-99-99");
    $("#usersNumber").inputmask("+38 (099) 999-99-99");
    $("#birthDate").inputmask("99/99/9999");
});

orderButton.addEventListener('click', () => {
    main_title.style.display = 'none';
    catalog_list.style.display = 'none';
    orderButton.style.display = 'none';
    return_btn.style.display = 'flex';
    order_title.style.display = 'block';
    orders_list.style.display = 'block';

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length === 0) return;

    cart.forEach((id) => {
        const orderItem = orders_list.appendChild(document.createElement("li"));
        orderItem.classList = 'liOrder';
        let orderDescr = '';
        orderDescr = `${id.productName}` + '<br>'; 
        orderDescr += `Дата покупки: ${id.purchaseDate}` + '<br>';
        orderDescr += `Сумма покупки: ${id.purcheseAmount}$` + '<br>';
        orderItem.innerHTML = orderDescr;
        $(orderItem).click(function () {
            orderDescr = '';
            orderDescr = `${id.productName}` + '<br>'; 
            orderDescr += `Дата покупки: ${id.purchaseDate}` + '<br>';
            orderDescr += `Сумма покупки: ${id.purcheseAmount}$` + '<br>';
            orderDescr += `Имя заказчика: ${id.userName}` + '<br>';
            orderDescr += `Номер телефона: ${id.usersNumber}` + '<br>';
            orderDescr += `Город: ${id.usersCity}` + '<br>';
            orderDescr += `Номер склада: ${id.postNumber}` + '<br>';
            orderDescr += `Метод оплаты: ${id.paymentMethod}` + '<br>';
            orderDescr += `Количество: ${id.quantity}` + '<br>';
            orderDescr += `Комментарий к заказу: ${id.usersComment}`;
            orderItem.innerHTML = orderDescr;
            const deleteBtn = orderItem.appendChild(document.createElement('p'))
            deleteBtn.classList = 'deleteBtn'
            deleteBtn.textContent = 'Delete'

            deleteBtn.onclick = () => {
                document.getElementById('confirm').classList.add('active');
                document.getElementById('yes_btn').addEventListener('click', () => {
                    const updatedArr = cart.filter(cartItem => cartItem !== id)
                    localStorage.setItem("cart", JSON.stringify(updatedArr));
                    returnList()
                    location.reload();
                });
                document.getElementById('no_btn').addEventListener('click', () => {
                    returnList()
                })  
            }
        })
    });
});

function returnList() {
    document.getElementById('confirm').classList.remove('active');
};

document.querySelector('[data-return]').addEventListener('click', () => {
    main_title.style.display = 'block';
    catalog_list.style.display = 'block';
    orderButton.style.display = 'block';
    return_btn.style.display = 'none';
    order_title.style.display = 'none';
    orders_list.style.display = 'none';
    cleaner();
});

regButton.addEventListener('click', () => {
    registration.classList.add('active');
});

document.querySelector('[data-closeUp]').addEventListener('click', () => {
    popup.classList.remove('active');
});

document.querySelector('[data-closeReg]').addEventListener('click', () => {
    registration.classList.remove('active');
});

regForm.addEventListener('submit', (event) => {
    event.preventDefault();
    table.classList.add('show');
    registration.classList.remove('active');
  
    userRegFirstname.innerHTML = regForm['firstName'].value;
    userRegLastname.innerHTML = regForm['lastName'].value;
    userRegBirth.innerHTML = regForm['birthDate'].value;
    userRegNumber.innerHTML = regForm['usersNumber'].value;
    userRegGender.innerHTML = regForm['gender'].value;
    userRegCity.innerHTML = regForm['usersCity'].value;
    userRegAdress.innerHTML = regForm['usersAdress'].value;
    let lang = '';
    lang = regForm['langEnglish'].checked ? regForm['langEnglish'].value + '<br>' : '';
    lang += regForm['langDeutch'].checked ? regForm['langDeutch'].value + '<br>' : '';
    lang += regForm['langUkraine'].checked ? regForm['langUkraine'].value + '<br>' : '';
    userRegLanguage.innerHTML = lang;
    regForm.reset();
});

const cleaner = () => {
    const buyButton = document.getElementById('buyButton')
    buyButton && buyButton.remove()
    product_list.textContent = ''
    description_result.textContent = ''
    orders_list.textContent = ''
};

catalog.forEach((category) => { 
    const catalogElement = catalog_list.appendChild(document.createElement("li"));
    catalogElement.textContent = category.name;
    catalogElement.addEventListener("click", showProducts);
});

let selectedProduct;
function showProducts(item){
    let currentDep = catalog.find((category) => category.name === item.target.innerHTML);
    cleaner();
    currentDep.products.forEach((product) => {  
        const productItem = product_list.appendChild(document.createElement("li"));
        productItem.textContent = product.name;
        productItem.addEventListener("click", () => {
            selectedProduct = product.name
            showDescription(product)
        });
    })
};
let productPrice;
function showDescription(product) {
    document.getElementById('description_result').innerHTML = `${product.description}` + '<br>' + `Price: ${product.price}$`;
    productPrice = product.price
    createBuyButton();   
};

function createBuyButton (){
    if(!document.getElementById('buyButton')){
        const buyButton = result.appendChild(document.createElement("button"));
        buyButton.id = 'buyButton'
        buyButton.textContent = titles.buyButtonTitle;
        buyButton.addEventListener("click", function () {
            document.getElementById('popup').classList.add('active')
        });
    }       
};

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const buyDate = (new Date()).toISOString().slice(0,10) + '; ' + (new Date()).getHours() + ':' + (new Date()).getMinutes() + '.';
    const sumBuy = productPrice*form.quantity.value;
    const formData = {
        productName: selectedProduct,
        purchaseDate: buyDate,
        purcheseAmount: sumBuy,
        userName: form.userName.value,
        usersNumber: form.usersNumber.value,
        usersCity: form.usersCity.value,
        postNumber: form.postNumber.value,
        paymentMethod: form.paymentMethod.value,
        quantity: form.quantity.value,
        usersComment: form.usersComment.value
    } 
    const new_window = window.open();
          
    for(key in formData){
        new_window.document.write(`<p> - <strong>${key}:</strong> ${formData[key]}</p>`)
    };

    createClientHistory(formData)
    form.reset();
    cleaner();   
    document.getElementById('popup').classList.remove('active');   
};

function createClientHistory(data){
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const newItem = {
        id: cart.length,
        ...data
    };

    cart.push(newItem);

    localStorage.setItem("cart", JSON.stringify(cart));
}