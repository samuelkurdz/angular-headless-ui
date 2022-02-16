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

Tabs are built using the headless-tab-group, headless-tab, and headlessTabPanel components. By default the first tab is selected, and clicking on any tab will activate the corresponding panel.

```html
  <headless-disclosure>
    <headless-disclosure-button>
      buttoneText
    </headless-disclosure-button>
    <div headlessDisclosurePanel>
      description
    </div>
  </headless-disclosure>
```