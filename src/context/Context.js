import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products =[{
    
      id: 1,
      name: "Bread",
      price: "20",
      image: "https://handletheheat.com/wp-content/uploads/2015/03/Burger-Buns-02-square.jpg" ,
      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    
  },

{
  
    
    id: 2,
    name: "Tomato",
    price: "5",
    image: "http://www.westfloridaveincenter.com/wp-content/uploads/2017/07/tomato.png" ,
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  



},

{
  
    
  id: 3,
  name: "Chicken",
  price: "40",
  image: "https://www.mediainfoline.com/wp-content/uploads/2021/07/KFC-Double-Down-Burger.jpg" ,
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),




},

{
  
    
  id: 4,
  name: "cheese",
  price: "10",
  image: "https://static.onecms.io/wp-content/uploads/sites/24/1970/01/grilling_cheese_burger-185291480-2000.jpg" ,
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),




},

{
  
    
  id: 5,
  name: "cauliflwer",
  price: "5",
  image: "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/recipes/cauliflower-and-chickpea-burgers/cauliflower-burger-620x400-wd-noexp.jpg?rev=927f8d1b82fd41a38d217a46cdc6e205" ,
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),




},

{
  
    
  id: 6,
  name: "onion",
  price: "5",
  image: "https://st2.depositphotos.com/1000504/6382/i/950/depositphotos_63826097-stock-photo-red-onion-slices.jpg" ,
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),




}





];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
