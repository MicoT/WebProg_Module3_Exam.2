const userCardTemplate = document.querySelector("[user-template]")
const userCardContainer = document.querySelector("[user-cards-container]")
const searchInput = document.querySelector("[search]")

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const phone = card.querySelector("[data-phone]")
      const website = card.querySelector("[data-website]")
      header.textContent = user.name
      body.textContent = user.email
      phone.textContent = user.phone
      website.textContent = user.website
      userCardContainer.append(card)
      return { name: user.name, email: user.email, phone: user.email, website: user.website, element: card }
    })
  })

  let users = []

  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.website.toLowerCase().includes(value) 
      user.element.classList.toggle("hide", !isVisible)
    })
  })