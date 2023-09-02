const RenderGoodsInit = (goods = []) => {

    const goodsContainer = document.querySelector(".goods")

    localStorage.setItem("goods", JSON.stringify(goods))

    goodsContainer.innerHTML = ''

    goods.forEach(item => {
        if (item) {
            goodsContainer.insertAdjacentHTML("beforeend", `
                <!-- КАРТОЧКА ТОВАРА -->
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card" data-key="${item.id}">
                            ${item.sale ? (`<div class="card-sale">🔥Hot Sale🔥</div>`) : ("")}
                        <div class="card-img-wrapper">
                            <span class="card-img-top"
                                style="background-image: url('${item.img}')"></span>
                        </div>
                        <div class="card-body justify-content-between">
                            <div class="card-price">${item.price} ₽</div>
                            <h5 class="card-title">${item.title} </h5>
                            <button class="btn btn-primary">В корзину</button>
                        </div>
                    </div>
                </div>
                <!-- END КАРТОЧКА ТОВАРА -->
            `)
        }
    })
}

export default RenderGoodsInit