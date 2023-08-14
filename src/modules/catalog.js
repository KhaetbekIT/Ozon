import { GetDataFunc } from "./api"
import { CategoryFilterFunc } from "./filter"
import RenderGoodsInit from "./render-goods"

const CatalogInit = () => {
    const catalogButton = document.querySelector(".catalog-button > button")
    const catalogModal = document.querySelector(".catalog")
    const catalogModalItems = document.querySelectorAll(".catalog-list > li")

    let isOpen = false

    catalogButton.addEventListener("click", () => {
        isOpen = !isOpen

        isOpen ? catalogModal.classList.add("d-block") : catalogModal.classList.remove("d-block")
    })

    catalogModalItems.forEach(catalogModalItem => {
        catalogModalItem.addEventListener("click", ()=>{
            const textContent = catalogModalItem.textContent;

            GetDataFunc().then(data =>{
                RenderGoodsInit(CategoryFilterFunc(data, textContent))
            })
        })
    });
}

export default CatalogInit