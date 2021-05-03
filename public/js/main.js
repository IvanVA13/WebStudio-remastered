const siteNavRef = document.querySelectorAll(".site-nav__link")
const footerRef = document.querySelector(".footer")
const titleRef = document.querySelector("title")
function addCurrentLinkClass(firstLink, secondLink) {
    firstLink.classList.add("site-nav__link--current")
    secondLink.classList.add("site-nav__link--current")
}

if (titleRef.textContent === "home") {
    addCurrentLinkClass(siteNavRef[0], siteNavRef[3])
  
}
if (titleRef.textContent === "portfolio") {
  addCurrentLinkClass(siteNavRef[1], siteNavRef[4])
}

footerRef.querySelector(".logo").classList.add("logo--white")
footerRef.querySelector(".contacts").classList.add("address__contacts")
footerRef.querySelectorAll(".contacts__item").forEach((item)=>item.classList.replace("contacts__item--margin", "contacts__item--footer"))
footerRef.querySelectorAll(".contacts__link").forEach((item) => item.classList.add("contacts__link--footer"))

footerRef.querySelectorAll(".socials__link").forEach((item)=>item.classList.add("socials__link--bg-color"))
footerRef.querySelectorAll(".socials__icon").forEach((item)=>item.classList.add("socials__icon--fill"))
footerRef.querySelectorAll(".contacts__icon").forEach((item)=>item.classList.add("contacts__icon--hide"))