const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

             //Animate links
            navlinks.forEach((link, index)=>{
                 if (link.style.animation) {
                     link.style.animation = ''
                } else {
                    link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });

            //Burger Animation
            burger.classList.toggle('toggle');
        });
}

navslide();

 
