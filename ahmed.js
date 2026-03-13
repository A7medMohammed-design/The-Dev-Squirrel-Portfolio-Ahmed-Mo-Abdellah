// --- 1. تأثير الكتابة ---
const text = "Ahmed Mohammed Abdellah";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// --- 2. النسخ للحافظة ---
document.querySelectorAll('.copy-box').forEach(box => {
    box.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const h3 = this.querySelector('h3');
            const originalText = h3.innerText;
            h3.innerText = "تم النسخ! ✅";
            setTimeout(() => { h3.innerText = originalText; }, 2000);
        });
    });
});

// --- 3. التحكم في المودال ---
const modal = document.getElementById('customAlert');
const modalText = document.getElementById('modalText');
const modalIcon = document.getElementById('modalIcon');

function showModal(msg, icon) {
    modalText.innerText = msg;
    modalIcon.innerText = icon;
    modal.style.display = 'flex';
}

function closeAlert() { modal.style.display = 'none'; }
function warnFriend() { showModal("بطل تفعص في الموقع يا بشمهندس لا يفرقع في وشك! 🔥", "⚠️"); }
function askForMoney() { showModal("الموقع لسه تحت الإنشاء، لو عايز تشوفه ادفع الأول! 💸", "💰"); }
function askForcoffe() { showModal( "  القهوة هنا و باقي التفاصيل... ، لو عايز تشوفها ادفع الأول! 💸", "💰"); }
function askForApp() { showModal("الأبليكشن في الطريق ....بس بياخد نفسة شوية علشان تعب من المشي   ! 💸", "💰"); }


window.onclick = (e) => { if (e.target == modal) closeAlert(); };

// تشغيل الكتابة عند التحميل

window.onload = typeEffect;

function checkScreenSize() {
    const width = window.innerWidth;
    const navbar = document.querySelector('.navbar');

    if (width <= 768) {
        // لو موبايل، غير الستايل مباشرة
        navbar.style.flexDirection = 'column';
        navbar.style.backgroundColor = '#222'; // مثلاً
    } else {
        // لو لاب توب، رجعه لأصله
        navbar.style.flexDirection = 'row';
        navbar.style.backgroundColor = 'transparent';
    }
}

// شغل الفانكشن أول ما الصفحة تحمل
window.addEventListener('load', checkScreenSize);
// وشغلها كل ما حجم الشاشة يتغير
window.addEventListener('resize', checkScreenSize);
