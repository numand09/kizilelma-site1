document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".section");

    function checkScroll() {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;

            if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.style.opacity = "1";
            } else {
                section.style.opacity = "0";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
