const sections = document.querySelectorAll('[data-animate="true"]');

const scrollIntoView = (element) => {

    let intersectionObserverOptions = {
        root: null,
        threshold: .5,
    }

    function onIntersection(entries, options) {
        for (let entry of entries) {
            let isVisible = entry.intersectionRatio >= options.thresholds[0];

            console.clear();
            console.log(entry.intersectionRatio.toFixed(2), isVisible);

            if (isVisible) {
            element.classList.remove('opacity-0');
            element.classList.add('fade-in-bottom');
            } else {
                element.classList.add('opacity-0');
            element.classList.remove('fade-in-bottom');
            }



        }
    }

    let observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);

    observer.observe(element);
}

for (let section of sections) {
    scrollIntoView(section);
    console.log(section);
};

const menuItemLink = $('.nav-link');

menuItemLink.on('click', () => {
    $('#navbarSupportedContent').removeClass('show');
}) 



