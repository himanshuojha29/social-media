//SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModeal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');





// remove active class from all menu items

const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItems();
        item.classList.add('active');
        if (item.id != 'Notifications') {
            document.querySelector('.notifications-popup').style.disply = 'none';
        } else {
            document.querySelector('.notifications-popup').style.disply = 'block';
            document.querySelector('#Notifications .notification-count').style.display = 'none';
        }
    })
})



//========================MESSAGES============
// seacrches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLocaleLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messaes menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// THEME/DISPLAY CUSTOMIZATION
// open modal
const openThemeModal = () => {
    themeModeal.style.display = 'grid'
}
// close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModeal.style.display = 'none';
    }
}

// close modal
themeModeal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);


// ====================fonts====================

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}



fontSizes.forEach(size => {


    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----stickey-top-left', '5.4rem');
            root.style.setProperty('----stickey-top-right', '5.4rem');

        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----stickey-top-left', '5.4rem');
            root.style.setProperty('----stickey-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----stickey-top-left', '-2rem');
            root.style.setProperty('----stickey-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----stickey-top-left', '-5rem');
            root.style.setProperty('----stickey-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----stickey-top-left', '-12rem');
            root.style.setProperty('----stickey-top-right', '-35rem');
        }
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })


})

// remove active class from colors
const changeActiveColorsClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
      // remove active class from colors 
        changeActiveColorsClass()

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if (color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')){
            primaryHue = 352;
        }else if (color.classList.contains('color-4')){
            primaryHue = 152;
        }else if (color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})









// theme BACKGROUNF values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


// changes background color

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}


// changes background color


bg1.addEventListener('click', () => {
    // add active calss
    bg1.classList.add('active');
       // remove active class from the others

       bg2.classList.remove('active');
       bg3.classList.remove('active');

       window.location.reload();
});



bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    bg2.classList.add('active');
    // remove active class from the others

    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();

})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    bg3.classList.add('active');
    // remove active class from the others

    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();

})


// END