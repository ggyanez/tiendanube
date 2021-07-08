(() => {
    // This script should only run on product details page (i.e. /productos/campera-cuero/)
    if (window.location.pathname.includes('/productos/') & window.location.pathname != 'productos') {

        // Function that will be executed when the event is triggered (when the user selects a different variant option)
        const myHandlerFunction = () => {
            console.log('Variant changed');
        }

        // Get variant option HTML elements
        const variantElements = document.querySelectorAll('.js-variation-option:not(.form-control-small)');

        // Add the event listeners to those variant option elements
        for (const variantElement in variantElements) {
            if (typeof (variantElements[variantElement]) === 'object') {
                variantElements[variantElement].addEventListener('change', myHandlerFunction);
            }
        }
    }
})();