export default function PricingModule() {
  const [quantity, setQuantity] = useState(1)
  const basePrice = 299
  const discount = 0.15
  const finalPrice = basePrice * quantity * (1 - discount)

  return (
    <section className="section pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <div className="pricing-container">
          <div className="price-display">
            <div className="original-price">${basePrice}</div>
            <div className="final-price">${finalPrice.toFixed(2)}</div>
            <div className="discount-badge">Save {discount * 100}%</div>
          </div>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input 
              type="number" 
              id="quantity" 
              min="1" 
              max="10" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <button className="btn btn-primary add-to-cart">Add to Cart</button>
          <div className="payment-methods">
            <img src="https://source.unsplash.com/random/50x30/?visa" alt="Visa" />
            <img src="https://source.unsplash.com/random/50x30/?mastercard" alt="Mastercard" />
            <img src="https://source.unsplash.com/random/50x30/?paypal" alt="PayPal" />
            <img src="https://source.unsplash.com/random/50x30/?applepay" alt="Apple Pay" />
          </div>
        </div>
      </div>
    </section>
  )
}