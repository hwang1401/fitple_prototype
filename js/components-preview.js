// Components Preview interactions

function initSegmentControls() {
    document.querySelectorAll('[data-seg-group]').forEach(groupEl => {
        groupEl.addEventListener('click', e => {
            const btn = e.target.closest('button[data-seg]');
            if (!btn) return;
            const group = btn.closest('[data-seg-group]');
            if (!group) return;

            group.querySelectorAll('button[data-seg]').forEach(b => b.setAttribute('aria-pressed', 'false'));
            btn.setAttribute('aria-pressed', 'true');
        });
    });
}

function initTabSets() {
    document.querySelectorAll('[data-tabset]').forEach(setEl => {
        setEl.addEventListener('click', e => {
            const tab = e.target.closest('button[role="tab"]');
            if (!tab) return;

            setEl.querySelectorAll('button[role="tab"]').forEach(t => t.setAttribute('aria-selected', 'false'));
            tab.setAttribute('aria-selected', 'true');
        });
    });
}

function initCheckboxIndeterminate() {
    const el = document.getElementById('chk-indeterminate');
    if (el && 'indeterminate' in el) {
        el.indeterminate = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initSegmentControls();
    initTabSets();
    initCheckboxIndeterminate();
});


