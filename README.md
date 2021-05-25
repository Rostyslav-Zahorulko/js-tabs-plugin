# JS Tabs Plugin

Simple VanillaJS plugin for creating tabs in your app

## Installation

```
npm install js-tabs-plugin
```

## Usage

```js
import Tabs from 'js-tabs-plugin/src';
```

Tabs is the class that takes object with 5 fields:

1. rootId. Number. Default value: 1. Number for tabs id;
2. activeTab. Number. Default value: 1. Number of the tab that will be active
   after tabs creating;
3. selector. String. Default value: "body". Selector of the DOM element inside
   which tabs will be placed;
4. position. String. Default value: "beforeend". Represents the position of tabs
   relative to the DOM element. Must be one of the following strings:
   - 'beforebegin': before the element itself;
   - 'afterbegin': just inside the element, before its first child;
   - 'beforeend': just inside the element, after its last child;
   - 'afterend': after the element itself.
5. data. Аrray of objects. Each object has 2 fields: title (String) and text
   (String).

Example:

```js
const tabs = new Tabs({
  rootId: 1,
  activeTab: 1,
  selector: 'body',
  position: 'beforeend',
  data: [
    {
      title: 'HTML',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
    {
      title: 'CSS',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
    {
      title: 'JavaScript',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
    {
      title: 'NodeJS',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
  ],
});
```

## Contributing

Feel free to submit pull requests!
