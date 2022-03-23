const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = ('&copy')

copyright.innerHTML = (`${copyright} Dmitry Boyko ${thisYear}`);
footer.appendChild(copyright);
