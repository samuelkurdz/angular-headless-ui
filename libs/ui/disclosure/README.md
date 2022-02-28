# ui-disclosure

A simple, accessible foundation for building custom UIs that show and hide content, like togglable accordion panels.

## [Demo](https://stackblitz.com/edit/ngheadless-disclosure-demo)

---

## Installation

```bash
# npm
npm install @ngheadlessui/disclosure

# Yarn
yarn add @ngheadlessui/disclosure
```

## Basic Example

Disclosures are built using the `headless-disclosure`, `headless-disclosure-button` and `headlessDisclosurePanel` components.

Your `headlessDisclosurePanel` will be shown/hidden automatically based on the internal open state tracked within the `headless-disclosure` component itself.

```html
  <headless-disclosure (panelChange)="listenToChangeInTabs($event)">
    <headless-disclosure-button>
      buttoneText
    </headless-disclosure-button>
    <div headlessDisclosurePanel>
      description
    </div>
  </headless-disclosure>
```

## Styling the opened `headless-disclosure` item

This is a headless component so there are no styles included by default. Instead, the components expose useful information via bound classes that you can use to apply styles yourself.

To style the opened `headless-disclosure`, use the selected class `opened-headless-disclosure `, which tells you which `headlessDisclosurePanel` is currently opened.

```scss
.opened-headless-disclosure {
  svg {
    transform: rotate(180deg);
  }
}
```

## Specifying the default state for the disclosure panel

To make a disclosure open by default, use the defaultOpenState input boolean property on the `headless-disclosure` component. If set to true, the panel is open by default.


```html
  <headless-disclosure [defaultOpenState]="true">
    <headless-disclosure-button>
      buttoneText
    </headless-disclosure-button>
    <div headlessDisclosurePanel>
      description
    </div>
  </headless-disclosure>
```

## Listening for changes

To run a function whenever the panel state changes, listen to emissions from the (panelChange) EventEmitter on the `headless-disclosure` component. (panelChange) emits the boolean property ($event) of the clicked disclosure panel.
```html
  <headless-disclosure (panelChange)="listenToChangeInTabs($event)">
    <headless-disclosure-button>
      buttoneText
    </headless-disclosure-button>
    <div headlessDisclosurePanel>
      description
    </div>
  </headless-disclosure>
```

## Component APIs

### headless-disclosure

The main Disclosure component.

| Props              | Default | Description                                                                       |
| ------------------ | ------- | --------------------------------------------------------------------------------- |
| defaultOpenState | false      | `Boolean` <br/> The default state of the disclosure component                                         |
| (panelChange)      |         | EventEmitter<boolean> <br /> This is fired when there is a change in the open state of the disclosure |

