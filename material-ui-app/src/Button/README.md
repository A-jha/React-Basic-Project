## Button

Buttons allow users to take actions, and make choices, with a single tap.

- import button

  ```jsx
  import Button from "@material-ui/core/Button";
  ```

### Component name

- color

  - default
  - inherit
  - primary
  - secondary

- disbled

  - bool

- disableElevation

  - bool

- diableFocusRipple - If true, the keyboard focus ripple will be disabled.

  - bool

- dissableRipple

  - bool

- endIcon - Element placed after the children.

  - node

- fullWidth - If true, the button will take up the full width of its container.

  - bool

- href

  - string

- size - The size of the button. small is equivalent to the dense button styling.

  - large
  - medium
  - small

- startIcon

  - node

- variant
  - contained
  - outluned
  - text

## Icon Button

- install icons first

```
npm install @material-ui/icons
```

- import iconbutton

```jsx
import IconButton from "@material-ui/core.IconButton";
```

- Import icon then use it

```jsx
import DeleteIcon from "@material-ui/icons/Delete";

<DeleteIcon></DeleteIcon>;
```

- use font awesome icon inside

```jsx
<Icon className = "fa fa-delete></Icon>
```

### Component name

- edge - If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape).

  - start
  - end
  - false

- Size
  - small
  - medium
