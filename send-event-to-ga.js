(() => {
    const yesButton = document.querySelector('#btnYesIdWpnPush');
    yesButton.onclick = ga('send', {
        hitType: 'event',
        eventCategory: 'TITANPush Opt In',
        eventAction: 'yesClick',
        eventLabel: 'TITANPush Events',
    });

    const noButton = document.querySelector('#btnNoIdWpnPush');
    noButton.onclick = ga('send', {
        hitType: 'event',
        eventCategory: 'TITANPush Opt In',
        eventAction: 'noClick',
        eventLabel: 'TITANPush Events',
    });
})();
