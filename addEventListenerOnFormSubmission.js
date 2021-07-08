(() => {
    // This script should only run on step one of the checkout (/start/)
    if (window.location.pathname.includes('/start/')) {

        // Function that will be executed when the event is triggered (when the user submits the form and goes to step two of the checkout)
        const myHandlerFunction = () => {
            alert(`
            Customer information submitted in the form:

            Email: ${customerEmailInputElement ? customerEmailInputElement.value : ''}
            -----
            First Name (Shipping): ${customerShippingFirstNameInputElement ? customerShippingFirstNameInputElement.value : ''}
            Last Name (Shipping): ${customerShippingLastNameInputElement ? customerShippingLastNameInputElement.value : ''}
            Phone (Shipping): ${customerShippingPhoneInputElement ? customerShippingPhoneInputElement.value : ''}
            -----
            First Name (Billing): ${customerBillingFirstNameInputElement ? customerBillingFirstNameInputElement.value : ''}
            Last Name (Billing): ${customerBillingLastNameInputElement ? customerBillingLastNameInputElement.value : ''}
            Phone (Billing): ${customerBillingPhoneInputElement ? customerBillingPhoneInputElement.value : ''}      
            `);
        }

        const stepOneForm = document.querySelector('form');
        const customerEmailInputElement = document.querySelector("input[type='email']");
        const customerShippingFirstNameInputElement = document.querySelector("input[name='shippingAddress.first_name']");
        const customerShippingLastNameInputElement = document.querySelector("input[name='shippingAddress.last_name']");
        const customerShippingPhoneInputElement = document.querySelector("input[name='shippingAddress.phone']");
        const customerBillingFirstNameInputElement = document.querySelector("input[name='billingAddress.first_name']");
        const customerBillingLastNameInputElement = document.querySelector("input[name='billingAddress.last_name']");
        const customerBillingPhoneInputElement = document.querySelector("input[name='billingAddress.phone']");
        
        // Add the event listener to the form
        stepOneForm.addEventListener('submit', myHandlerFunction);
    }
})();