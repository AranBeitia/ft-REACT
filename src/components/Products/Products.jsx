import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import './Products.scss'

const Products = () => {
	const { products, getProducts, addCart, cart } = useContext(ProductsContext)

	useEffect(() => {
		getProducts()
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<>
			<h1>Products</h1>
			<section className="product__container">
				{products &&
					products.map((product) => (
						<div className="product__item" key={product._id}>
							<p>Name: {product.name}</p>
							<p>Price: {product.price}</p>
							<button onClick={() => addCart(product)}>Add Cart</button>
						</div>
					))}
			</section>
		</>
	)
}

export default Products
