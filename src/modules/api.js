const GetDataFunc = (path = "") => {
    return fetch(`https://ozon-server-api.onrender.com/goods/${path}`)
        .then(response => response.json())

}

const PostDataFunc = (path = "", data = {}) => {
    return fetch(`https://ozon-server-api.onrender.com/goods/${path}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Context-type": "application/json"
        }
    })
}

const DeleteDataFunc = (path = "", id = 0) => {
    return fetch(`https://ozon-server-api.onrender.com/goods/${path}/${id}`)
}

export { GetDataFunc, PostDataFunc, DeleteDataFunc }