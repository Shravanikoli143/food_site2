let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((data, index) => {
        cartItems.innerHTML += `
            <div>
                ${data.item} - &#8377;${data.price}
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        total += data.price;
    });

    document.getElementById("total").innerHTML = "Total: &#8377;" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function goToPayment(){
    window.location.href = "payment.html";
}

function showPopup(event) {
            event.preventDefault();  
            document.getElementById("thankPopup").style.display = "flex";
}

function closePopup() {
            document.getElementById("thankPopup").style.display = "none";
}
		
function clearCart() {
    localStorage.removeItem("cart");
}