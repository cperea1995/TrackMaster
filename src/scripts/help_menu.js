window.addEventListener('DOMContentLoaded', () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    const helpButton = document.body.querySelector('.howto');
    const closeButton = document.body.querySelector('.closebtn');

    helpButton.addEventListener('click', () => {
        openNav();
      
        document.body.querySelector('.help').style.color = 'red';
    } );
    closeButton.addEventListener('click', () => {
        closeNav();
        document.body.querySelector('.help').style.color = 'white';
    });
})
