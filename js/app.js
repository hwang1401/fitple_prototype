// Fitple Prototype - App JavaScript

// Toast System
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Modal System
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // .modal-overlay를 사용하는 경우 active 클래스 추가
        if (modal.classList.contains('modal-overlay')) {
            modal.classList.add('active');
        }
        // .modal을 사용하는 경우 (오프보딩) display 설정
        else {
            modal.style.display = 'flex';
        }
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // .modal-overlay를 사용하는 경우 active 클래스 제거
        if (modal.classList.contains('modal-overlay')) {
            modal.classList.remove('active');
        }
        // .modal을 사용하는 경우 (오프보딩) display 설정
        else {
            modal.style.display = 'none';
        }
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Filter Panel
function openFilter() {
    const panel = document.getElementById('filter-panel');
    const overlay = document.getElementById('filter-overlay');
    if (panel && overlay) {
        panel.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeFilter() {
    const panel = document.getElementById('filter-panel');
    const overlay = document.getElementById('filter-overlay');
    if (panel && overlay) {
        panel.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function applyFilter() {
    closeFilter();
    showToast('필터가 적용되었습니다.');
}

// Tab Switching
function switchTab(tabGroup, tabName) {
    const tabs = document.querySelectorAll(`[data-tab-group="${tabGroup}"]`);
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        }
    });
    
    const panels = document.querySelectorAll(`[data-panel-group="${tabGroup}"]`);
    panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.dataset.panel === tabName) {
            panel.classList.add('active');
        }
    });
}

// Time Slot Selection
function selectTimeSlot(element) {
    const slots = element.parentElement.querySelectorAll('.time-slot');
    slots.forEach(slot => slot.classList.remove('selected'));
    if (!element.classList.contains('disabled')) {
        element.classList.add('selected');
    }
}

// Checklist Toggle
function toggleChecklistItem(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}

// Navigation Helper
function navigateTo(url) {
    window.location.href = url;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close modal on X button
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Tab clicks
    document.querySelectorAll('.tab[data-tab]').forEach(tab => {
        tab.addEventListener('click', function() {
            const group = tab.dataset.tabGroup;
            const name = tab.dataset.tab;
            switchTab(group, name);
        });
    });
    
    // Time slot clicks
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', function() {
            selectTimeSlot(slot);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            closeFilter();
        }
    });
});

// Specific Actions for Usability Test
function viewTalentInfo() {
    openModal('modal-view-info');
}

function confirmViewInfo() {
    closeModal('modal-view-info');
    showToast('티켓 1개가 사용되었습니다.');
    setTimeout(() => {
        navigateTo('talent-detail-unlocked.html');
    }, 500);
}

function openProposal() {
    openModal('modal-proposal');
}

function sendProposal() {
    closeModal('modal-proposal');
    showToast('채용 제안이 발송되었습니다.');
}

function openMeetingModal() {
    openModal('modal-meeting');
}

function bookMeeting() {
    closeModal('modal-meeting');
    showToast('면담이 예약되었습니다.');
}

function openRedeployProfile() {
    openModal('modal-redeploy');
}

function saveRedeployProfile() {
    closeModal('modal-redeploy');
    showToast('재배치 프로필이 저장되었습니다.');
}

function openTalentPoolModal() {
    openModal('modal-talent-pool');
}

function registerTalentPool() {
    closeModal('modal-talent-pool');
    showToast('인재풀에 등록되었습니다.');
}

function openTicketPurchase() {
    openModal('modal-ticket');
}

function purchaseTicket() {
    closeModal('modal-ticket');
    showToast('티켓이 구매되었습니다.');
}

// Onboarding specific
function openCrossVerificationDetail(name) {
    navigateTo('cross-verification-detail.html');
}

// Offboarding specific
function openOffboardingDetail(name) {
    navigateTo('offboarding-detail.html');
}

function confirmOffboarding() {
    closeModal('modal-confirm-offboarding');
    showToast('오프보딩이 확정되었습니다.');
}

function cancelOffboarding() {
    closeModal('modal-cancel-offboarding');
    showToast('오프보딩이 취소되었습니다.');
}



