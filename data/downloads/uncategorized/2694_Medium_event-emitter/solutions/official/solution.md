# Official Solution

**Link:** [https://leetcode.com/problems/event-emitter/solution/](https://leetcode.com/problems/event-emitter/solution/)

---

[TOC]


## Overview:
We are tasked with designing an `EventEmitter` class that allows for subscribing to events and emitting them. The `EventEmitter` should have the following two methods:

* `subscribe(eventName, callback)`: This method takes in the name of an event as a string and a `callback` function. The `callback` function will be called when the event is emitted. An event should be able to have multiple listeners for the same event. The callbacks should be called in the order they were subscribed. The `subscribe` method should return an object with an `unsubscribe` method that can be used to remove the `callback` from the list of subscriptions.
* `emit(eventName, args)`: This method takes in the name of an event as a string and an optional array of arguments. It should trigger the callbacks associated with the `eventName`, passing the provided arguments to each `callback`. If there are no callbacks subscribed to the given event, the method should return an empty array. Otherwise, it should return an array containing the results of all `callback` calls in the order they were subscribed.

---

### Before going any further let us understand meaning of few terms:

**Events and Event-driven Programming:**
* Events represent things that happen in a program. For example, when a user clicks a button, it triggers a "click" event.
* Event-driven programming focuses on responding to events rather than following a fixed sequence of steps. It allows programs to react to user interactions and external changes.
* **Example:** Imagine a game where the player's character moves when the arrow keys are pressed. The game uses `events` to detect key presses and update the character's position accordingly.

**EventEmitter:**
* An EventEmitter is a tool or class that manages events in a program. It allows components to subscribe to events and receive notifications when those events occur.
* **Example:** Think of an `EventEmitter` as a radio station. It broadcasts different types of shows (events), and listeners (components) can tune in to listen to specific shows they are interested in.


**Subscriptions and Callbacks:**
* Subscriptions allow components to express their interest in specific events. They specify which events they want to listen to.
* Callbacks, also known as event handlers, are functions that get executed when the subscribed event occurs.
* **Example:** In a messaging app, a user can subscribe to the "newMessage" event to receive notifications when a new message is received. The callback function could display the message on the screen.
```js
// Callback function for handling new messages
function handleMessageReceived(message) {
console.log("New message received:", message);
}

// Subscribe the callback function to the "newMessage" event
eventEmitter.subscribe("newMessage", handleMessageReceived);
```

**Order of Callback Execution:**
* When multiple listeners subscribe to the same event, the callbacks are executed in the order they were subscribed.
* **Example:** Imagine a social media app where users can like a post. Each like triggers the "postLiked" event, and all subscribed callbacks should execute in the order they were registered.

**Unsubscribing from Events:**
* Subscriptions can be canceled or removed when components no longer want to receive event notifications.
* **Example:** In a notification system, users may want to unsubscribe from email notifications after they have configured their preferences.
```js
// Subscribe a callback function to an event and get the unsubscribe method
const subscription = eventEmitter.subscribe("eventName", callback);

// Unsubscribe from the event by calling the unsubscribe method
subscription.unsubscribe();
```

**Event Arguments:**
* Events can carry additional information or data, known as event arguments, which are passed to the callback functions.
* **Example:** In a weather app, the "weatherUpdate" event may include arguments such as temperature, humidity, and weather conditions. The callback function can use these arguments to update the UI.
```js
// Callback function for handling weather updates
function handleWeatherUpdate(weatherData) {
console.log("Temperature:", weatherData.temperature);
console.log("Humidity:", weatherData.humidity);
}

// Subscribe the callback function to the "weatherUpdate" event
eventEmitter.subscribe("weatherUpdate", handleWeatherUpdate);
```

**Return Values:**
* Callbacks can perform actions or computations and return values based on their functionality.
* **Example:** In a calculator app, a callback function subscribed to the "calculate" event may receive arguments like numbers and an operation. It can perform the calculation and return the result.
```js
// Callback function for handling calculations
function handleCalculation(numbers, operation) {
if (operation === "add") {
    return numbers.reduce((a, b) => a + b, 0);
} else if (operation === "multiply") {
    return numbers.reduce((a, b) => a * b, 1);
}
}

// Subscribe the callback function to the "calculate" event
eventEmitter.subscribe("calculate", handleCalculation);
```

---


## Use Cases:

* **User Interface (UI) Interactions:** In web development, an `EventEmitter` can be used to handle user interactions such as button clicks, form submissions, or menu selections. Components can subscribe to these events and perform appropriate actions or updates when the events are emitted.
```js
// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Subscribe to a button click event
eventEmitter.subscribe("buttonClick", () => {
console.log("Button clicked!");
});

// Emit the button click event
eventEmitter.emit("buttonClick");
```

* **Asynchronous Operations:** When working with asynchronous operations like fetching data from an API or handling database queries, an `EventEmitter` can be used to notify components or modules about the completion or status of these operations. Subscribed callbacks can then handle the returned data or trigger subsequent actions.
```js
// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Simulate an asynchronous operation
function fetchData() {
setTimeout(() => {
    const data = "Some fetched data";
    // Emit the event with the fetched data
    eventEmitter.emit("dataFetched", data);
}, 2000);
}

// Subscribe to the dataFetched event
eventEmitter.subscribe("dataFetched", (data) => {
console.log("Data fetched:", data);
});

// Trigger the asynchronous operation
fetchData();
```

* **Custom Event-driven Systems:** `EventEmitters` can be used to build custom event-driven systems for specific application needs. For example, in a game engine, an `EventEmitter` can be used to manage events like player movement, collision detection, or game state changes. Components, such as game objects or UI elements, can subscribe to these events and respond accordingly.
```js
// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Game state change event
eventEmitter.subscribe("gameStateChange", (newState) => {
console.log("Game state changed:", newState);
});

// Player movement event
eventEmitter.subscribe("playerMovement", (movement) => {
console.log("Player moved:", movement);
});

// Emit game events
eventEmitter.emit("gameStateChange", "start");
eventEmitter.emit("playerMovement", "left");
```

* **Logging and Error Handling:** An `EventEmitter` can be utilized to handle logging and error events. Subscribed callbacks can capture error events, log them to a file or console, and perform error handling tasks such as sending error reports or displaying error messages to the user.
```js
// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Error event
eventEmitter.subscribe("error", (errorMessage) => {
console.error("Error occurred:", errorMessage);
});

// Log event
eventEmitter.subscribe("log", (message) => {
console.log("Log message:", message);
});

// Emit logging and error events
eventEmitter.emit("error", "Something went wrong!");
eventEmitter.emit("log", "Info: Application started.");
```

* **Event-driven Architectures:** `EventEmitters` are a fundamental building block in event-driven architectures. They enable loose coupling and decoupling of components by allowing them to communicate through events. This promotes modularity and scalability in large-scale applications.

---

## Approach 1: Using array

### Intuition:

* When an `event` is emitted, we can check if there are any handlers `subscribed` to that `event` by accessing current `event`. If there are no handlers, an empty array is returned, indicating that no callbacks were executed.
* If there are handlers, we can iterate over the array of handlers using the `map` method. For each handler, we can call the corresponding callback function with the provided arguments using the spread operator `(...args)`. In the end return values of each callback execution are collected and returned as an array.

### Algorithm:
* The `EventEmitter` class is defined with a constructor method. The constructor initializes an empty object called `events` to store the event subscriptions. This object will hold the event names as keys and arrays of callback functions as their corresponding values.
* The `subscribe` method is implemented to subscribe to an event. It takes in two parameters: `event` (the name of the event as a string) and `cb` (the callback function to be called when the event is emitted).
* Inside the subscribe method:
  * We check if there are any existing handlers for the current event by accessing `this.events[event]`.
  * If there are no handlers, we can initialize an empty array using the nullish coalescing operator `(??)`. Nullish operator evaluates the expression on its left-hand side and, if the value is `null` or `undefined`, it returns the expression on its right-hand side.
  * We can then push the provided callback function `(cb)` to the array of handlers `(this.events[event])`.
* The `subscribe` method returns an object with an `unsubscribe` method. The `unsubscribe` method is an arrow function that removes the subscribed callback from the array of handlers for the corresponding event.
* The `emit` method is implemented to emit an event. It takes in two parameters: `event` (the name of the event as a string) and `args` (an optional array of arguments to be passed to the callbacks).
* Inside the `emit` method:
  * We check if there are any handlers subscribed to the current event by accessing `this.events[event]`.
  * If there are no handlers, we return an empty array `[]` indicating that no callbacks were executed.
  * If there are handlers:
    * We use the `map` method to iterate over the array of handlers `(this.events[event])`.
    * For each handler, we call the callback function `(f)` with the provided arguments `(...args)` using the spread operator `(...)`.
    * In the end the return values of each callback execution are collected and returned as an array.

### Implementation:


<iframe src="https://leetcode.com/playground/jxhaPeqT/shared" frameBorder="0" width="100%" height="500" name="jxhaPeqT"></iframe>


### Complexity Analysis:

* **Time complexity:** For subscribe: $$O(1)$$ & For unsubscribe and emit: $$O(n)$$ , where `n` represents the number of callbacks subscribed to the event
* **Space complexity:** $$O(n)$$ , where `n` represents the number of callbacks subscribed to the event

---

## Approach 2: Using Set

### Intuition:

We can create a object to store each event and as same event can consist of many different callbacks, we can use a set instead of array to store each different callbacks for the same event.

### Algorithm:
* The `EventEmitter` class is defined with a constructor method. The constructor initializes an empty object called `events` to store the event subscriptions. This object will hold the event names as keys and arrays of callback functions as their corresponding values.
* The `subscribe` method is implemented to subscribe to an event. It takes in two parameters: `event` (the name of the event as a string) and `cb` (the callback function to be called when the event is emitted).
* Inside the `subscribe` method:
  * We first check if the events object does not have the specified event as its own property. If it doesn't, we initialize it with a new `Set` containing the callback function. The `Set` data structure ensures that duplicate callbacks are not added.
  * If the event already exists in the `events` object, we add the callback function to the existing set of callbacks associated with that event.
  * The `subscribe` method returns an object with an `unsubscribe` method. When called, this method removes the callback function from the set of subscriptions for the specific event.
* The `emit` method is used to emit (trigger) an event. It takes in the `event` (name of the event as a string) and an optional `args` array that contains arguments to be passed to the callback functions.
  * Inside the `emit` method, we first check if the specified event exists in the `events` object. If it doesn't, we return an empty array since there are no callbacks subscribed to that event.
  * We create an empty `result` array to store the results of callback function calls.
  * We iterate over each callback function in the set of callbacks associated with the event using the `forEach` method.
  * For each callback function, we invoke it using the spread operator `(...args)` to pass the arguments provided to the `emit` method.
  * The result of each callback function call is pushed into the `result` array.
  * Finally, the result array containing the results of all callback function calls is returned.


### Implementation:


<iframe src="https://leetcode.com/playground/grx3coNj/shared" frameBorder="0" width="100%" height="500" name="grx3coNj"></iframe>


### Complexity Analysis:

* **Time complexity:** For subscribe & unsubscribe: $$O(1)$$, For emit: $$O(n)$$ , where `n` represents the number of callbacks subscribed to the event
* **Space complexity:** $$O(n)$$ , where `n` represents the number of callbacks subscribed to the event

---


## Interview Tips:

* How would you handle events with arguments using the EventEmitter class?
  * When subscribing to an event, the callback function can accept the event arguments as parameters. When emitting the event, you can pass an array of arguments to the emit method, which will be passed to the subscribed callbacks. The callbacks can then access and utilize these arguments in their implementation.

* Can multiple callbacks be subscribed to the same event using the EventEmitter class?
  * Yes, the EventEmitter class allows multiple callbacks to be subscribed to the same event. Each subscribed callback will be called in the order they were subscribed when the event is emitted.

* How can you ensure the order of callback execution in the EventEmitter class?
  * The EventEmitter class maintains the order of callback execution by storing the callbacks in the order they are subscribed. When emitting an event, the class iterates through the list of callbacks in the order they were subscribed and calls each callback function.

* What happens when you emit an event with no subscribed callbacks using the EventEmitter class?
  * If there are no callbacks subscribed to a particular event, emitting that event using the EventEmitter class will return an empty array. This indicates that no callbacks were executed because there were no listeners for the event.

* Can you explain the difference between an EventEmitter and a simple callback function?
  * While a simple callback function allows you to execute a single function when an event occurs, an EventEmitter provides a more structured and scalable way to manage events. With an EventEmitter, you can have multiple callbacks for the same event, handle subscription and unsubscription, control the order of callback execution, pass arguments to callbacks, and have a more decoupled architecture.

---