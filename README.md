# gendiff.js
The application detects file format based on its extension. It converts config to an object structure (AST), same for different formats.
Then the app creates a diff by comparing the ASTs recursively with a function. Finally, the app renders diff in the selected to the console.format
____
### Tests and linter status:
[![Actions Status](https://github.com/thealeksander/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/thealeksander/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/714f8981510aadc4f66e/maintainability)](https://codeclimate.com/github/thealeksander/frontend-project-lvl2/maintainability)
[![Actions Status](https://github.com/thealeksander/frontend-project-lvl2/workflows/NodeCI/badge.svg)](https://github.com/thealeksander/frontend-project-lvl2/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/714f8981510aadc4f66e/test_coverage)](https://codeclimate.com/github/thealeksander/frontend-project-lvl2/test_coverage)

### Examples

#### Comparison JSON & YAML plain files in 'stylish'
[![asciicast](https://asciinema.org/a/PRawAqtwlcKPlAApTfIYjsGui.svg)](https://asciinema.org/a/PRawAqtwlcKPlAApTfIYjsGui)
#### Comparison JSON & YAML nested files in 'stylish'
[![asciicast](https://asciinema.org/a/3PcAsE44jUGLOjzqWdvdUz1iz.svg)](https://asciinema.org/a/3PcAsE44jUGLOjzqWdvdUz1iz)
#### Comparison JSON & YAML nested files in 'plain'
[![asciicast](https://asciinema.org/a/461ENDqZryfzGaN8DGHhnDS3H.svg)](https://asciinema.org/a/461ENDqZryfzGaN8DGHhnDS3H)
#### Comparison JSON & YAML nested files in 'json'
[![asciicast](https://asciinema.org/a/qO1y9SKGZzKGZx0fD6k8uPsbT.svg)](https://asciinema.org/a/qO1y9SKGZzKGZx0fD6k8uPsbT)
