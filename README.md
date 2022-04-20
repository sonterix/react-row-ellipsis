<h1 align="center">🖖 Welcome to <code>react-row-ellipsis</code></h1>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/react-row-ellipsis?color=yellow" />
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-row-ellipsis?label=size" />
  <img alt="npm" src="https://img.shields.io/npm/dt/react-row-ellipsis" />
  <img alt="NPM" src="https://img.shields.io/npm/l/react-row-ellipsis" />
</p>
<br />

## 📄 Description

Simple easy to use [React](https://reactjs.org) component which allow you to truncate a text with line indication. You can truncate not only simple string but also any elements/tags inside the component. Lines amount are configurable and works based on container or screen size. So you don't have to worry about different screen sizes. Lines amount will stay exactly the same. 
<br />

## 📦 Installation

Just run the following command at the root of your project:

```bash
npm install react-row-ellipsis
```
<br />

## ✨ Demo

Feel free to check the demo to test the component with your options:
### Check [Demo](https://ok3tbe.csb.app/)
<br />

## 🚀 Usage

## Just import the component and you are good to go
 
```jsx
import { Ellipsis } from 'react-row-ellipsis'
```
<br />

## 🌉 Examples

### Basic example. Truncate simple string


```jsx
<Ellipsis lines={2}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Cum quidem dolorum sapiente, incidunt perferendis praesentium.
</Ellipsis>
```

### Example with the tags inside. You can use different tags but you want to use inline tags

```jsx
<Ellipsis lines={1}>
  <strog>Lorem, ipsum dolor.</strong>
  <span>Lorem ipsum dolor sit <a href="#">amet</a> consectetur adipisicing elit.</span>
</Ellipsis>
```
### Example with another tag. The text will be rendered in the `<div>` tag

```jsx
<Ellipsis lines={3} as="div">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Soluta eum, quaerat quidem unde deserunt harum sint ex cum.
</Ellipsis>
```
<br />

## 🛠 Props

| Props | Type   | Default | Description                    |
|-------|--------|---------|--------------------------------|
| lines | number | 1       | Set amount of lines to display |
| as    | string | p       | Set render tag                 |
<br />

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br />

## 📝 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

