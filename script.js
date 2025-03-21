// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// رابط الصورة المباشر (استبدله برابط الصورة الفعلي)
let imageUrl = "https://www2.0zz0.com/2025/03/21/10/625729440.png"; 

// تحميل الصورة وضبط حجم الكانفاس تلقائيًا
let img = new Image();
img.crossOrigin = "anonymous"; // لحل مشكلة CORS إذا كانت الصورة على سيرفر خارجي
img.src = imageUrl;

img.onload = function() {
    // ضبط حجم الكانفاس بناءً على حجم الصورة الأصلية
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
};

// دالة لإضافة النص على الصورة
function drawText() {
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
