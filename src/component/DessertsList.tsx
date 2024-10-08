import { useState } from 'react';
import { ReactComponent as Cart } from "../assets/images/icon-add-to-cart.svg";
import { ReactComponent as Minus } from "../assets/images/icon-decrement-quantity.svg";
import { ReactComponent as Plus } from "../assets/images/icon-increment-quantity.svg";
import { dessertData } from './data';

const DessertsList = ({ addToCart }: any) => {
	const [hoveredIndex, setHoveredIndex] = useState(null); // Track the index of the hovered card
	const [quantities, setQuantities] = useState(dessertData.map(() => 0)); // Track quantity per card

	const handleIncrement = (index: number) => {
		setQuantities((prevQuantities) =>
			prevQuantities.map((q, i) => (i === index ? q + 1 : q))
		);

		// Add item to the cart when quantity is incremented
		addToCart(dessertData[index], quantities[index] + 1);
	};

	const handleDecrement = (index: number) => {
		setQuantities((prevQuantities) =>
			prevQuantities.map((q, i) => (i === index && q > 1 ? q - 1 : q))
		);

		// Update the cart with the new quantity when decremented
		addToCart(dessertData[index], Math.max(quantities[index] - 1, 0));
	};

	return (
		<div className="dessert-container">
			{dessertData.map((dessert, index: any) => (
				<div className="card_view" key={index}>
					<div className="card_img">
						<img
							src={dessert.image.desktop}
							alt={dessert.name}
							className="card_desserts_img"
						/>
						<div
							className="add_to_cart"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							{hoveredIndex !== index ? (
								<div className="cart_item_one">
									<Cart />
									<p className="add_to_cart_text">Add to Cart</p>
								</div>
							) : (
								<div className="cart_item_two">
									<span className="add_circle" onClick={() => handleDecrement(index)}>
										<Minus />
									</span>
									<span>{quantities[index]}</span>
									<span className="add_circle" onClick={() => handleIncrement(index)}>
										<Plus />
									</span>
								</div>
							)}
						</div>
					</div>
					<div className="card_title_container">
						<h6 className="name">{dessert.name}</h6>
						<p className="category">{dessert.category}</p>
						<p className="price">${dessert.price.toFixed(2)}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default DessertsList;
