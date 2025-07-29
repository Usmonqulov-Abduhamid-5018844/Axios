/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Errorwidget from "../ui/Errorwidget";
import Loading from "../ui/Loading";
import Popap from "../ui/Popap";

function Product() {
  const [data, setData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const [popapData, setPopap] = useState(null);

  let limit = 10;
  useEffect(() => {
    setLoding(true);
    axios
      .get("https://fakestoreapi.com/products", { params: { limit } })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoding(false);
      });
  },[]);

  return (
    <div className=" mt-[100px]">
      {error && <Errorwidget />}
      {loading && <Loading count={limit} />}
      <div className="container mx-auto  flex flex-wrap justify-between gap-[30px] max-[1291px]:justify-around max-[1291px]: gap-5">
        {data?.map((item) => (
          <div  
            onClick={()=> setPopap(item)}
            className=" border-2 border-amber-200 rounded-lg shadow-lg  overflow-hidden w-[400px] p-[16px] flex flex-col gap-[25px] max-[860px]:w-[90%]"
            key={item.id}
          >
            <dir className="w-[100%] h-[350px] flex ">
              <img className="w-[100%] h-[100%]" src={item.image} alt="" />
            </dir>
            <div className="flex flex-col gap-[20px]">
              <span
                title={item.title}
                className="line-clamp-1 font-bold text-[25px]"
              >
                {item.title}
              </span>
              <strong className="font-bold text-[18px]">
                {item.price} USD
              </strong>
            </div>
          </div>
        ))}
      </div>
        {popapData && (
          <Popap onClose={() => setPopap(null)}>
              <div className="cards w-[1200px] h-[600px] bg-white flex p-[20px] gap-5 rounded-2xl">
                <div className="w-[50%]">
                  <img className="h-[100%] w-[100%]" src={popapData.image} alt="" />
                </div>
                <div className="pt-[20px] overflow-y-auto flex flex-col gap-3 w-[50%] h-[70%] justify-center my-auto ">
                   <span className="font-bold text-[25px]">{popapData.title}</span> 
                   <strong className="text-[20px]">${popapData.price} USD</strong>
                   <b className="text-[25px]">{popapData.category}</b>
                   <p className="text-wrap text-[18px]">{popapData.description}</p>
                </div>
              </div>
          </Popap>
        )}
    </div>
  );
}

export default Product;
