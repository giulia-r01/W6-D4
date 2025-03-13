const allTheCards = document.querySelectorAll("#welcome-spring .card")

const AllLabel = function () {
  for (let i = 0; i < allTheCards.length; i++) {
    const label = document.createElement("span")
    label.innerText = "HOT"
    label.classList.add("badge", "text-bg-danger")
    label.classList.add("position-absolute", "top-0", "end-0")
    allTheCards[i].classList.add("position-relative")
    allTheCards[i].appendChild(label)
  }
}
AllLabel(AllLabel)
