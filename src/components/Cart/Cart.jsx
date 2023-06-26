import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'

const Cart = () => {
	const { cart, clearCart } = useContext(ProductsContext)
	const { createOrder } = useContext(OrdersContext)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const createNewOrder = () => {
		createOrder(cart)
		clearCart()
	}

	return (
		<>
			{(cart.length > 0 &&
				cart.map((cartItem, i) => (
					<div className="cart" key={i}>
						<span>{cartItem.name}</span>
						<span>{cartItem.price.toFixed(2)} €</span>
					</div>
				))) || <span>No tienes ningún producto añadido</span>}
			{cart.length > 0 && (
				<>
					<button onClick={() => clearCart()}>Clear cart</button>
					<button onClick={() => createNewOrder()}>Create Order</button>
				</>
			)}
		</>
	)
}

export default Cart
