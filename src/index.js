import { GetDataFunc } from "./modules/api";
import CartInit from "./modules/card";
import CatalogInit from "./modules/catalog";
import PriceInit from "./modules/price";
import RenderGoodsInit from "./modules/render-goods";
import Search from "./modules/search";

CartInit()

GetDataFunc().then(data =>{
    RenderGoodsInit(data)
})

Search()

CatalogInit()

PriceInit()