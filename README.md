# react-row-ellipsis

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/react-row-ellipsis?color=yellow" />
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-row-ellipsis?label=size" />
  <img alt="npm" src="https://img.shields.io/npm/dt/react-row-ellipsis" />
  <img alt="NPM" src="https://img.shields.io/npm/l/react-row-ellipsis" />

</p>

Simple easy to use package which allow you to truncate a text with line indication. You can truncate not only simple string but also any elements/tags inside the component.

## 💾 Installation

```bash
npm install react-row-ellipsis
```

## ✨ Demo

Check for [demo](https://ok3tbe.csb.app/)

## 🚀 Usage

```jsx
import { Ellipsis } from 'react-row-ellipsis'

<Ellipsis lines={2}>
  Lorem ipsum dolor sit amet.
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
  Lorem ipsum dolor sit.
</Ellipsis>
```

## 🔧 Options

### props.text {String}

Text that you want to truncate

### props.lines {Number}. By default 1

Number of line that you want to have

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

