### Capture Event Listeners

## Introduction

In JavaScript, event listeners can be registered in two phases: the capturing phase and the bubbling phase. By default, event listeners are registered in the bubbling phase, but you can register them in the capturing phase by setting the `capture` option to `true`.

## Event Phases

1. **Capturing Phase:** The event starts from the root and travels down to the target element.
2. **Target Phase:** The event reaches the target element.
3. **Bubbling Phase:** The event bubbles up from the target element back to the root.

## Adding Capture Event Listeners

To add an event listener in the capturing phase, you can pass an options object with the `capture` property set to `true`.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Capture Event Listeners</title>
</head>
<body>
  <div id="parent">
    <button id="child">Click Me</button>
  </div>

  <script>
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    parent.addEventListener('click', (event) => {
      console.log('Parent clicked (capturing)');
    }, { capture: true });

    child.addEventListener('click', (event) => {
      console.log('Child clicked (bubbling)');
    });

    parent.addEventListener('click', (event) => {
      console.log('Parent clicked (bubbling)');
    });
  </script>
</body>
</html>
```

## Removing Capture Event Listeners

To remove a capture event listener, you can use the `removeEventListener()` method and pass the same options object that was used to add the listener.

### Example

```javascript
const parent = document.getElementById('parent');
const child = document.getElementById('child');

const capturingListener = (event) => {
  console.log('Parent clicked (capturing)');
};

const bubblingListener = (event) => {
  console.log('Parent clicked (bubbling)');
};

parent.addEventListener('click', capturingListener, { capture: true });
child.addEventListener('click', bubblingListener);

// Remove the capture event listener
parent.removeEventListener('click', capturingListener, { capture: true });
```

## Modifying Capture Event Listeners

If you want to modify a capture event listener, you can simply remove the existing listener and add a new one with the desired changes.

### Example

```javascript
const parent = document.getElementById('parent');
const child = document.getElementById('child');

const capturingListener = (event) => {
    console.log('Parent clicked (capturing)');
};

const modifiedListener = (event) => {
    console.log('Parent clicked (capturing) - Modified');
};

parent.addEventListener('click', capturingListener, { capture: true });

// Remove the existing capture event listener
parent.removeEventListener('click', capturingListener, { capture: true });

// Add the modified capture event listener
parent.addEventListener('click', modifiedListener, { capture: true });
```

In the example above, we first add a capture event listener to the `parent` element. Then, we remove the existing listener using `removeEventListener()`. Finally, we add a new capture event listener with the desired modifications.

Remember to pass the same options object that was used to add the listener when removing or modifying the capture event listener.


