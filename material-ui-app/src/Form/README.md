## Text Field

Text fields let users enter and edit text.

## [TextField API](https://material-ui.com/api/text-field/#textfield-api)

- id
- autoComplete - This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill.

  - string

- autoFocus - If true, the input element will be focused during the first mount.

  - bool

- classes - Override or extend the styles applied to the component

  - object

- color

  - primary
  - secondary

- defaultValue - The default value of the input element.

  - any

- disabled - If true, the input element will be disabled.

  - bool : false by default

- error - If true, the label will be displayed in an error state.

  - bool : false

- FormHelperTextProps - Props applied to the FormHelperText element.

- FullWidth - If true, the input will take up the full width of its container.

- helperText - The helper text content.

- inputRef - Pass a ref to the input element.

  - ref

- label - The label content.

- margin - If dense or normal, will adjust vertical spacing of this and contained components.

  - dense
  - none
  - normal

- multiline - If true, a textarea element will be rendered instead of an input.

- maxRows - Maximum number of rows to display when multiline option is set to true.

- name - Name attribute of the input element.

- onChange

- placeholder

- required

- rows - Number of rows to display when multiline option is set to true.

- rowsMax - Maximum number of rows to display.

- select - Render a Select element while passing the Input element to Select as input parameter. If this option is set you must pass the options of the select as children.

- SelectProps - Props applied to the Select element.

- size - The size of the text field.

  - medium
  - small

- type - Type of the input element. It should be a valid HTML5 input type.

- value - The value of the input element, required for a controlled component.

- varient
  - filled
  - outlined
  - standard

### What's the clsx dependency for?

clsx is a tiny utility for constructing className strings conditionally, out of an object with keys being the class strings, and values being booleans.
