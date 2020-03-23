
window.addEventListener('DOMContentLoaded', () => {

    let tab         = document.getElementsByClassName('info-header-tab'),
        tabContent  = document.getElementsByClassName('info-tabcontent'),
        info        = document.querySelector('.info-header');
   
        

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++ ) {
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

// countdown timer

    let deadline = '2020-04-01';

    function getTimeRemaining(endtime) {
        let t   = Date.parse(endtime) - Date.parse(new Date()); //find difference between deadline(endtime) and actuac time
        if (t > 0) {
        let seconds = Math.floor( (t/1000) % 60 ),        // get seconds, remnants of % 60
            minutes = Math.floor( (t/(1000*60)) % 60 ),   // get minutes, remnants of % 60
            hours   = Math.floor( (t/(1000*60*60) % 24) ),     // get hours
            days    = Math.floor( (t/(1000*60*60*24)) );
    
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
        } else {
            t = 0.0001;
            seconds = Math.floor( (t/1000) % 60 ),        // get seconds, remnants of % 60
            minutes = Math.floor( (t/(1000*60)) % 60 ),   // get minutes, remnants of % 60
            hours   = Math.floor( (t/(1000*60*60) % 24) ),     // get hours
            days    = Math.floor( (t/(1000*60*60*24)) );
    
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
        }

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        days = timer.querySelector('.days');

        function updateClock() {
            let cl = getTimeRemaining(endtime);
            
            if (String(cl.hours).length == 1) {
                hours.innerHTML = "0" + cl.hours;
            } else {
                hours.innerHTML = cl.hours;
            }

            if (String(cl.minutes).length == 1) {
                minutes.textContent = "0" + cl.minutes;
            } else {
                minutes.textContent = cl.minutes;
            }


            if (String(cl.seconds).length == 1) {
                seconds.textContent = "0" + cl.seconds;
            } else {
                seconds.textContent = cl.seconds;
            }

            if (String(cl.days).length == 1) {
                days.textContent = "0" + cl.days;
            } else {
                days.textContent = cl.days;
            }
            

            if (cl.total <= 0) {
                clearInterval(timeInterval);
            }
            
        }
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }

    setClock('timer', deadline);


    // easy scroling on click navigation button

    let topNav= document.getElementById('topNavigation'),
        navButtons = topNav.getElementsByTagName('a'),
        about = document.getElementById('about'),
        photo = document.getElementById('photo'),
        price = document.getElementById('price'),
        contacts = document.getElementById('contacts'),
        docPos = document.documentElement.scrollHeight,
        aboutPos = about.getBoundingClientRect().top,
        photoPos = photo.getBoundingClientRect().top,
        pricePos = price.getBoundingClientRect().top,
        contactsPos = contacts.getBoundingClientRect().top;

        navButtons[0].addEventListener('click', function(){
            let start = Date.now(); // запомнить время начала

            let timer = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;
            function easyScroll(timePassed){
                window.scrollTo(0,timePassed);
            } 
            easyScroll(timePassed);

                if (timePassed >= aboutPos) {
                    clearInterval(timer); // закончить анимацию через 2 секунды
                    return;
                }
            });

        });
        navButtons[1].addEventListener('click', function(){
            let start = Date.now(); // запомнить время начала

            let timer = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;
            function easyScroll(timePassed){
                window.scrollTo(0,timePassed);
            } 
            easyScroll(timePassed);

                if (timePassed >= photoPos) {
                    clearInterval(timer); // закончить анимацию через 2 секунды
                    return;
                }
            });

        });
        navButtons[2].addEventListener('click', function(){
            let start = Date.now(); // запомнить время начала

            let timer = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;
            function easyScroll(timePassed){
                window.scrollTo(0,timePassed);
            } 
            easyScroll(timePassed);

                if (timePassed >= pricePos) {
                    clearInterval(timer); // закончить анимацию через 2 секунды
                    return;
                }
            });

        });

        navButtons[3].addEventListener('click', function(){
            let start = Date.now(); // запомнить время начала

            let timer = setInterval(function() {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;
            function easyScroll(timePassed){
                window.scrollTo(0,timePassed);
            } 
            easyScroll(timePassed);

                if (timePassed >= contactsPos) {
                    clearInterval(timer); // закончить анимацию через 2 секунды
                    return;
                }
            });

        });



        // modal window READ MORE

        let moreBtn = document.querySelector('.more'),
            modal = document.querySelector('.overlay'),
            closeBtn = document.querySelector('.popup-close'),
            infoBlock = document.querySelector('.info');
            
        moreBtn.addEventListener('click', function() {
            this.classList.add('more-splash');
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });    

        closeBtn.addEventListener('click', function() {
            this.classList.remove('more-splash');
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        infoBlock.addEventListener('click', function(event) {
            let currBtn = event.target;
            if(currBtn.className == "description-btn") {
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
            }

        });

// function showNotification({top = 0, right = 0, className, html}) {

//       let notification = document.createElement('div');
//       notification.className = "notification";
//       if (className) {
//         notification.classList.add(className);
//       }

//       notification.style.top = top + 'px';
//       notification.style.right = right + 'px';

//       notification.innerHTML = html;
//       document.body.append(notification);

//       setTimeout(() => notification.remove(), 1500);
//     }

//     // test it
//     let i = 1;
//     setInterval(() => {
//       showNotification({
//         top: 10,
//         right: 10,
//         html: 'Hello ' + i++,
//         className: "welcome"
//       });
//     }, 2000);





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