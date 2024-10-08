
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ModalHeader from './ModalHeader';



const OrderModal = ({ cart, orderTotal }: any) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	return (
		<>
			<button onClick={() => setShow(true)}>
				<p>Confirm Order</p>
			</button>
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader />
				<Modal.Body>
					<div>
						<h2>Order Confirmed</h2>
					</div>
					<p className='title_small_num'>We hope you enjoy your food!</p>

					<div>
						<div className='your_cart_item_model'>
							{cart.map((item: any, index: number) => (
								<div className="your_cart_item_container" key={index}>
									<div className='your_cart_img_container'>
										<div className='your_cart_img'>
											<img src={item.image.thumbnail} alt={item.name} className="cart_item_image" />
										</div>
										<div className="your_cart_item_container_sub">
											<h6>{item.name}</h6>
											<div className="your_cart_item">
												<span className="cart_item1">{item.quantity}x</span>
												<span className="cart_item3">@${item.price.toFixed(2)}</span>
											</div>
										</div>
									</div>
									<h6 className="remove_circle_num">
										${item.total.toFixed(2)}
									</h6>
								</div>
							))}

							<div className="remove_circle_price">
								<p className='price_name'>Order Total</p>
								<h2>${orderTotal.toFixed(2)}</h2>
							</div>
						</div>
						<button className='mt-4' onClick={handleClose}>
							<p>Start New Order</p>
						</button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default OrderModal;

