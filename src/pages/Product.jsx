import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartReducer";
import axios from "axios";
import { useMessages } from "../useHooks/useTostify";

export default function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { onSuccessMessage } = useMessages();

  const getAllProducts = async () => {
    try {
      const response = await axios("https://dummyjson.com/products");
      const { data } = response;
      setProducts(data?.products || []);
    } catch (error) {
      // something went wrong
    }
  };

  const onAddOrder = (item) => {
    dispatch(addItem(item));
    onSuccessMessage("Product added succefully");
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div class="container" id="product-cards">
        <h1 class="text-center">PRODUCTS</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: "28px",
            marginTop: "100px",
          }}
        >
          {products?.map((item) => (
            <>
              <div
                key={item?.id}
                class="card"
                style={{
                  width: "18rem",
                }}
              >
                <img
                  src={item?.thumbnail}
                  class="card-img-top"
                  height="250px"
                  alt="..."
                />
                <div
                  class="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "30px",
                  }}
                >
                  <div>
                    <h5 class="card-title">{item?.title}</h5>
                    <p class="card-text">{item?.description}</p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => onAddOrder(item)}
                  >
                    Order
                  </button>
                </div>
              </div>
              {/* <div key={item?.id}>{item?.title}</div> */}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
