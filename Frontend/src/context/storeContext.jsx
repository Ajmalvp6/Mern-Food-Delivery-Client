import { createContext, useEffect, useState } from "react";
import { getFoodApi } from "../components/services/allApi";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const [token,setToken] = useState("")

    const [food_list,setFood_list] = useState([])


    // fetch food 


    const fechFood=async()=>{
        const {data} = await getFoodApi()

        setFood_list(data.data);
        
    }



    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems({ ...cartItems, [itemId]: 1 });
        } else {
            setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId]) {
            setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
        }
    };


    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0) {

                let itemInfo = food_list.find((product)=>product._id===item)
            totalAmount +=itemInfo.price*cartItems[item]

            }
            
        }

        return totalAmount
    }


    useEffect(()=>{

        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }

        fechFood()

    },[])

   
    

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken
    };

    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
