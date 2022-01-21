# ui-radio

Radio Groups give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.

## Installation

```bash
# npm
npm install @ngheadlessui/radio

# Yarn
yarn add @ngheadlessui/radio
```

## Basic Example

Radio Groups are built using the `headless-tab-group`, and `headlessRadioOption` components.

Clicking an option will select it, and when the Radio Group is focused, the arrow keys will change the selected option.

```html
<headless-radio-group>
  <headlessRadioOption>Option 1</headlessRadioOption>
  <headlessRadioOption>Option 2</headlessRadioOption>
  <headlessRadioOption>Option 3</headlessRadioOption>
</headless-radio-group>
```









## Styling the selected tab

This is a headless component so there are no styles included by default. Instead, the components expose useful information via bound classes that you can use to apply styles yourself.

To style the selected Tab, use the selected class `selected-headless-tab`, which tells you whether or not that tab is currently selected. For flexiblity, the clas `unselected-headless-tab` is also available for use.

```scss
.selected-headless-tab {
  @apply bg-white shadow;
}
.unselected-headless-tab {
  @apply text-blue-100 hover:bg-white/[0.12] hover:text-white;
}
```

## Disabling a tab

To disable a tab, use the disabled input property on the Tab component. Disabled tabs cannot be selected with the mouse.

```html
<headless-tab-group>
  <div>
    <headless-tab [disabled]="true">Tab 1</headless-tab>
    <headless-tab>Tab 2</headless-tab>
    <headless-tab>Tab 3</headless-tab>
  </div>

  <headlessTabPanel>Content 1</headlessTabPanel>
  <headlessTabPanel>Content 2</headlessTabPanel>
  <headlessTabPanel>Content 3</headlessTabPanel>
</headless-tab-group>

<!-- If you are creating tabs from component data  -->
<headless-tab-group>
  <div>
    <headless-tab
      *ngFor="let tabName of ['Recent', 'Popular', 'Trending']"
      [disabled]="tabName === 'Recent'"
    >
      {{ tabName }}
    </headless-tab>
  </div>

  <headlessTabPanel>Content 1</headlessTabPanel>
  <headlessTabPanel>Content 2</headlessTabPanel>
  <headlessTabPanel>Content 3</headlessTabPanel>
</headless-tab-group>
```

To style disabled tabs, use the disabled class `disabled-headless-tab`, which tells you whether or not that tab is currently disabled.

```scss
.disabled-headless-tab {
  @apply text-red-300 bg-yellow-700 hover:bg-white/[0.12] hover:text-white;
}
```

## Styling the selected tab

To change which tab is selected by default, use the defaultTabIndex="number" property on the TabGroup component.

```html
<headless-tab-group [defaultTabIndex]="2">
  <div>
    <headless-tab>Tab 1</headless-tab>
    <headless-tab>Tab 2</headless-tab>
    <headless-tab>Tab 3</headless-tab>
  </div>

  <headlessTabPanel>Content 1</headlessTabPanel>
  <headlessTabPanel>Content 2</headlessTabPanel>
  <headlessTabPanel>Content 3</headlessTabPanel>
</headless-tab-group>
```

## Listening for changes

To run a function whenever the selected tab changes, listen to emissions from the (changeTab) EventEmitter on the TabGroup component. (changeTab) emits the index ($event) of the active tab.

```html
<headless-tab-group (changeTab)="listenToChangeInTabs($event)">
  <div>
    <headless-tab>Tab 1</headless-tab>
    <headless-tab>Tab 2</headless-tab>
    <headless-tab>Tab 3</headless-tab>
  </div>

  <headlessTabPanel>Content 1</headlessTabPanel>
  <headlessTabPanel>Content 2</headlessTabPanel>
  <headlessTabPanel>Content 3</headlessTabPanel>
</headless-tab-group>
```

## Component APIs

### headless-tab-group

The main TabGroup component.

| Props        | Default | Description                                                                      |
| ------------ | ------- | -------------------------------------------------------------------------------- |
| defaultIndex | 0       | `Number` <br/> The default selected index                                        |
| (changeTab)  |         | EventEmitter<number> <br /> This is fired when there is a change in selected tab |

### headless-tab

The Tab component.

| Props    | Default | Description                                                   |
| -------- | ------- | ------------------------------------------------------------- |
| disabled | false   | `Boolean` <br/> Whether or not the Tab is currently disabled. |

### headlessTabPanel

The Tab component.

| Props | Default   | Description                                                  |
| ----- | --------- | ------------------------------------------------------------ |
| id    | undefined | `String` <br/> Whether or not the Tab is currently disabled. |
