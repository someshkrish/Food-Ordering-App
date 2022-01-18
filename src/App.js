import {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hidecartHandler = () => {
    setCartIsShown(false);
  }

  return (
    // Since the items in cart has to accessed by all the components so we are wrapping it around all the components in app.js
    <CartProvider>
      {cartIsShown && <Cart onClose={hidecartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
