import { useState } from "react";
import AddToCart from "../../../assets/add_cart.svg";
import Plus from "../../../assets/plus.svg";
import Minus from "../../../assets/minus.svg";

const ListItem = ({ data }) => {
    // const [message,setMessage] = useState("Not added to Cart")
    // const handleClick = () => {
    //     setMessage("Added to Cart")
    //     console.log("Clicked " , message)
    // }
    const [counter,count] = useState(0)
    const handleClickAdd = () => {
        count(counter + 1)
    }
    const handleClickMinus = () => {
        if(counter<=0){return;}
        count(counter - 1)
    }
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
            <div className={"item-card__imformation"}>
                <div>
                    <span>₹{data.discountedPrice} </span>
                    <small>
                        <strike>₹{data.price} </strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            {
                counter < 1 ?
                    <button className={"cart-add"} onClick={handleClickAdd}>
                    <span>Add to Cart</span>
                    <img src={AddToCart} />
                    </button>
                :
                <div className={"cart-addon"}>
                    <button onClick={handleClickMinus}><span>-</span></button>
                    <span className={"counter"}>{counter}</span>
                    <button onClick={handleClickAdd}><span>+</span></button>
                </div>

            }
            {/* <small> {message} </small> */}
            {/* <button className={"cart-add"} onClick={ (handleClick) }>
                <span>Add to Cart</span>
                <img src={AddToCart} />
            </button> */}

{/* <div className={"cart-addon"}>
            <button onClick={handleClickMinus}><span>-</span></button>
            <span className={"counter"}>{counter}</span>
            <button onClick={handleClickAdd}><span>+</span></button>
            
</div> */}
        </div>
    )
}

export default ListItem;