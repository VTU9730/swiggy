import { useState } from "react";
import Item from "./Item";

const Category = ({categoryData, showItems, setShowItems}) => {
    const [category,setCategory] = useState(categoryData)
    // const [showItems, setShowItems] = useState(false)
   

    const {itemCards} = category?.card?.card

    const handleClick = () => {
        setShowItems()
    }
    return(
        <div >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <h1 className="">{category?.card?.card?.title}</h1>
                <p>^</p>
            </div>
            <hr />
            {showItems&&<Item itemCards={itemCards} />}
        </div>
    )
}

export default Category;