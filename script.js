// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// رابط الصورة المباشر (استبدله برابط الصورة الفعلي)
let imageUrl = "https://www2.0zz0.com/2025/03/21/10/625729440.png"; 

// تحميل الصورة
let img = new Image();
img.crossOrigin = "anonymous"; // لحل مشكلة CORS
img.src = imageUrl;

img.onload = function() {
    drawImage();
};

// دالة لإعادة رسم الصورة عند الحاجة
function drawImage() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
}

// دالة لإضافة النص على الصورة
function drawText() {
    drawImage(); // إعادة تحميل الصورة قبل الرسم
    let text = document.getElementById("textInput").value;
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, 50, canvas.height / 2);
}

// دالة لحفظ الصورة بعد التعديل
function saveImage() {
    let link = document.createElement("a");
    link.download = "my-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
