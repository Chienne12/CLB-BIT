document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle (Giống V1.3) ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('#primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isVisible = primaryNav.getAttribute('data-visible') === 'true';
            primaryNav.setAttribute('data-visible', !isVisible);
            navToggle.setAttribute('aria-expanded', !isVisible);
        });
    }

    // --- Event Popup Functionality (Giống V1.3) ---
    const eventPopup = document.getElementById('eventPopup');
    const openEventPopupLink = document.getElementById('openEventPopupLink');
    const closePopupButtons = document.querySelectorAll('.popup-close-btn, .popup-close-secondary-btn');

    function openPopup() {
        if (eventPopup) {
            eventPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    function closePopup() {
        if (eventPopup) {
            eventPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    if (openEventPopupLink) {
        openEventPopupLink.addEventListener('click', (event) => {
            event.preventDefault();
            openPopup();
        });
    }

    closePopupButtons.forEach(button => {
        button.addEventListener('click', closePopup);
    });

    if (eventPopup) {
        eventPopup.addEventListener('click', (event) => {
            if (event.target === eventPopup) {
                closePopup();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && eventPopup && eventPopup.style.display === 'flex') {
            closePopup();
        }
    });

    // --- Contact Form Submission (Placeholder - Giống V1.3) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            // ... (phần còn lại của validation và xử lý form giống V1.3)
            let isValid = true;
            if (nameInput.value.trim() === '') {
                alert('Vui lòng nhập Họ và Tên.');
                nameInput.focus();
                isValid = false;
                return;
            }
            if (emailInput.value.trim() === '') {
                alert('Vui lòng nhập Email.');
                emailInput.focus();
                isValid = false;
                return;
            } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
                alert('Định dạng Email không hợp lệ.');
                emailInput.focus();
                isValid = false;
                return;
            }
            if (messageInput.value.trim() === '') {
                alert('Vui lòng nhập Nội dung tin nhắn.');
                messageInput.focus();
                isValid = false;
                return;
            }
            if (isValid) {
                console.log('Form data:', { /* ... */ });
                alert('Cảm ơn bạn đã liên hệ! (tin nhắn mẫu).');
                contactForm.reset();
            }
        });
    }

    // --- BẮT ĐẦU CHỨC NĂNG HERO SLIDER (MỚI CHO V1.4) ---
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlideIndex = 0;
    const slideInterval = 5000; // Thời gian chuyển slide (5 giây)

    function showNextSlide() {
        if (heroSlides.length === 0) return; // Không có slide nào để hiển thị

        // Ẩn slide hiện tại
        heroSlides[currentSlideIndex].classList.remove('active');

        // Chuyển sang slide tiếp theo
        currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;

        // Hiển thị slide mới
        heroSlides[currentSlideIndex].classList.add('active');
    }

    // Tự động chuyển slide nếu có nhiều hơn 1 slide
    if (heroSlides.length > 1) {
        // Hiển thị slide đầu tiên ngay lập tức (nếu class 'active' chưa được set trong HTML)
        if (!document.querySelector('.hero-slide.active') && heroSlides[0]) {
             heroSlides[0].classList.add('active');
        }
        setInterval(showNextSlide, slideInterval);
    } else if (heroSlides.length === 1) {
        // Nếu chỉ có 1 slide, đảm bảo nó được hiển thị
        heroSlides[0].classList.add('active');
    }
    // --- KẾT THÚC CHỨC NĂNG HERO SLIDER ---

}); // Kết thúc DOMContentLoaded