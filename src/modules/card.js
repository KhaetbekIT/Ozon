import { PostDataFunc } from "./api"
import RenderCart from "./render-cart"

const CartInit = () => {
    const cart = document.querySelector("#cart")
    const cartModal = document.querySelector("#cart-js")
    const cartModalClose = cartModal.querySelector(".cart-close")
    const cartTotal = cartModal.querySelector(".cart-total > span")
    const goodsWrapper = document.querySelector(".goods")
    const cartWrapper = document.querySelector(".cart-wrapper")
    const cartSend = cartModal.querySelector(".cart-confirm")
    const counter = document.querySelector(".counter")

    const CounterFunc = () => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

        counter.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }

    CounterFunc()

    cart.addEventListener("click", () => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        cartModal.classList.add("d-flex")
        RenderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)

        CounterFunc()
    })


    cartModalClose.addEventListener("click", () => {
        cartModal.classList.remove("d-flex")
    })

    goodsWrapper.addEventListener("click", e => {
        if (e.target.classList.contains(`btn-primary`)) {
            const card = e.target.closest(".card")
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem("goods"))
            const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

            const goodItem = goods.find(item => {
                return item.id === +key
            })

            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })

    cartWrapper.addEventListener("click", e => {
        if (e.target.classList.contains(`btn-primary`)) {
            const card = e.target.closest(".card")
            const key = card.dataset.key
            const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

            const index = cart.findIndex(item => {
                return item.id === +key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            RenderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)

            CounterFunc()
        }
    })

    cartSend.addEventListener("click", () => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

        PostDataFunc("", cart).then(() => {
            localStorage.removeItem("cart")
            RenderCart([])

            cartTotal.textContent = 0
        })
    })
}

export default CartInit