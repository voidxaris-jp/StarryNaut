document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const panels = document.querySelectorAll('.dropdown-panel');

    function closeDropdown() {
        dropdownMenu.classList.remove('open');
    }

    function closePanels() {
        panels.forEach(panel => panel.classList.remove('visible'));
    }

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle('open');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.dataset.target;
            const targetPanel = document.getElementById(targetId);
            if (!targetPanel) return;

            const isVisible = targetPanel.classList.contains('visible');
            closePanels();
            if (!isVisible) {
                targetPanel.classList.add('visible');
            }
            closeDropdown();
        });
    });

    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
            closeDropdown();
        }
    });
});
