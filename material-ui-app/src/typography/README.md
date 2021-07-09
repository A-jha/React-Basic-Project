## Typography

Use typography to present your design and content as clearly and efficiently as possible.

- import typography from material ui core

  ```jsx
  import Typography from "@material-ui/core/Typography";
  ```

- By default typography is paragraph

- add a h1 type

  ```jsx
  <Typography varient="h1">Heading-1</Typography>
  ```

- We call call typograpghy is both ways

  - as named class
  - or as default

- we can change the typography to Text if we want
- change typography to text

  ```jsx
  import Text from "@material-ui/core/Typography";
  ```

### Props that can be passed to typography

- align - Set the text-align on the component.

  - inherit
  - left
  - center
  - right
  - justify

- children - The content of the component.

  - node

- classes - Override or extend the styles applied to the component.

  - object

- color - The color of the component. It supports those theme colors that make sense for this component.

  - initial
  - inherit
  - primary
  - secondary
  - textPrimary
  - textSecondary
  - error

- component - The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the variantMapping prop.

  - elementType

- display - Controls the display type

  - initial
  - block
  - inline

- gutterBottom - If true, the text will have a bottom margin.

  - bool

- noWrap - If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
  Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow). - bool

- paragraph - If true, the text will have a bottom margin.

  - bool

- varient - Applies the theme typography styles.
  - h1
  - h2
  - h3
  - h4
  - h5
  - h6
  - subtitle1
  - subtitle2
  - body1
  - body2
  - caption
  - button
  - overline
  - srOnly
  - inherit
