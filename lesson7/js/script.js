
window.addEventListener('DOMContentLoaded', () => {

    let tab         = document.getElementsByClassName('info-header-tab'),
        tabContent  = document.getElementsByClassName('info-tabcontent'),
        info        = document.querySelector('.info-header');
   
        

    let hideTabContent = (a) => {
        for (i = a; i < tabContent.length; i++ ) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);


    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
        
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target.className == "info-header-tab") {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
    
                }
            }
        }

 
    });

    let time = performance.now();
    console.log(time);



















    // function hideTabContebt(a) {
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add('hide');

    //     }
    // }

    // hideTabContebt(1);

    // function showTabContent(b) {
    //     if( tabContent[b].classList.contains('hide')) {
    //         hideTabContebt(0);
    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');
    //     }
    // }

    // info.addEventListener('click', (event) => {
    //     let target = event.target;
    //     if (target.className == 'info-header-tab') {
    //         for (let i = 0; i < tab.length; i++) {
    //             if (target == tab[i]) {
    //                 showTabContent(i);
    //                 break;
    //             }
    //         }
    //     }
    // });
});



// let timer = setTimeout(log,2000);

// function log() {
//     console.log('Hello');
//     timer = setTimeout(log, 2000);
//     clearTimeout(timer);
// }