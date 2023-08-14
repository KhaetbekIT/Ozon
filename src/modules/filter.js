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