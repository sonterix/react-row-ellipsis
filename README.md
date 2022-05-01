<h1 align="center">🖖 Welcome to <code>react-row-ellipsis</code></h1>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/react-row-ellipsis?color=yellow" />
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-row-ellipsis?label=size" />
  <img alt="npm" src="https://img.shields.io/npm/dt/react-row-ellipsis" />
  <img alt="NPM" src="https://img.shields.io/npm/l/react-row-ellipsis" />
</p>
<p>&nbsp;</p>

## 📄 Description

Simple easy to use [React](https://reactjs.org) component which allow you to truncate a text with line indication. You can truncate not only simple string but also any elements/tags inside the component. Lines amount are configurable and works based on container or screen size. So you don't have to worry about different screen sizes. Lines amount will stay exactly the same.
<p>&nbsp;</p>

## 📦 Installation

Just run the following command at the root of your project:

```bash
npm install react-row-ellipsis
# or
yarn add react-row-ellipsis
```
<p>&nbsp;</p>

## ✨ Demo

Feel free to check the demo where you can test different settings for the component:

[![Edit Demo for react-row-ellipsis](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-react-row-ellipsis-ok3tbe?fontsize=14&theme=dark&view=preview)
<p>&nbsp;</p>

## 🚀 Usage

Just import the component and you are good to go
 
```jsx
import { Ellipsis } from 'react-row-ellipsis'
```

```jsx
<Ellipsis lines={3}>
  The long text goes here
</Ellipsis>
```
<p>&nbsp;</p>

## 🌉 Examples

Basic example. Truncate simple string:


```jsx
<Ellipsis lines={2}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Cum quidem dolorum sapiente, incidunt perferendis praesentium.
</Ellipsis>
```

Example with the tags inside. You can use different tags but you want to use inline tags:

```jsx
<Ellipsis lines={1}>
  <strog>Lorem, ipsum dolor.</strong>
  <span>Lorem ipsum dolor sit <a href="#">amet</a> consectetur adipisicing elit.</span>
</Ellipsis>
```
Example with another tag. The text will be rendered in the `<div>` tag:

```jsx
<Ellipsis lines={3} as="div">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Soluta eum, quaerat quidem unde deserunt harum sint ex cum.
</Ellipsis>
```
<p>&nbsp;</p>

## 🛠 Props

| Props | Type   | Default | Description                    |
|-------|--------|---------|--------------------------------|
| lines | number | 1       | Set amount of lines to display |
| as    | string | p       | Set render tag                 |
<p>&nbsp;</p>

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<p>&nbsp;</p>

## 📝 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

