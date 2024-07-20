document.addEventListener('scroll', function () {
    const parallaxGroups = document.querySelectorAll('.parallax-group');
    parallaxGroups.forEach(group => {
        const baseLayer = group.querySelector('.base-layer');
        const midLayer = group.querySelector('.mid-layer');

        const scrollPosition = window.scrollY;

        baseLayer.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        midLayer.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
});
