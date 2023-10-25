function togglemode() {
  const html = document.documentElement

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  html.classList.toggle("light")

  // pegar a tag img
  //subistituir a imagem
  // se tiver lightmode adicionar a tag light
  // se tiver sem light mode, manter a imagem normal (de origem)
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
