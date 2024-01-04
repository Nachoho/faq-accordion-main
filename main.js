const accordion = document.querySelector(".accordion");

accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordion-panel');
    if (!activePanel) return;
    toggleAccordion(activePanel);
    console.log(activePanel);
});

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents= panelToActivate.parentElement.querySelectorAll('.accordion-content');

    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    });

    buttons.forEach((content) => {
        button.setAttribute("aria-expanded", true);
    });

    panelToActivate.querySelector('button').setAttribute('aria-expeanded', true);
    panelToActivate.querySelector('content').setAttribute('aria-expeanded', false);
}

