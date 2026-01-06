// Employee List Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Segment Control
    initSegmentControl();
    
    // Employee Detail Slide
    initEmployeeSlide();
    
    // Initialize Modals
    initModals();
});

// Segment Control
function initSegmentControl() {
    const segmentControl = document.querySelector('.fi-seg__control');
    if (!segmentControl) return;

    segmentControl.addEventListener('click', (event) => {
        const clickedButton = event.target.closest('.fi-seg__item');
        if (!clickedButton) return;

        // Update aria-pressed
        segmentControl.querySelectorAll('.fi-seg__item').forEach(button => {
            button.setAttribute('aria-pressed', 'false');
        });
        clickedButton.setAttribute('aria-pressed', 'true');

        console.log(`Segment selected: ${clickedButton.textContent.trim()}`);
        // TODO: Filter employee list based on selected segment
    });
}

// Employee Detail Slide
function initEmployeeSlide() {
    const slideElement = document.getElementById('emplSlide');
    if (!slideElement) return;

    // Tab switching
    const tabs = slideElement.querySelectorAll('.empl-slide__tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('empl-slide__tab--active'));
            // Add active to clicked tab
            tab.classList.add('empl-slide__tab--active');

            const tabName = tab.getAttribute('data-tab');
            console.log(`Tab selected: ${tabName}`);
            // TODO: Switch tab content
        });
    });

    // ESC key to close
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && slideElement.classList.contains('is-open')) {
            closeEmployeeSlide();
        }
    });
}

// Open Employee Slide
function openEmployeeSlide(employeeName) {
    const slideElement = document.getElementById('emplSlide');
    if (!slideElement) return;

    console.log(`Opening employee detail: ${employeeName}`);
    slideElement.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Prevent body scroll

    // TODO: Load employee data based on employeeName
}

// Close Employee Slide
function closeEmployeeSlide() {
    const slideElement = document.getElementById('emplSlide');
    if (!slideElement) return;

    slideElement.classList.remove('is-open');
    document.body.style.overflow = ''; // Restore body scroll
}

// Initialize Modals
function initModals() {
    initFitCheckModal();
    initSelfEvalModal();
    initOffboardingModal();
}

// Fit Check Modal
function initFitCheckModal() {
    const modal = document.getElementById('modal-fitcheck');
    if (!modal) return;

    // Rating buttons
    const ratingButtons = modal.querySelectorAll('.fitcheck__rating-btn');
    ratingButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement;
            parent.querySelectorAll('.fitcheck__rating-btn').forEach(b => {
                b.classList.remove('fitcheck__rating-btn--selected');
            });
            btn.classList.add('fitcheck__rating-btn--selected');
        });
    });
}

// Self Evaluation Request Modal
function initSelfEvalModal() {
    const modal = document.getElementById('modal-self-eval');
    if (!modal) return;

    // Deadline buttons
    const deadlineButtons = modal.querySelectorAll('.self-eval__deadline-btn');
    deadlineButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            deadlineButtons.forEach(b => {
                b.classList.remove('self-eval__deadline-btn--selected');
            });
            btn.classList.add('self-eval__deadline-btn--selected');
        });
    });
}

// Offboarding Modal
function initOffboardingModal() {
    const modal = document.getElementById('modal-offboarding');
    if (!modal) return;

    // No special initialization needed for now
}

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Open Fit Check Modal
function openFitCheckModal() {
    openModal('modal-fitcheck');
}

// Open Self Evaluation Modal
function openSelfEvalModal() {
    openModal('modal-self-eval');
}

// Open Offboarding Modal
function openOffboardingModal() {
    openModal('modal-offboarding');
}

// Submit Fit Check
function submitFitCheck() {
    console.log('Submitting fit check...');
    // TODO: Collect form data and submit
    closeModal('modal-fitcheck');
    showToast('핏 체크가 완료되었습니다.', 'success');
}

// Submit Self Evaluation Request
function submitSelfEval() {
    console.log('Submitting self evaluation request...');
    // TODO: Collect form data and submit
    closeModal('modal-self-eval');
    showToast('자기평가 요청이 발송되었습니다.', 'success');
}

// Submit Offboarding
function submitOffboarding() {
    console.log('Submitting offboarding...');
    // TODO: Collect form data and submit
    closeModal('modal-offboarding');
    showToast('오프보딩이 완료되었습니다.', 'success');
}

// Make functions globally available
window.openEmployeeSlide = openEmployeeSlide;
window.closeEmployeeSlide = closeEmployeeSlide;
window.openModal = openModal;
window.closeModal = closeModal;
window.openFitCheckModal = openFitCheckModal;
window.openSelfEvalModal = openSelfEvalModal;
window.openOffboardingModal = openOffboardingModal;
window.submitFitCheck = submitFitCheck;
window.submitSelfEval = submitSelfEval;
window.submitOffboarding = submitOffboarding;

