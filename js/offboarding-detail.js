// Offboarding detail page interactions (Figma 1307:43023)
(function () {
  function setExpanded(btn, isExpanded) {
    btn.setAttribute("aria-expanded", String(isExpanded));
  }

  function openCard(card) {
    const collapse = card.querySelector(".offd__cardCollapse");
    const btn = card.querySelector(".offd__expandBtn");
    if (!collapse || !btn) return;

    // Reset then set to measured height for smooth transition
    collapse.style.maxHeight = "0px";
    // force reflow
    void collapse.offsetHeight;
    collapse.style.maxHeight = collapse.scrollHeight + "px";

    btn.classList.add("offd__expandBtn--open");
    setExpanded(btn, true);
    card.classList.add("is-open");
  }

  function closeCard(card) {
    const collapse = card.querySelector(".offd__cardCollapse");
    const btn = card.querySelector(".offd__expandBtn");
    if (!collapse || !btn) return;

    collapse.style.maxHeight = "0px";
    btn.classList.remove("offd__expandBtn--open");
    setExpanded(btn, false);
    card.classList.remove("is-open");
  }

  function toggleCard(card) {
    if (card.classList.contains("is-open")) closeCard(card);
    else openCard(card);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".offd__card--accordion"));

    cards.forEach((card) => {
      const btn = card.querySelector(".offd__expandBtn");
      if (!btn) return;

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleCard(card);
      });
    });

    // Initialize open state based on class
    cards.forEach((card) => {
      if (card.classList.contains("is-open")) openCard(card);
      else closeCard(card);
    });

    // Re-measure expanded cards on resize
    window.addEventListener("resize", () => {
      cards.forEach((card) => {
        if (!card.classList.contains("is-open")) return;
        const collapse = card.querySelector(".offd__cardCollapse");
        if (!collapse) return;
        collapse.style.maxHeight = collapse.scrollHeight + "px";
      });
    });
  });
})();

// Card State Toggle: Empty → Filled
(function() {
  // Switch from empty to filled state for a given card type
  window.switchToFilledState = function(cardType) {
    const emptyCard = document.querySelector(`.offd__card--empty[data-card-type="${cardType}"]`);
    const filledCard = document.querySelector(`.offd__card--filled[data-card-type="${cardType}"]`);
    
    if (emptyCard && filledCard) {
      emptyCard.style.display = 'none';
      filledCard.style.display = 'block';
    }
  };

  // Switch back to empty state (for testing or reset)
  window.switchToEmptyState = function(cardType) {
    const emptyCard = document.querySelector(`.offd__card--empty[data-card-type="${cardType}"]`);
    const filledCard = document.querySelector(`.offd__card--filled[data-card-type="${cardType}"]`);
    
    if (emptyCard && filledCard) {
      emptyCard.style.display = 'block';
      filledCard.style.display = 'none';
    }
  };

  // Alias for compatibility
  window.updateCardState = function(cardType, state) {
    if (state === 'filled') {
      switchToFilledState(cardType);
    } else if (state === 'empty') {
      switchToEmptyState(cardType);
    }
  };
})();

// Feedback Modal: Radio button selection
(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const radioOptions = document.querySelectorAll('.modal__feedback-timing-option');
    
    radioOptions.forEach(option => {
      option.addEventListener('click', () => {
        // Remove selected class from all options
        radioOptions.forEach(opt => opt.classList.remove('modal__feedback-timing-option--selected'));
        // Add selected class to clicked option
        option.classList.add('modal__feedback-timing-option--selected');
        // Check the radio input
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });
  });
})();

