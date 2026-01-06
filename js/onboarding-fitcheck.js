// Onboarding Fit Check - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
});

// Tab Navigation
function initTabs() {
    const tabs = document.querySelectorAll('.onb-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            handleTabSwitch(targetTab);
        });
    });
}

function handleTabSwitch(tabName) {
    // Update active state
    const tabs = document.querySelectorAll('.onb-tab');
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('onb-tab--active');
        } else {
            tab.classList.remove('onb-tab--active');
        }
    });

    // Navigate to appropriate page
    if (tabName === 'self-eval') {
        window.location.href = 'onboarding-self-eval-list.html';
    } else if (tabName === 'cross-verify') {
        showToast('교차 검증 페이지는 준비 중입니다.', 'info');
    }
    // 'fitcheck' stays on current page
}

// Navigate to fit check detail page
function navigateToFitCheckDetail(employeeName) {
    window.location.href = 'onboarding-fitcheck-detail.html';
}

// Time filter selection (for detail page)
function selectTimeFilter(element) {
    const filters = document.querySelectorAll('.onb-time-filter');
    filters.forEach(filter => filter.classList.remove('onb-time-filter--active'));
    element.classList.add('onb-time-filter--active');
    
    // Here you would typically reload chart data
    showToast('차트 기간이 변경되었습니다.');
}

// Navigate back to list
function backToList() {
    window.location.href = 'onboarding-fitcheck-list.html';
}

// Submit fit check (from detail page)
function submitFitCheck() {
    showToast('핏 체크가 완료되었습니다.');
    setTimeout(() => {
        backToList();
    }, 500);
}

// Request self evaluation (from detail page)
function requestSelfEval() {
    showToast('자기평가 요청이 발송되었습니다.');
}

// Save feedback
function saveFeedback() {
    showToast('피드백이 저장되었습니다.');
}

