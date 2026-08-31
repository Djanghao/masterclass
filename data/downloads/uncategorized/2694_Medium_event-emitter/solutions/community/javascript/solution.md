# ✅✅ Easy JS Implementation || Callback Functions || Maps || Subscribe || Concepts Used [JS, 40 MB]

**Author:** 2uringTested
**Votes:** 51
**Link:** [https://leetcode.com/problems/event-emitter/solutions/3550743/](https://leetcode.com/problems/event-emitter/solutions/3550743/)

---

**I have attached the code first followed by the intuition behind the code as well as the concepts used and the approach behind solving it.**

# Code
```
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    const listeners = this.events.get(event);
    listeners.push(cb);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(cb);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) {
      return [];
    }

    const listeners = this.events.get(event);
    const results = [];

    for (const listener of listeners) {
      results.push(listener(...args));
    }

    return results;
  }
}



```

# Intuition:
The `EventEmitter` class is designed to provide a way to subscribe to events and emit them with optional arguments. It allows multiple listeners for the same event and maintains the order of subscription. The class should provide methods to subscribe to events, unsubscribe from events, and emit events with associated callbacks.

# Concepts used:
1. **Map:** The `Map` data structure is used to store the events as keys and arrays of callbacks as values. It allows efficient retrieval and manipulation of the event listeners.

2. **Subscriptions:** When subscribing to an event, a callback function is added to the array of listeners for that event. The `subscribe` method returns an object with an `unsubscribe` method, which allows the removal of the callback from the event's listeners.

3. **Callbacks and Arguments:** The callbacks associated with events can receive optional arguments when emitting the event. The `emit` method calls each callback with the provided arguments and collects the results.

# Approach:
1. In the `EventEmitter` constructor, an internal `Map` named `events` is initialized to store event names as keys and arrays of callbacks as values.

2. The `subscribe` method checks if the event already exists in the `events` map. If not, it creates an empty array for that event.

3. The provided callback function (`cb`) is added to the array of callbacks for the specified event.

4. The `subscribe` method returns an object with an `unsubscribe` method. This allows users to remove the callback from the list of subscriptions by finding its index and splicing it from the array.

5. The `emit` method checks if the event exists in the `events` map. If not, it returns an empty array since there are no callbacks subscribed to the event.

6. If the event exists, the array of callbacks for that event is retrieved. The method then iterates through each callback and calls it with the provided arguments (`args`).

7. The results of each callback call are stored in an array (`results`), which is returned at the end of the method.

By using the `Map` data structure, the code organizes the events and associated callbacks efficiently. The class provides a clear and intuitive interface by returning an object with an `unsubscribe` method upon subscription. The implementation ensures that events can have multiple listeners and that emitted events trigger the corresponding callbacks in the order they were subscribed.

# Please upvote if this helped you in any way \u2705

![image.png](./images/0.png)


