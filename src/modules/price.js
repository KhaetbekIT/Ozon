import { GetDataFunc } from "./api"
import { HotSaleFilterFunc, PriceFilterFunc } from "./filter"
import RenderGoodsInit from "./render-goods"

const PriceInit = () => {

    const minPrice = document.querySelector("#min")
    const maxPrice = document.querySelector("#max")
    const checkeboxDiscount = document.querySelector("#discount-checkbox")
    const checkboxSpan = document.querySelector(".filter-check_checkmark")

    minPrice.addEventListener("input", () => {
        GetDataFunc().then(data => {
            RenderGoodsInit(PriceFilterFunc(HotSaleFilterFunc(data, checkeboxDiscount.checked), minPrice.value, maxPrice.value))
        })
    })

    maxPrice.addEventListener("input", () => {
        GetDataFunc().then(data => {
            RenderGoodsInit(PriceFilterFunc(HotSaleFilterFunc(data, checkeboxDiscount.checked), minPrice.value, maxPrice.value))
        })
    })

    checkeboxDiscount.addEventListener("change", () => {

        checkeboxDiscount.checked ? checkboxSpan.classList.add("checked") : checkboxSpan.classList.remove("checked")

        GetDataFunc().then(data => {
            RenderGoodsInit(PriceFilterFunc(HotSaleFilterFunc(data, checkeboxDiscount.checked), minPrice.value, maxPrice.value))
        })
    })
}

export default PriceInit