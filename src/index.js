async function getComponentAsync () {
  const element = document.createElement('div')
  const button = document.createElement('button')
  const br = document.createElement('br')

  button.innerHTML = 'Click me and look at the console!'

  try {
    const { default: join } = await import('lodash-es/join')
    element.innerHTML = join(['Hello', 'webpack'], ' ')
  } catch (e) {
    return "An error occurred while loading the component"
  }

  element.appendChild(br)
  element.appendChild(button)

  button.onclick = async e => {
    const res = await import('./print')
    const { default: print } = res
    print()
  }
  return element
}

getComponentAsync().then((component) => {
  document.body.appendChild(component)
})
