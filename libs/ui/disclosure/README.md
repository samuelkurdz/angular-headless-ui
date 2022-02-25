# ui-disclosure

Easily create accessible, fully customizable tab interfaces, with robust focus management and coming keyboard navigation support.

## Installation

```bash
# npm
npm install @ngheadlessui/disclosure

# Yarn
yarn add @ngheadlessui/disclosure
```

## Basic Example

Tabs are built using the headless-disclosure, headless-disclosure-button, and headlessDisclosurePanel components. By default all disclosure are closed, and clicking on any headless-disclosure-button will togle the corresponding panel state.

```html
  <headless-disclosure>
    <headless-disclosure-button>
      buttonText
    </headless-disclosure-button>
    <div headlessDisclosurePanel>
      description
    </div>
  </headless-disclosure>
```