(() => {
    if (window.location.pathname.includes('/start/')) {
        let customerCountry = '';

        fetch('https://ipinfo.io', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => customerCountry = data.country)
            .then(() => {
                if (customerCountry === 'AR') {
                    const checkIdentificationInput = () => {
                        if (document.getElementById('billingAddress.id_number')) {
                            clearInterval(intervalID);
                            console.log('Identification input created!');
                            const identificationInput = document.getElementById('billingAddress.id_number');
                            const identificationLabel = document.getElementById('label_billingAddress.id_number');

                            // Set CPF/CNPJ value's attribute with a dummy number generated with https://www.4devs.com.br/gerador_de_cnpj
                            // The checkout is a React app, so we can't just set the input value in the typical way.
                            // https://stackoverflow.com/a/60378508
                            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                            nativeInputValueSetter.call(identificationInput, 94490178085);
                            const inputEvent = new Event("input", { bubbles: true });
                            identificationInput.dispatchEvent(inputEvent);

                            // Hide CPF/CNPJ text field and label
                            identificationInput.style.display = "none";
                            identificationLabel.style.display = "none";
                        } else {
                            console.log('Identification input not created yet');
                            return;
                        }
                    }
                    let intervalID = setInterval(checkIdentificationInput, 2000);
                }
            });
    }
})();