// Onboarding Management - Self Evaluation JS

document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initSegmentControls();
    initTabNavigation();
    initHistoryCards();
});

// Segment Controls
function initSegmentControls() {
    const segmentItems = document.querySelectorAll('.se-segment-item');
    
    segmentItems.forEach(item => {
        item.addEventListener('click', function() {
            segmentItems.forEach(i => i.classList.remove('se-segment-item--active'));
            this.classList.add('se-segment-item--active');
            
            // Here you would filter the table based on selected segment
            console.log('Filter changed:', this.textContent.trim());
        });
    });
}

// Tab Navigation
function initTabNavigation() {
    const tabs = document.querySelectorAll('.se-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Navigate based on tab
            switch(targetTab) {
                case 'fitcheck':
                    window.location.href = 'onboarding-fitcheck-list.html';
                    break;
                case 'self-eval':
                    // Already on self-eval page
                    break;
                case 'cross-verify':
                    // Cross verify not implemented yet
                    console.log('Cross verify clicked');
                    break;
            }
        });
    });
}

// History Cards (Detail Page)
function initHistoryCards() {
    // Add click listeners to all history cards if on detail page
    const historyCards = document.querySelectorAll('.sed-history-card');
    if (historyCards.length === 0) return; // Not on detail page
    
    // Cards are already set up with onclick in HTML
}

function toggleHistoryCard(headerElement) {
    const card = headerElement.closest('.sed-history-card');
    card.classList.toggle('sed-history-card--expanded');
}

// Navigation Functions
function navigateToSelfEvalDetail() {
    window.location.href = 'onboarding-self-eval-detail.html';
}

function backToList() {
    window.location.href = 'onboarding-self-eval-list.html';
}

function viewCrossVerification() {
    showToast('교차검증 페이지로 이동합니다.', 'info');
    // Implementation would navigate to cross verification page
}

// Modal Functions
function submitSelfEvalRequest() {
    showToast('자기평가 요청이 발송되었습니다.', 'success');
    closeModal('modal-self-eval');
}

// Make functions globally available
window.toggleHistoryCard = toggleHistoryCard;
window.navigateToSelfEvalDetail = navigateToSelfEvalDetail;
window.backToList = backToList;
window.viewCrossVerification = viewCrossVerification;
window.submitSelfEvalRequest = submitSelfEvalRequest;
