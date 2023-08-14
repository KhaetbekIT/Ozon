import { GetDataFunc } from "./modules/api";
import CartInit from "./modules/card";
import RenderGoodsInit from "./modules/render-goods";

CartInit()

GetDataFunc().then(data =>{
    RenderGoodsInit(data)
})