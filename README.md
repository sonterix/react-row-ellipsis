<h1 align="center">🖖 Welcome to <code>react-row-ellipsis</code></h1>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/react-row-ellipsis?color=yellow" />
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-row-ellipsis?label=size" />
  <img alt="npm" src="https://img.shields.io/npm/dt/react-row-ellipsis" />
  <img alt="NPM" src="https://img.shields.io/npm/l/react-row-ellipsis" />
</p>

<hr />

## 📄 Description

Simple easy to use [React](https://reactjs.org) component which allow you to truncate a text with line indication. You can truncate not only simple string but also any elements/tags inside the component. Lines amount are configurable and works based on container or screen size. So you don't have to worry about different screen sizes. Lines amount will stay exactly the same. 

## 📦 Installation

Just run the following command at the root of your project:

```bash
npm install react-row-ellipsis
```

## ✨ Demo

Feel free to check the demo to test the component with your options:
### Check [Demo](https://ok3tbe.csb.app/)

## 🚀 Usage

```jsx
import { Ellipsis } from 'react-row-ellipsis'

<Ellipsis lines={2}>
  Lorem ipsum dolor sit amet.
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
  Lorem ipsum dolor sit.
</Ellipsis>
```

## 🛠 Props

| Props | Type   | Default | Description                    |
|-------|--------|---------|--------------------------------|
| lines | number | 1       | Set amount of lines to display |

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

