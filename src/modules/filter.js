export const SearchFilterFunc = (goods = [], value) => {
    return goods.filter(goodsItem => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const CategoryFilterFunc = (goods = [], value) => {
    return goods.filter(goodsItem => {
        return goodsItem.category === value
    })
}

export const PriceFilterFunc = (goods = [], min, max) => {
    return goods.filter(goodsItem => {
        if (min === "" && max === "") {
            return goodsItem
        } else if (min !== "" && max !== "") {

            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min !== "" && max === "") {

            return goodsItem.price > +min
        } else if (min === "" && max !== "") {

            return goodsItem.price < +max
        }
    })
}

export const HotSaleFilterFunc = (goods = [], value) => {
    return goods.filter(goodsItem => {
        if (value) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
    })
}