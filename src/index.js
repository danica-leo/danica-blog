function component () {
  const element = document.createElement('div')
  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.appendChild(myIcon)
  return element
}

document.body.appendChild(component())
