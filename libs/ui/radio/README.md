# ui-radio

Radio Groups give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.

## [Demo](https://stackblitz.com/edit/ngheadless-radio-demo)

---

## Installation

```bash
# npm
npm install @ngheadlessui/radio

# Yarn
yarn add @ngheadlessui/radio

# import the lib into module you want to use it in
import { UiRadioModule } from '@ngheadlessui/radio';
```

## Basic Example

Radio Groups are built using the `headless-tab-group`, and `headlessRadioOption` components.

Clicking an option will select it, and when the Radio Group is focused, the arrow keys will change the selected option.

```html
<headless-radio-group>
  <!-- You can use the headlessRadioOption as a component -->
  <headlessRadioOption>Option 1</headlessRadioOption>
  <headlessRadioOption>Option 2</headlessRadioOption>
  <headlessRadioOption>Option 3</headlessRadioOption>

  <!--or as a directive -->
  <div headlessRadioOption>Option 1</div>
  <div headlessRadioOption>Option 2</div>
  <div headlessRadioOption>Option 3</div>
</headless-radio-group>
```

## Styling the checked radio item

This is a headless component so there are no styles included by default. Instead, the components expose useful information via bound classes that you can use to apply styles yourself.

To style the checked Radio, use the selected class `checked-headless-radio`, which tells you which radio is currently checked. For flexiblity.

```scss
.checked-headless-radio {
  @apply bg-sky-900 bg-opacity-75 text-white;
}
```

## Disabling a radio item

To disable a radio, use the disabled input property on the `headlessRadioOption` component. Disabled radio items cannot be selected with the mouse.

```html
<headless-tab-group>
  <headless-radio-group>
    <!-- You can use the headlessRadioOption as a component -->
    <headlessRadioOption [disabled]="true">Option 1</headlessRadioOption>
    <headlessRadioOption>Option 2</headlessRadioOption>
    <headlessRadioOption>Option 3</headlessRadioOption>

    <!--or as a directive -->
    <ng-container *ngFor="let plan of plans">
      <div headlessRadioOption [disabled]="plan.name === 'monthly'">
        {{ plan.name }}
      </div>
    </ng-container>
  </headless-radio-group>
</headless-tab-group>
```

To style disabled radio, use the disabled class `disabled-headless-radio`,
which tells you whether or not that radio option is currently disabled.

```scss
.disabled-headless-radio {
  @apply text-red-300 bg-yellow-700 hover:bg-white/[0.12] hover:text-white;
}
```

## Specifying the default checked radio

To select a radio is checked by default, use the checkedOptionIndex="number" property on the `headless-tab-group` component.

```html
<headless-radio-group [checkedOptionIndex]="1">
  <headlessRadioOption>Option 1</headlessRadioOption>
  <headlessRadioOption>Option 2</headlessRadioOption>
  <headlessRadioOption>Option 3</headlessRadioOption>
</headless-radio-group>
```

## Listening for changes

To run a function whenever the checked radio changes, listen to emissions from the (changeRadio) EventEmitter on the `headless-radio-group` component. (changeRadio) emits the index ($event) of the checked radio.

```html
<headless-radio-group (changeRadio)="listenToChangeInRadio($event)">
  <headlessRadioOption>Option 1</headlessRadioOption>
  <headlessRadioOption>Option 2</headlessRadioOption>
  <headlessRadioOption>Option 3</headlessRadioOption>
</headless-radio-group>
```

## Component APIs

### headless-radio-group

The main Radio Group component.

| Props              | Default | Description                                                                       |
| ------------------ | ------- | --------------------------------------------------------------------------------- |
| checkedOptionIndex | 0       | `Number` <br/> The index of checked radio                                         |
| (changeRadio)      |         | EventEmitter<number> <br /> This is fired when there is a change in checked radio |

### headlessRadioOption

The Radio component.

| Props    | Default   | Description                                                                        |
| -------- | --------- | ---------------------------------------------------------------------------------- |
| id       | undefined | `String` <br/> unique identifier of the radio option                               |
| disabled | false     | `Boolean` <br/> Whether or not selected of the Rasio option is currently disabled. |
