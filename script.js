//script for team section
// بيانات أعضاء الفريق
const teamMembers = [
    {
        name: 'Souhail Allamou',
        position: 'UI/UX Designer',
        description: 'Three years of experience, our UI/UX designer specializes in creating stunning interfaces. With a keen eye for details, ensuring that our product is visually appealing, and user-friendly.',
        image: '/imgs/member-1.png'
    },
    {
        name: 'Member 2',
        position: 'Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        image: '/imgs/member-2.png'
    },
    {
        name: 'Member 3',
        position: 'Backend Developer',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        image: '/imgs/member-3.png'
    },
    {
        name: 'Member 4',
        position: 'Backend Developer',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        image: '/imgs/member-4.png'
    },
    {
        name: 'Member 5',
        position: 'Backend Developer',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        image: '/imgs/member-5.png'
    },
    {
        name: 'Member 6',
        position: 'Backend Developer',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        image: '/imgs/member-3.png'
    },
];

// اختيار عناصر HTML لتحديث النصوص والصور
const profiles = document.querySelectorAll('.profile');
const nameElement = document.querySelector('.profile-info .name');
const positionElement = document.querySelector('.profile-info .position');
const descriptionElement = document.querySelector('.profile-info .description');
const mainProfileImg = document.getElementById('main-profile-img');
let currentIndex = 0; // للحفاظ على الفهرس الحالي للعضو

// تحديث عرض العضو بناءً على الفهرس الحالي
function updateProfileInfo(index) {
    const member = teamMembers[index];
    nameElement.textContent = member.name;
    positionElement.textContent = member.position;
    descriptionElement.textContent = member.description;
    mainProfileImg.src = member.image;
}

// إضافة حدث النقر لكل صورة عضو
profiles.forEach((profile, index) => {
    profile.addEventListener('click', () => {
        currentIndex = index; // تحديث الفهرس الحالي
        updateProfileInfo(currentIndex);
    });
});

// الانتقال إلى العضو السابق باستخدام السهم
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : teamMembers.length - 1;
    updateProfileInfo(currentIndex);
});

// الانتقال إلى العضو التالي باستخدام السهم
document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex < teamMembers.length - 1) ? currentIndex + 1 : 0;
    updateProfileInfo(currentIndex);
});

// تحديث المعلومات عند تحميل الصفحة لأول مرة
updateProfileInfo(currentIndex);

// script for  Testimonial section
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial > 0) ? currentTestimonial - 1 : testimonials.length - 1;
    showTestimonial(currentTestimonial);
});

document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
    showTestimonial(currentTestimonial);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

showTestimonial(currentTestimonial);

