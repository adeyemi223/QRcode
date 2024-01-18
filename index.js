let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrimage");
let qrText = document.getElementById("qrText");

document.getElementById("qrButton").onclick = function() {
    if(qrText.value.length > 0){
        qrimage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
        imgBox.classList.add("show_img");
    } else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}