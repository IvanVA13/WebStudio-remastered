const btnRef = document.querySelector("#filter")
const portfolioMainRef = document.querySelector("#portfolio")
const portfolioRef = [...document.querySelectorAll(".portfolio__item")]

btnRef.addEventListener("click", filterPortfolio)

function filterPortfolio(el) {
    const regExpr = new RegExp(`${el.target.textContent}?`)
    const filterMkp = portfolioRef.filter((el) => {
        if (regExpr.source.includes("Все")) {
            return el
        } else {
            return regExpr.test(el.innerText)
        }
    }).map((el) => el.outerHTML).join("")
    portfolioMainRef.innerHTML = filterMkp;
}