import { Key } from 'react';
import { ReactComponent as Neutral } from "../assets/images/icon-carbon-neutral.svg";
import { ReactComponent as Remove } from "../assets/images/icon-remove-item.svg";
import { ReactComponent as Empty } from "../assets/images/illustration-empty-cart.svg";
import OrderModal from '../component/OrderModal';


const CartItems = ({ cart, removeFromCart, orderTotal }: any) => {

	return (
		<div>
			{cart.length === 0 ? <div className="your_cart_container">
				<h3>Your Cart ({cart.length})</h3>
				<div className='section_two_added'>
					<Empty />
					<p>Your added items will appear here</p>
				</div>
			</div> :
				<div className="your_cart_container">
					<h3>Your Cart ({cart.length})</h3>
					<div>
						<div className="item_container">
							{cart.map((item: any, index: Key | null | undefined) => (
								<div className="your_cart_item_container" key={index}>
									<div className="your_cart_item_container_sub">
										<h6>{item.name}</h6>
										<div className="your_cart_item">
											<span className="cart_item1">{item.quantity}x</span>
											<span className="cart_item2">@${item.price.toFixed(2)}</span>
											<span className="cart_item3">${item.total.toFixed(2)}</span>
										</div>
									</div>
									<span className="remove_circle" onClick={() => removeFromCart(item)}>
										<Remove />
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="Order_total">
						<p>Order Total</p>
						<h5>${orderTotal.toFixed(2)}</h5> {/* Display total sum */}
					</div>
					<div className="arder-neutral">
						<Neutral />
						<p>This is a <b>carder-neutral</b> delivery</p>
					</div>
					<OrderModal
						cart={cart}
						orderTotal={orderTotal} />
				</div>}
		</div>
	)
}

export default CartItems