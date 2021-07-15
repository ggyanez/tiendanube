(() => {
    // if (window.location.pathname.includes('/produtos/') & window.location.pathname != 'produtos') { -> for brazilian stores
    if (window.location.pathname.includes('/productos/') & window.location.pathname != 'productos') {
        const installmentsParagraph = document.querySelector('#installment_gocuotas_ > div > h6');
        installmentsParagraph.textContent = 'Tarjeta de débito en cuotas';
    }
})();