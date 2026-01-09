function showQR(){
    var qrElement = document.getElementById("rye-qr-share");
    if (qrElement.classList.contains("is-hidden")){
        qrElement.classList.remove("is-hidden");
    } else {
        qrElement.classList.add("is-hidden");
    }

}
function hideQR(){
    var qrElement = document.getElementById("rye-qr-share");
    if (!qrElement.classList.contains("is-hidden")){
        qrElement.classList.add("is-hidden");
    }
}