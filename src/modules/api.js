const GetDataFunc = (path = "") => {
    return fetch(`https://khaetbek-ozon-ab945-default-rtdb.firebaseio.com/goods.json/${path}`)
        .then(response => response.json())

}

const PostDataFunc = (path = "", data = {}) => {
    return fetch(`https://khaetbek-ozon-ab945-default-rtdb.firebaseio.com/goods.json/${path}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Context-type": "application/json"
        }
    })
}

const DeleteDataFunc = (path = "", id = 0) => {
    return fetch(`https://khaetbek-ozon-ab945-default-rtdb.firebaseio.com/goods.json/${path}/${id}`)
}

export { GetDataFunc, PostDataFunc, DeleteDataFunc }