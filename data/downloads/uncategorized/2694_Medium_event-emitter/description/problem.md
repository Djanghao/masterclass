# [2694. Event Emitter](https://leetcode.com/problems/event-emitter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 286 | 38 |



**Companies:** `facebook`, `tinkoff`, `tiktok`

## Description

Design an `EventEmitter` class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The `EventEmitter` should allow for subscribing to events and emitting them.

Your `EventEmitter` class should have the following two methods:

	- **subscribe** - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.

	An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to `subscribe` are referentially identical.

	The `subscribe` method should also return an object with an `unsubscribe` method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and `undefined` should be returned.

	- **emit** - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

 

**Example 1:**

```

Input: 
actions = [&quot;EventEmitter&quot;, &quot;emit&quot;, &quot;subscribe&quot;, &quot;subscribe&quot;, &quot;emit&quot;], 
values = [[], [&quot;firstEvent&quot;], [&quot;firstEvent&quot;, &quot;function cb1() { return 5; }&quot;],&nbsp; [&quot;firstEvent&quot;, &quot;function cb1() { return 6; }&quot;], [&quot;firstEvent&quot;]]
Output: [[],[&quot;emitted&quot;,[]],[&quot;subscribed&quot;],[&quot;subscribed&quot;],[&quot;emitted&quot;,[5,6]]]
Explanation: 
const emitter = new EventEmitter();
emitter.emit(&quot;firstEvent&quot;); // [], no callback are subscribed yet
emitter.subscribe(&quot;firstEvent&quot;, function cb1() { return 5; });
emitter.subscribe(&quot;firstEvent&quot;, function cb2() { return 6; });
emitter.emit(&quot;firstEvent&quot;); // [5, 6], returns the output of cb1 and cb2

```

**Example 2:**

```

Input: 
actions = [&quot;EventEmitter&quot;, &quot;subscribe&quot;, &quot;emit&quot;, &quot;emit&quot;], 
values = [[], [&quot;firstEvent&quot;, &quot;function cb1(...args) { return args.join(&#39;,&#39;); }&quot;], [&quot;firstEvent&quot;, [1,2,3]], [&quot;firstEvent&quot;, [3,4,6]]]
Output: [[],[&quot;subscribed&quot;],[&quot;emitted&quot;,[&quot;1,2,3&quot;]],[&quot;emitted&quot;,[&quot;3,4,6&quot;]]]
Explanation: Note that the emit method should be able to accept an OPTIONAL array of arguments.

const emitter = new EventEmitter();
emitter.subscribe(&quot;firstEvent, function cb1(...args) { return args.join(&#39;,&#39;); });
emitter.emit(&quot;firstEvent&quot;, [1, 2, 3]); // [&quot;1,2,3&quot;]
emitter.emit(&quot;firstEvent&quot;, [3, 4, 6]); // [&quot;3,4,6&quot;]

```

**Example 3:**

```

Input: 
actions = [&quot;EventEmitter&quot;, &quot;subscribe&quot;, &quot;emit&quot;, &quot;unsubscribe&quot;, &quot;emit&quot;], 
values = [[], [&quot;firstEvent&quot;, &quot;(...args) =&gt; args.join(&#39;,&#39;)&quot;], [&quot;firstEvent&quot;, [1,2,3]], [0], [&quot;firstEvent&quot;, [4,5,6]]]
Output: [[],[&quot;subscribed&quot;],[&quot;emitted&quot;,[&quot;1,2,3&quot;]],[&quot;unsubscribed&quot;,0],[&quot;emitted&quot;,[]]]
Explanation:
const emitter = new EventEmitter();
const sub = emitter.subscribe(&quot;firstEvent&quot;, (...args) =&gt; args.join(&#39;,&#39;));
emitter.emit(&quot;firstEvent&quot;, [1, 2, 3]); // [&quot;1,2,3&quot;]
sub.unsubscribe(); // undefined
emitter.emit(&quot;firstEvent&quot;, [4, 5, 6]); // [], there are no subscriptions

```

**Example 4:**

```

Input: 
actions = [&quot;EventEmitter&quot;, &quot;subscribe&quot;, &quot;subscribe&quot;, &quot;unsubscribe&quot;, &quot;emit&quot;], 
values = [[], [&quot;firstEvent&quot;, &quot;x =&gt; x + 1&quot;], [&quot;firstEvent&quot;, &quot;x =&gt; x + 2&quot;], [0], [&quot;firstEvent&quot;, [5]]]
Output: [[],[&quot;subscribed&quot;],[&quot;subscribed&quot;],[&quot;unsubscribed&quot;,0],[&quot;emitted&quot;,[7]]]
Explanation:
const emitter = new EventEmitter();
const sub1 = emitter.subscribe(&quot;firstEvent&quot;, x =&gt; x + 1);
const sub2 = emitter.subscribe(&quot;firstEvent&quot;, x =&gt; x + 2);
sub1.unsubscribe(); // undefined
emitter.emit(&quot;firstEvent&quot;, [5]); // [7]
```

 

**Constraints:**

	- `1 <= actions.length <= 10`

	- `values.length === actions.length`

	- All test cases are valid, e.g. you don't need to handle scenarios when unsubscribing from a non-existing subscription.

	- There are only 4 different actions: `EventEmitter`, `emit`, `subscribe`, and `unsubscribe`.

	- The `EventEmitter` action doesn't take any arguments.

	- The `emit` action takes between either 1 or 2 arguments. The first argument is the name of the event we want to emit, and the 2nd argument is passed to the callback functions.

	- The `subscribe` action takes 2 arguments, where the first one is the event name and the second is the callback function.

	- The `unsubscribe` action takes one argument, which is the 0-indexed order of the subscription made before.

---

**Links:** [Submissions](https://leetcode.com/problems/event-emitter/) | [Solutions](https://leetcode.com/problems/event-emitter/)
