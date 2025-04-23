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
        window.location.href = "upi://pay?pa=ideepbanik@ybl&pn=Deep%20Banik&mc=0000&mode=02&purpose=00"; // Replace upi id and name keep the format same
    }, 3000);
}