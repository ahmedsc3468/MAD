let cart = [];

const addProduct = (productId, productName, quantity, price) => {
    cart.push({ productId, productName, quantity, price });
};

const deleteProduct = (productId) => {
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
};

const modifyProductQuantity = (productId, newQuantity) => {
    cart = cart.map(item => 
        item.productId === productId 
        ? { ...item, quantity: newQuantity }
        : item
    );
};

const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const showCartDetails = () => {
    return cart.map(item => ({
        productName: item.productName,
        quantity: item.quantity,
        totalPrice: item.price * item.quantity
    }));
};

const removeZeroQuantityProducts = () => {
    cart = cart.filter(item => item.quantity > 0);
};

const applyDiscount = (discountPercentage) => {
    const totalCost = getTotalPrice();
    const discountAmount = totalCost * (discountPercentage / 100);
    return totalCost - discountAmount;
};

addProduct(101, "Gaming PC", 1, 1500);
addProduct(102, "Monitor", 2, 300);
addProduct(103, "Keyboard", 4, 50);

console.log("Current Cart:", showCartDetails());
console.log("Total Price:", getTotalPrice());

modifyProductQuantity(101, 2);
console.log("Cart After Quantity Update:", showCartDetails());

deleteProduct(102);
console.log("Cart After Product Removal:", showCartDetails());

console.log("Total Price After Discount (15%):", applyDiscount(15));

removeZeroQuantityProducts();
console.log("Cart After Removing Zero Quantity Products:", showCartDetails());
