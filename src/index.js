function getComponent () {
  return import(
    /* webpackChunkName: "my-chunk-name" */
    'lodash-es/join'
  ).then(
    ({ default: join }) => {
      const element = document.createElement('div')
      element.innerHTML = join(['Hello', 'webpack'], ' ')
      return element
    }
  ).catch((error) => "An error occurred while loading the component")
}

getComponent().then((component) => {
  document.body.appendChild(component)
})

async function getComponentAsync () {
  const element = document.createElement('div')
  try {
    const { default: join } = await import('lodash-es/join')
    element.innerHTML = join(['Hello', 'webpack'], ' ')
  } catch (e) {
    return "An error occurred while loading the component"
  }
  return element
}

getComponentAsync().then((component) => {
  document.body.appendChild(component)
})
