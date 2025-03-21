// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// تحميل الصورة في الخلفية
let img = new Image();
img.src = "image.png";
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// دالة لإضافة النص على الصورة
function drawText() {
    let text = document.getElementById("textInput").value;
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, 50, 150); // يمكنك تغيير الإحداثيات حسب الحاجة
}

// دالة لحفظ الصورة بعد التعديل
function saveImage() {
    let link = document.createElement("a");
    link.download = "my-image.png";
    link.href = canvas.toDataURL();
    link.click();
}