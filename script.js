// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// تحميل الصورة
let img = new Image();
img.crossOrigin = "anonymous"; // لحل مشكلة CORS عند استخدام صور من الإنترنت
img.src = "https://www2.0zz0.com/2025/03/21/10/625729440.png"; // استبدل بالرابط الصحيح أو صورة محلية

// التأكد من تحميل الصورة قبل الرسم
img.onload = function() {
    console.log("✅ الصورة تم تحميلها بنجاح!");

    // ضبط حجم الكانفاس بناءً على حجم الصورة الأصلية
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // رسم الصورة على الكانفاس
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// إذا حدث خطأ في تحميل الصورة، أظهر رسالة في الكونسول
img.onerror = function() {
    console.error("❌ فشل تحميل الصورة. تأكد من الرابط أو جرب صورة محلية.");
};

// دالة لإضافة النص على الصورة
function drawText() {
    drawImage(); // إعادة رسم الصورة قبل النص
    let text = document.getElementById("textInput").value;

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
