// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// رابط الصورة (استخدم رابطًا مباشرًا أو صورة محلية)
let imageUrl = "https://www2.0zz0.com/2025/03/21/10/625729440.png"; 

// تحميل الصورة وضبط الكانفاس تلقائيًا
let img = new Image();
img.crossOrigin = "anonymous"; // لحل مشكلة CORS عند تحميل صورة خارجية
img.src = imageUrl;

img.onload = function() {
    // جعل الكانفاس يأخذ نفس أبعاد الصورة الأصلية
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    // رسم الصورة على الكانفاس
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// دالة لإضافة النص على الصورة
function drawText() {
    let text = document.getElementById("textInput").value;

    // إعادة رسم الصورة قبل النص حتى لا يتم مسحه
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // إعدادات النص
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";

    // رسم النص في منتصف الصورة
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

// دالة لحفظ الصورة بعد التعديل
function saveImage() {
    let link = document.createElement("a");
    link.download = "my-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
