const CartInit = () => {
    const cart = document.querySelector("#cart")
    const cartModal = document.querySelector("#cart-js")
    const cartModalClose = cartModal.querySelector(".cart-close")

    cart.addEventListener("click", () => {
        cartModal.classList.add("d-flex")
    })

    cartModalClose.addEventListener("click", () => {
        cartModal.classList.remove("d-flex")
    })
}

export default CartInit