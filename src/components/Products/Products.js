import { useState } from "react";
import ListItem from "./ListItems/ListItem";
import Loader from "../UI/Loader"

const Products = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Item1",
            price: 699,
            discountedPrice: 490,
            thumbnail: "dress1.jpeg"
        },
        {
            id: 2,
            title: "Item2",
            price: 1599,
            discountedPrice: 890,
            thumbnail: "dress22.jpeg"
        },
        {
            id: 3,
            title: "Item3",
            price: 1299,
            discountedPrice: 999,
            thumbnail: "dress3.jpeg"

        }
    ])
    return (
        <>
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {/* <ListItem data={items[0]} />

                <ListItem data={items[1]} />

                <ListItem data={items[2]} /> */}
                    {
                        items.map(item => {
                            console.log(item)
                            return (<ListItem data={item} />)
                        })

                    }

                </div>
            </div>
            <Loader />
        </>
    )
}

export default Products;