import join from 'lodash/join'
import './style.css'
import Icon from './nian-nian.jpg'
// import Data from './data.xml'
import Notes from './data.csv'
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml); // 输出 `TOML Example`
console.log(toml.owner.name); // 输出 `Tom Preston-Werner`

console.log(yaml); // 输出 `YAML Example`
console.log(yaml.owner.name); // 输出 `Tom Preston-Werner`

console.log(json); // 输出 `JSON5 Example`
console.log(json.owner.name); // 输出 `Tom Preston-Werner`



function component () {
  const element = document.createElement('div')
  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  const Data = import( /* webpackChunkName: "my-chunk-name" */ './data.xml')
  console.log(Data)
  console.log(Notes)

  return element
}

document.body.appendChild(component())
