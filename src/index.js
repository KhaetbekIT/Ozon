import { GetDataFunc } from "./modules/api";
import CartInit from "./modules/card";
import RenderGoodsInit from "./modules/render-goods";
import Search from "./modules/search";

CartInit()

GetDataFunc().then(data =>{
    RenderGoodsInit(data)
})

Search()