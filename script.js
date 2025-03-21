// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// رابط الصورة (استخدم رابطًا مباشرًا أو صورة محلية)
let imageUrl = "image.png"; 

// تحميل الصورة وضبط الكانفاس تلقائيًا
let img = new Image();
img.crossOrigin = "anonymous"; // لتجنب مشاكل CORS
img.src = imageUrl;

img.onload = function() {
    // ضبط حجم الكانفاس بناءً على أبعاد الصورة الأصلية
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    drawImage();
};

// دالة لرسم الصورة
function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// دالة لإضافة النص على الصورة
function drawText() {
    drawImage(); // إعادة رسم الصورة قبل النص
    let text = document.getElementById("textInput").value;

    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

// دالة لحفظ الصورة بعد التعديل
function saveImage() {
    let link = document.createElement("a");
    link.download = "my-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
