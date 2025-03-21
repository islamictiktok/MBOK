// تحديد الكانفاس والرسم عليه
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// تحميل الصورة في الخلفية وضبط حجم الكانفاس تلقائيًا
let img = new Image();
img.src = "image.png"; // تأكد أن الصورة موجودة في نفس المجلد
img.onload = function() {
    // ضبط حجم الكانفاس بناءً على حجم الصورة
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
