import emailjs from '@emailjs/browser'

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById('side-menu');

tabLinks.addEventListener('click', tabName => {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    document.getElementById(tabName).classList.add('active-tab');
})

// function openTab(tabName) {
//     for (tabLink of tabLinks) {
//         tabLink.classList.remove("active-link");
//     }
//     for (tabContent of tabContents) {
//         tabContent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabName).classList.add('active-tab');
// }

function openMenu() {
    sideMenu.style.right = '0';
}
function closeMenu() {
    sideMenu.style.right = '-200px'
}

