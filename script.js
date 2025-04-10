// This is the function to show the pop-up
function showPopup(productName) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = `The ${productName} has been successfully added to your cart.`; 
    popup.style.display = "block"; 
}

// Also, function to close the pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the pop-up
}

// function to display a pop-up message using the retrieved product name
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-product-name"); 
            showPopup(productName); 
        });
    });
});