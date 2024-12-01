import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Shiver from "./Shiver";
import Category from "./Category";

const Restaurant = () => {

    const [resInfo, setResInfo] = useState(null)
    const [restaurantName, setRestaurantName] = useState('')
    const [items, setItems] = useState([])
    const [showItems, setShowItems] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        fetchRestaurant()
    },[])

    const fetchRestaurant = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4643489&lng=78.3755955&restaurantId="+id)
        const json = await data.json()
        setRestaurantName(json?.data?.cards[0]?.card?.card?.text)
        setResInfo(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

        const listItems = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const restaurantItems = listItems.filter((item) => item?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 
        setItems(restaurantItems)
    }

    return(
        <div className="w-6/12 m-auto">
            <h1 className="font-bold text-center my-4 text-3xl">{restaurantName}</h1>
            {items && items.map((item, index) => <Category categoryData={item} showItems = {showItems==index} setShowItems = {() => setShowItems(() => showItems == index? null : index)} />)}
        </div>
    )
}

export default Restaurant;