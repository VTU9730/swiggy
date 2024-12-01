const Item = ({itemCards}) => {
    console.log("itemCards", itemCards);
    return(
        <div>
            {itemCards.map(ele=>
                <div className="flex justify-between my-4">
                    <div className="w-9/12">
                        <p>{ele?.card?.info?.name}</p>
                        <p>{ele?.card?.info?.price/100}</p>
                        <p className="text-xs">{ele?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ele.card?.info.imageId} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item;