(function () {
    const header = document.getElementById('header');
    const scrollTopBody = document.getElementById('main');
    window.addEventListener("scroll", () => {
        let height = window.getComputedStyle(header).height;
        height = height.replace('px', '');
        if (height <= window.scrollY) {
            header.style.boxShadow = "0 4px 0px 0 rgba(0, 0, 0, 0.2)";
            header.style.background = "#6a7474";
        } else {
            header.style.boxShadow = "0 0px 0px 0 rgba(0, 0, 0, 0.2)";
            header.style.background = "#fcffff00";
        }
    });
    document.getElementById('space').style.height = window.getComputedStyle(header).height;
})();
