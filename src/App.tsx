import { useState } from 'react';
import DessertsList from './component/DessertsList';
import CartItems from './component/CartItems';

const App = () => {
  const [cart, setCart] = useState<any>([]); // Array to track items in the cart
  const [orderTotal, setOrderTotal] = useState(0); // Track the total sum

  const addToCart = (dessert: { name: any; price: number; image: string }, quantity: number) => {
    const existingItem = cart.find((item: { name: any }) => item.name === dessert.name);
    let updatedCart;

    if (existingItem) {
      // Update quantity if the item is already in the cart
      updatedCart = cart.map((item: { name: any; price: number }) =>
        item.name === dessert.name
          ? { ...item, quantity, total: quantity * item.price }
          : item
      );
    } else {
      // Add new item to cart, including the image
      updatedCart = [...cart, { ...dessert, quantity, total: quantity * dessert.price }];
    }

    setCart(updatedCart);
    calculateOrderTotal(updatedCart); // Update total sum
  };


  const calculateOrderTotal = (updatedCart: any[]) => {
    const total = updatedCart.reduce((sum: any, item: { total: any; }) => sum + item.total, 0);
    setOrderTotal(total);
  };

  const removeFromCart = (dessert: any) => {
    const updatedCart = cart.filter((item: { name: any; }) => item.name !== dessert.name);
    setCart(updatedCart);
    calculateOrderTotal(updatedCart); // Update total sum
  };

  return (
    <main>
      <div className="card_container">
        <h1 className="card_top_title">Desserts</h1>
        <section className="section_one_container">
          <DessertsList addToCart={addToCart} /> {/* Pass addToCart */}
        </section>
      </div>

      <section className="section_two_container">
        <CartItems cart={cart} removeFromCart={removeFromCart} orderTotal={orderTotal} />
      </section>
    </main>
  );
};

export default App;
