const Card = (props) => {
    const {cloudinaryImageId, avgRatingString, locality, name, cuisines, id} = props.restaurant.info;
    return(
        <div className="w-52 p-2 h-full bg-slate-200 hover:bg-slate-400">
            <img className="w-52 h-52 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h1 className="font-bold">{name}</h1>
            <h2>{avgRatingString} Stars</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default Card;