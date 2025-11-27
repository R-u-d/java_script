setTimeout(() => {
    const promo = document.createElement("div");

    promo.textContent = "Special Offer: Get 20% off your next purchase!";
    
    promo.className = "bg-yellow-200 p-4 rounded-lg text-xl font-semibold shadow-md";
    
    document.getElementById("message-container").appendChild(promo);
}, 3000)