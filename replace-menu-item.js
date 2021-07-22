/*
Important: Every piece of code outside the self-invoking expression will be added to the store's global execution context.
Therefore, it's important that you use very specific names for functions and variables.
That way they won't collide with code from other apps, custom developments, from Tiendanube itself, etc.
*/

const myFunctionWithVerySpecificName = () => {
    alert('Hello World!');
}

(() => {
    const myMenuItem = document.querySelector('a[href="https://www.titanpush.com.ar/tiendanube"]');
    myMenuItem.href = 'javascript:myFunctionWithVerySpecificName()';
})();