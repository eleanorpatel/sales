const addButtons = document.querySelectorAll(`.add-btn`);

const cartList = document.getElementById(`cart-items`);

const cartTotal = document.getElementById(`.cart-total`);

const clearCart = document.getElementById(`.clear-cart`);

let cart = []
  addButtons.forEach(btn => { btn.addEventListener ("click", () => {const name = btn.dataset.name;
                                                                    const price = parseFloat (btn.dataset.price);
                                                                    const existing-item = cart.find (i => i.name === name);
                                                                    if (existing-item) {existing-item.quantity += 1;
                                                                                       } else {
                                                                                        cart.push ({name, price, quantity: 1}):
                                                                    }
                                                                    updateCart();
                                                                   })})
function updateCart (){
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach (item, index => { const li = document.createElement("li");
                                li.classList.add (cart-item)
                                li.innerHTML = ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
                                <button onclick="removeItem(${index})">Remove</button>
                ;
  cartList.appendChild(li);
  total += item.price * item.quantity;
});
cartTotal.textContent = Total: $${total.toFixed(2)}
}
