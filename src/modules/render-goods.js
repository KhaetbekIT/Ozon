const RenderGoodsInit = (goods = []) => {

    const goodsContainer = document.querySelector(".goods")

    goodsContainer.innerHTML = ''

    goods.forEach(goodsItem => {
        goodsContainer.insertAdjacentHTML("beforeend", `
            <!-- КАРТОЧКА ТОВАРА -->
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    ${goodsItem.sale ? (
                `<div class="card-sale">🔥Hot Sale🔥</div>`
            ) : ("")
            }
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${goodsItem.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${goodsItem.price} ₽</div>
                        <h5 class="card-title">${goodsItem.title} </h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
            <!-- END КАРТОЧКА ТОВАРА -->
        `)
    })
}

export default RenderGoodsInit