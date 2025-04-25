function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}
function handleCopy() {
    const upi = document.getElementById("upiID").innerText;
    navigator.clipboard.writeText(upi);
    showToast("UPI ID copied!");
}
function handleDownload() {
    showToast("Wait");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assents/downloadQR.png";
        link.download = "phonepe-qr.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}
function handlePay() {
    showToast("Opening UPI app(s)");
    setTimeout(() => {
        window.location.href = "upi://pay?pa=prashant90@fam&pn=PRASHANT%20MAROTHIA&mc=0000&mode=02&purpose=00"; // Replace upi id and name keep the format same
    }, 3000);
}




const paymentAddresses = {
    paypal: 'https://PayPal.Me/example', // Update Paypal value
    binance: '202-5xx-xx38', // Update Binance Pay value
    coffee: 'https://buymeacoffee.com/example' // Update Buy me coffe value
};

const ContactLink = 'https://t.me/xaepm01'; // Update Contact-Link value

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('paypal-address').textContent = paymentAddresses.paypal;
    document.getElementById('binance-address').textContent = paymentAddresses.binance;
    document.getElementById('coffee-address').textContent = paymentAddresses.coffee;
    document.getElementById('contact-link').href = ContactLink;
});
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

function copyPaymentAddress(method) {
    const address = paymentAddresses[method];
    if (!address) return;
    if (method === 'paypal' || method === 'coffee') {
        window.location.href = address;
        return;
    }
    if (method === 'binance') {
        navigator.clipboard.writeText(address);
        showToast(`${method.charAt(0).toUpperCase() + method.slice(1)} copied!`);
    }
}
