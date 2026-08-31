# Official Solution

**Link:** [https://leetcode.com/problems/counter-ii/solution/](https://leetcode.com/problems/counter-ii/solution/)

---

[TOC]

## Solution
---

### Overview

This question is intended as an introduction to ***closures*** and ***objects***. It is recommended that you first read the editorial for [counter](https://leetcode.com/problems/counter/editorial/) is it contains basic information about closures not discussed here.

#### JavaScript Objects

At their core, ***objects*** are just mappings from strings to other values. The values can be anything: strings, functions, other objects, etc. The string that maps to the value is called the ***key***.

```js
const object = {
  "num": 1,
  "str": "Hello World",
  "obj": {
    "x": 5
  }
};
```

There are three ways to access values on an object:

1. ***Dot Notation***.

```js
const val = object.obj.x;
console.log(val); // 5
```

2. ***Bracket Notation***. This is used when the key isn't valid variable name. For example `".123"`.

```js
const val = object["obj"]["x"];
console.log(val); // 5
```
3. ***Destructuring Syntax***. This is most useful when accessing multiple values at once. You can read more about the syntax [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
```js
const { num, str} = object;
console.log(num, str); // 1 "Hello World"
```

You can read more about objects [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

#### Classes and Prototypes

You can also define ***classes*** in JavaScript. The classes's constructor returns an object which is an instance of that class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("My name is", this.name);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // Logs: "My name is Alice"
```

JavaScript implements classes with special objects call ```prototypes```. All the methods (in this case `greet`) are functions stored on the object's prototype.

To make this concrete, the behavior of the above code could be replicated with the following code:

```js
const alice = {
  name: "Alice",
  age: 25,
  __proto__: {
    greet: function() {
      console.log("My name is", this.name);
    }
  }
};
alice.greet(); // Logs: "My name is Alice"
```

Looking at this code, you might wonder "How can you access the greet method even though it's not a key on the alice object"?

The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. There is actually an algorithm that traverse the ***prototype chain***. First, JavaScript looks at the keys on the object. If the requested key wasn't found, it then looks on the keys of the prototype object. If it still wasn't found, it looks at the prototype's prototype, and so on. This is how ***inheritance*** is implemented in JavaScript!

You might also wonder why JavaScript has this strange prototype concept at all. Why not just store the functions on the object itself? The answer is efficiency. Every time a new `Person` is created, `age` and `name` fields are added to the object. However only a single ***reference*** to the prototype object is added. So no matter how many instances of `Person` are created or how many methods are on the class, only a single prototype object is generated.

You can read more about classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

#### Proxies

An infrequently used but powerful feature of javascript is the ***proxy***. They allow you to override the default behavior of objects.

For example, to implement the `alice` object with proxies:

```js
const alice = new Proxy({name: "Alice", age: 25}, {
  get: (target, key) => {
    if (key === 'greet') {
      return () => console.log("My name is", target.name);
    } else {
      return target[key];
    }
  },
});
alice.greet(); // Logs: "My name is Alice"
```
##### Examples

Here are some examples of potentially practical use-cases for proxies.

- Perform validation to guarantee bad data is never entered into a form.

<details>
  <summary>Code Example</summary>

  ```js
const validator = {
    set: (obj, prop, value) => {
      if (prop === "age") {
        if (typeof value !== "number" || value < 0) {
          throw new TypeError("Age must be a positive number");
        }
      }
      obj[prop] = value;
    },
};

const person = new Proxy({}, validator);
person.age = 25; // Works fine
person.age = -5; // Throws an error
  ```
</details>
<br>

- Create a log any time a key is accessed. This could be useful as a developer tool.

<details>
  <summary>Code Example</summary>

  ```js
const object = {
    "num": 1,
    "str": "Hello World",
    "obj": {
      "x": 5
    }
};
const proxiedObject = new Proxy(object, {
    get: (target, key) => {
      console.log("Accessing", key);
      return target[key];
    }
});
proxiedObject.num; // Logs: Accessing num
  ```
</details>
<br>

- Throw an error if an attempt was made to write to a readonly value.

<details>
  <summary>Code Example</summary>

  ```js
const READONLY_KEYS = ['name'];

const person = new Proxy({ name: "Alice", age: 25 }, {
    set: (target, key, value) => {
      if (READONLY_KEYS.includes(key)) {
        throw Error("Cannot write to key");
      }
      target[key] = value;
      return true;
    }
});
person.name = "Bob"; // Throws Error
  ```
</details>
<br>

- Create a modified version of an ***immutable*** object by writing to it's proxy. This is implemented with the popular library [immer](https://immerjs.github.io/immer/).

You can read more about proxies [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

### Approach 1: Closure

We can declare a variable `currentCount` and set it equal to `init`. Then return an object with the three functions where we `increment`, `decrement`, and `reset` the `currentCount`.

**Implementation**

<iframe src="https://leetcode.com/playground/THvjiAxE/shared" frameBorder="0" width="100%" height="344" name="THvjiAxE"></iframe>

---
### Approach 2: Closure with Shortened Syntax

We can take the concept from Approach 1 and shorten the syntax in several ways.

1. We can replace `+= 1` and `-= 1` with ***Prefix Increment/Decrement*** syntax. What this syntax allows you to do is increment or decrement a number and ***then*** return it.
2. Combine `currentCount = init` and `return currentCount` into a single line of code. In JavaScript, assigning a value to a variable also returns that value.
3. Switch from `function` syntax to arrow syntax when defining the functions.

**Implementation**

<iframe src="https://leetcode.com/playground/8R28sweG/shared" frameBorder="0" width="100%" height="191" name="8R28sweG"></iframe>

---

### Approach 3: Closure with Separately Created Functions

You can declare functions with the appropriate names and then return them. What this approach highlights is syntactic sugar for creating objects. When the name of the value is the same name as the key, you can omit the value. For example, you could shorten `let obj = { value: value };` to `let obj = { value };`

**Implementation**

<iframe src="https://leetcode.com/playground/AF6FW6uR/shared" frameBorder="0" width="100%" height="344" name="AF6FW6uR"></iframe>

---

### Approach 4: Class

We can define a `Counter` class with the appropriate methods and then return a new instance of this class.

**Implementation**

<iframe src="https://leetcode.com/playground/QTG77fio/shared" frameBorder="0" width="100%" height="500" name="QTG77fio"></iframe>

---

### Approach 5: Closure with Proxy

Rather than returning a normal object, we can return a `Proxy` which emulates the behavior of an object with methods. We can do this by listening to all property access (`get`) events and if the requested key matches the name of a method, perform the appropriate logic. 

Note that this solution is primarily for demonstration purposes. Proxies are a very powerful tool and their use should be reserved for situations that absolutely require them.

**Implementation**

<iframe src="https://leetcode.com/playground/AoQgNfgm/shared" frameBorder="0" width="100%" height="344" name="AoQgNfgm"></iframe>

---