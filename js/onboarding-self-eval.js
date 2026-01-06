// Onboarding Self Evaluation - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
});

// Tab Navigation
function initTabs() {
    const tabs = document.querySelectorAll('.se-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            handleTabSwitch(targetTab);
        });
    });
}

function handleTabSwitch(tabName) {
    // Update active state
    const tabs = document.querySelectorAll('.se-tab');
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('se-tab--active');
        } else {
            tab.classList.remove('se-tab--active');
        }
    });

    // Navigate to appropriate page
    if (tabName === 'fitcheck') {
        window.location.href = 'onboarding-fitcheck-list.html';
    } else if (tabName === 'cross-verify') {
        showToast('교차 검증 페이지는 준비 중입니다.', 'info');
    }
    // 'self-eval' stays on current page
}

// Navigate to self evaluation detail page
function navigateToSelfEvalDetail(employeeName) {
    window.location.href = 'onboarding-self-eval-detail.html';
}

// Remind self evaluation
function remindSelfEval(employeeName) {
    showToast(`${employeeName}님에게 리마인드가 발송되었습니다.`);
}

// Navigate back to list
function backToList() {
    window.location.href = 'onboarding-self-eval-list.html';
}

// Submit self evaluation request
function submitSelfEvalRequest() {
    closeModal('modal-self-eval');
    showToast('자기평가 요청이 발송되었습니다.');
}

// View cross verification
function viewCrossVerification() {
    showToast('교차 검증 페이지로 이동합니다.');
}

