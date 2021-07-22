(() => {
    const yesButton = document.querySelector('#btnYesIdWpnPush');
    yesButton.onclick = ga('send', {
        hitType: 'event',
        eventCategory: 'TITANPush Opt In',
        eventAction: 'yesClick',
        eventLabel: 'TITANPush Events',
    });

    const yesButton = document.querySelector('#btnNoIdWpnPush');
    yesButton.onclick = ga('send', {
        hitType: 'event',
        eventCategory: 'TITANPush Opt In',
        eventAction: 'noClick',
        eventLabel: 'TITANPush Events',
    });
})();