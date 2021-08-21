// Extra Price Add Function
function priceAdd(costID, price) {
    const preCost = document.getElementById(costID);
    preCost.innerText = price;
    totalPrice();
    return preCost;
};

// Total Price Count Function
function totalPrice() {
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const preTotalPrice = document.getElementById('total-price');
    const totalPrice = 1299 + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    preTotalPrice.innerText = totalPrice;
    const totalPriceFinal = document.getElementById('total-final-price');
    totalPriceFinal.innerText = totalPrice;
}

// Function Calling Shortcut Function
function btnClicked(btnID, costID, price) {
    document.getElementById(btnID).addEventListener('click', function() {
        priceAdd(costID, price);
    });
};

// Functions Calling
btnClicked('memory-1', 'memory-cost', 0);
btnClicked('memory-2', 'memory-cost', 180);
btnClicked('storage-1', 'storage-cost', 0);
btnClicked('storage-2', 'storage-cost', 100);
btnClicked('storage-3', 'storage-cost', 180);
btnClicked('delivery-1', 'delivery-cost', 0);
btnClicked('delivery-2', 'delivery-cost', 20);

//Total-final-price Function 
function finalPricePromo() {
    const promoField = document.getElementById('promo-field');
    const priceFinal = document.getElementById('total-final-price');
    const totalPrice = document.getElementById('total-price');
    const discount = parseInt(totalPrice.innerText) / 100 * 20;
    if (promoField.value == 'stevekaku') {
        const totalPriceFinalPromo = parseInt(totalPrice.innerText) - discount;
        priceFinal.innerText = totalPriceFinalPromo;
    } else if (promoField.value = '') {

    } else {
        alert("Invalid Promo Code");
    }
    promoField.value = '';
};

// Promo Code Apply
document.getElementById('promo-btn').addEventListener('click', function() {
    finalPricePromo();
});