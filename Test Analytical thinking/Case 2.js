const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

// Function to calculate the total before shipping
function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100);
    const totalAfterDiscount = subtotal - discountAmount;

    return totalAfterDiscount;
}

// Arrow function to calculate shipping
const calculateShipping = (total) => {
    return total >= 500000 ? 0 : shippingCost;
};

// Calculate the purchase
const subtotal = productPrice * quantity;
const discountAmount = subtotal * (discountPercent / 100);
const totalBeforeShipping = calculateTotal(
    productPrice,
    quantity,
    discountPercent
);

const shipping = calculateShipping(totalBeforeShipping);
const totalPayment = totalBeforeShipping + shipping;

// Display the result
console.log(`
Customer: ${customerName}
Product Price: Rp${productPrice}
Quantity: ${quantity}
Subtotal: Rp${subtotal}
Discount: Rp${discountAmount}
After Discount: Rp${totalBeforeShipping}
Shipping: Rp${shipping}
Total Payment: Rp${totalPayment}
`);