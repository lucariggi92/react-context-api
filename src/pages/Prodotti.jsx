import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "../context/BudgetContext";

export default function Prodotti() {
    const [products, setProducts] = useState([]);

    //aggiungo usebudget
    const {isBudget}=useBudget();



    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data)
        })
    },[])

    //adesso mi serve filtrare i prodotti e visualizzarli nella stesa pagina una volta che clicco il bottone nell'header
    const filteredProducts = isBudget ?products.filter((cuProduct)=>cuProduct.price <= 30) : products;

    return (

        <main className=" container  ">

            <h2 className="p-5 text-center">I Nostri Prodotti</h2>

            <div className="row  gy-4 mt-2 d-flex justify-content-center ">


                {filteredProducts.map((cuProduct) => (

                    <>
                        <Link className=" col-12 col-sm-6 col-md-4 col-lg-3 border p-4 d-flex flex-column justify-content-between m-2 rounded-3" 
                        key={cuProduct.id} 
                        to={`/prodotti/${cuProduct.id}`}>

                            <img src={cuProduct.image} className="img-fluid" />
                            <h5 className="mt-4">{cuProduct.title}</h5>
                        </Link>
                    </>
                )
                )}

            </div>





        </main>




    )
}