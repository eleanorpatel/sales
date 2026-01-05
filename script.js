const addButtons = document.querySelectorAll(`.add-btn`);

const cartList = document.getElementById(`cart-items`);

const cartTotal = document.getElementById(`cart-total`);
let cart = [];

const clearCart = document.getElementById(`clear-cart`);
    addButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        const existingItem = cart.find(i => i.name === name);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ name, price, quantity: 1 });
        }

        updateCart();
      });
    });

    function updateCart() {
      cartList.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
          ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
          <button onclick="removeItem(${index})">Remove</button>
        `;
        cartList.appendChild(li);
        total += item.price * item.quantity;
      });
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

/*
  addButtons.forEach(btn => { btn.addEventListener ("click", () => {const name = btn.dataset.name;
                                                                    const price = parseFloat(btn.dataset.price);
                                                                    const existingItem = cart.find (i => i.name === name);
                                                                    if (existingItem) {existingItem.quantity += 1;
                                                                                       } else {
                                                                                        cart.push ({name, price, quantity: 1})
                                                                    }
                                                                    updateCart();
                                                                   })})
function updateCart (){
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach (item, index => { const li = document.createElement("li");
                                li.classList.add (cart-item);
                                li.innerHTML = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
                                <button onclick="removeItem(${index})">Remove</button>
                `;
  cartList.appendChild(li);
  total += item.price * item.quantity;
});
cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}
*/
function removeItem(index){
  cart.splice(index, 1);
  updateCart()
};

function clearCart.addEventListener("click", () => {
    cart = [];
    updateCart();
});


