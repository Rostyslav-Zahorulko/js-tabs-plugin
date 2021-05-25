import tabsTpl from './templates/tabs.hbs';
import './styles.css';

export default class Tabs {
  constructor({
    rootId = 1,
    activeTab = 1,
    selector = 'body',
    position = 'beforeend',
    data,
  }) {
    this._rootId = rootId;
    this._activeControlClass = 'control--active';
    this._activePaneClass = 'pane--active';
    this._activeTabIdx = activeTab - 1;
    this._selector = selector;
    this._position = position;
    this._data = data;
    this._updateMarkup();
    this._refs = this._getRefs();
    this._bindEvents();
    this._setActiveTab();
  }

  _updateMarkup() {
    const element = document.querySelector(this._selector);
    const tabs = `<div class="tabs" id="tabs-${this._rootId}"></div>`;

    element.insertAdjacentHTML(this._position, tabs);

    const tabsRef = document.querySelector(`#tabs-${this._rootId}`);
    const tabsMarkup = tabsTpl(this._data);

    tabsRef.insertAdjacentHTML('beforeend', tabsMarkup);
  }

  _getRefs() {
    const refs = {};

    refs.controls = document.querySelector(
      `#tabs-${this._rootId} [data-controls]`,
    );
    refs.panes = document.querySelector(`#tabs-${this._rootId} [data-panes]`);

    return refs;
  }

  _bindEvents() {
    this._refs.controls.addEventListener(
      'click',
      this._handleOnControlsClick.bind(this),
    );
  }

  _handleOnControlsClick(event) {
    if (event.target.nodeName !== 'A') {
      return;
    }

    this._removeActiveTab();

    const control = event.target;
    this._makeControlActive(control);

    const paneId = this._getPaneId(control);
    this._setActivePane(paneId);
  }

  _setActiveTab() {
    const controls = this._refs.controls.querySelectorAll('a');
    const control = controls[this._activeTabIdx];
    this._makeControlActive(control);

    const paneId = this._getPaneId(control);
    this._setActivePane(paneId);
  }

  _removeActiveTab() {
    const currentActiveControl = this._refs.controls.querySelector(
      `.${this._activeControlClass}`,
    );

    if (!currentActiveControl) {
      return;
    }

    this._makeControlInactive(currentActiveControl);

    const paneId = this._getPaneId(currentActiveControl);
    this._removeActivePane(paneId);
  }

  _setActivePane(id) {
    const pane = this._getPaneById(id);
    this._makePaneActive(pane);
  }

  _removeActivePane(id) {
    const pane = this._getPaneById(id);
    this._makePaneInactive(pane);
  }

  _getPaneId(control) {
    return control.getAttribute('href').slice(1);
  }

  _getPaneById(id) {
    return this._refs.panes.querySelector(`#${id}`);
  }

  _makeControlActive(control) {
    control.classList.add(this._activeControlClass);
  }

  _makeControlInactive(control) {
    control.classList.remove(this._activeControlClass);
  }

  _makePaneActive(pane) {
    pane.classList.add(this._activePaneClass);
  }

  _makePaneInactive(pane) {
    pane.classList.remove(this._activePaneClass);
  }
}

// Examples of usage:

const tabs1 = new Tabs({
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

const tabs2 = new Tabs({
  rootId: 2,
  activeTab: 2,
  selector: 'body',
  position: 'beforeend',
  data: [
    {
      title: 'Football',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
    {
      title: 'Basketball',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
    {
      title: 'Volleyball',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
    {
      title: 'Baseball',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis exercitationem quas rerum maxime libero aut molestiae assumenda, odit explicabo quo ex nulla voluptate minima eveniet velit ullam itaque iure ipsa dolores, iusto tempora et! Mollitia sunt necessitatibus nostrum placeat voluptatibus consequuntur inventore sed incidunt eius nesciunt modi.',
    },
  ],
});
