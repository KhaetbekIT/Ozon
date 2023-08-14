import { GetDataFunc } from "./api"
import RenderGoodsInit from "./render-goods"
import { SearchFilterFunc } from "./filter";

const Search = () => {
    const search = document.querySelector(".search-wrapper_input")

    search.addEventListener("input", e => {
        const value = e.target.value

        GetDataFunc().then(data => {
            RenderGoodsInit(SearchFilterFunc(data, value))
        })
    })
}


export default Search