# Official Solution

**Link:** [https://leetcode.com/problems/memoize-ii/solution/](https://leetcode.com/problems/memoize-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview
A very common performance optimization in software engineering is to avoid calling a function again if the result was already calculated in the past. This can be done case-by-case every time you want to do this optimization. However, a more elegant way is to write a single function that takes in a function, and returns a new function with this optimization applied. A function like this is called a **Higher-Order Function**. These are very common in JavaScript and it is important to have a firm grasp of them to have fully mastered the language.

The challenge to this problem is that your code has to remember all past inputs and the associated function outputs. If you were to do a linear search on all previous inputs, it could take a long time, eventually to the point where the "optimization" actually slows down your code.

You could try to use a dictionary that maps inputs to outputs. However it isn't obvious how to convert an array of arbitrary inputs into something that a `Map` could accept as a key. For example two empty objects `{}` may serialize to the same string, but in fact will not be `===` to each other.

---

### Approach 1: Tree Data Structure (Trie)

#### Intuition

Let's say four inputs have been passed into the function in the past: `[1,3], [1,5], [2,3], [2,4]`.  If you see that the first input is a `1`, you could immediately rule out all inputs that don't begin with the number `1`. To achieve this, you could create a dictionary that maps the first input to the list of possible outputs:

```js
{
  1: [[1,3], [1,5]],
  2: [[2,3], [2,4]]
}
```

However if you stop there, you are still left with a potentially large linear search. We need need to perform that step one more time and create a dictionary of dictionaries.

```js
{
  1: {3: [[1,3]], 5: [[1,5]]},
  2: {3: [[2,3]], 4: [[2,4]]}
}
```
Now with that data structure, we can immediately tell if an array was seen before with at most two map lookups!

In general, if you have a function that accepts $N$ inputs, you can create a tree of depth $N$ that will allow you to check if the input was seen before. If you stored the output of the function in each node, you now have an efficient way to map inputs to outputs!

#### Algorithm
You can read more about the Trie data structure [here](https://leetcode.com/problems/implement-trie-prefix-tree/editorial/) and [here](https://leetcode.com/explore/learn/card/trie/). This implementation used for memoization is very similar to a traditional Trie but is actually more general. Instead of each node representing letters, each node represents arbitrary input values. And instead of each node potentially containing a word, it can contain any arbitrary output of the function.

The core of the problem is the need to read and write output values given an array of inputs. Let's write a class that encapsulates this functionality.

- When reading values, we should jump down the tree one node at a time until we have iterated over the entire input array and have found the value. If at any point, the input value does not exist in the map, we return that the value was not found.

- When writing values, we iterate over the input array. If the input value exists in the map, we jump to the node that the value points at. Otherwise, we need to create a new node and jump to that. Finally, we write the value.

The final step is not difficult once we have this class. This function returns a memoized version of the passed function. The memoized version will check what value was already outputted for the given inputs. If that output does indeed exist, it will immediately return the value, avoiding extra computation. Otherwise, it will get the output from the function, write the value into the class, and finally return the output.

#### Implementation

Note that the implementation separates the problem into a helper class. The reason you might wish to do this is that this helper class is more generally reusable and can be tested independently. And the layer of abstraction arguably increases readability by allowing a reader to think about the core parts independently. Finally, as we will see in the next solution, you can swap out this caching logic for a different implementation. However a solution with a more tightly coupled solution could be shorter and more performant.

<iframe src="https://leetcode.com/playground/jiNHiKXa/shared" frameBorder="0" width="100%" height="500" name="jiNHiKXa"></iframe>


#### Complexity Analysis

Let $N$ be the number of arguments passed into the function. Let $L$ be the total number of times the function had been called previously.

* Time complexity: $O(N)$. You will do at most $N$ hops in the tree per function execution. Note that this assumes map lookups are $O(1)$.

* Space complexity: $O(NL)$. In the worst case, you will need to store all the arguments passed previously in the tree.

---

### Approach 2: Convert Array of Inputs into a String

#### Intuition

A challenge to the problem is that it's not obvious how you could convert the array of inputs into a key that a `Map` could understand. But in fact, you can!

The trick is to label each each unique inputted value with a unique integer. With that you can convert the array of input values into an array of integers. From there, you can convert it into a comma-separated string which is a valid hash of the input array.

We map every input to a unique integer. The first input we see is mapped to `1`, then the next one we see to `2`, and so on. For example, if the function was called with `f(true, null, 1)` and then `f(null, true, 70)`, you would have the mappings `true -> 1`, `null -> 2`, `1 -> 3`, and `70 -> 4`. The input arguments would have the following string representations: `"1,2,3"` and `"2,1,4"`.

#### Algorithm

First, write a function that converts arbitrary inputs into integers. In this function, there is map. If the input already exists in the map, then return the associated integer. Otherwise, increment a counter and store that counter value in the map.

Inside your function, return a new memoized function. In this memoized function, convert the array of inputs into an array of numbers. Then convert that into a comma-separated string. Check if that hash string has a value associated with it. If so, return the value. Otherwise, call the function, store the result in the cache, and return the result.

#### Implementation
Note that you will likely find this easier to implement then the tree-based solution. Also, it is simpler to extend this to the problem of limiting the cache size (LRU cache or similar). This is because it is easier to delete values out of a flat map than a tree.

A disadvantage is this implementation could potentially use more memory than a Trie solution. To see why, imagine the inputs `[1, 2, 3, 4, 5]` were already passed in. The map would would contain a single key `"1,2,3,4,5"`. Then imagine the inputs `[1, 2, 3, 4, 6]` were passed in. An entirely new key (of length 9) would need to be generated. But with a Trie, only a single node would need to be generated, and the first 4 could be reused. Most of the time this effect is minor, but you could imagine a situation where a function takes in many arguments and this is actually worth considering.

<iframe src="https://leetcode.com/playground/GMJmca6a/shared" frameBorder="0" width="100%" height="463" name="GMJmca6a"></iframe>

#### Complexity Analysis

Let $N$ be the number of arguments passed into the function. Let $L$ be the total number of times the function had been called previously.

* Time complexity: $O(N)$. Converting all $N$ arguments into integers is $O(N)$. Doing a map lookup on the resulting string is also $O(N)$.

* Space complexity: $O(NL)$. In the worst case, you will need to store $L$ strings in the map, and each string will contain $N$ integers.

---

### Additional Considerations

A professional implementation would need to consider several more things.

#### Memory Deallocation and Weak Maps
Imagine an object was passed to the memoized function. It could be almost any non-primitive type like a Symbol, Date, or Array. Now imagine that the external code stopped referencing this object. Ideally, you would want want the memory to be freed up and also removed from the cache. However, the above implementations would not only fail to remove the value from the cache, but it would also cause the memory to never get deallocated (after all your code references it).

JavaScript provides a solution to this problem when they added the `WeakMap` to the language. When the key is deallocated, the map will stop holding the key and will stop referencing the associated value as well (allowing it to potentially be deallocated as well).

You can see the popular library [memoizee](https://github.com/medikoo/memoizee#weakmap-based-configurations) optionally takes advantage of this feature.

#### Cache Size Limits

A problem with the above solutions is they could potentially cause an out-of-memory error because an infinite number values could potentially be stored in the cache. It would be important for a professional implementation to have some sort of limit of the cache size. There are many potential ways to achieve this.

- A popular approach would be an [LRU Cache](https://leetcode.com/problems/lru-cache/)
- You could implement a [Time Until Expiration](https://leetcode.com/problems/cache-with-time-limit/)
- [Most Recently Used Cache](https://leetcode.com/discuss/interview-question/1055998/mru-cache-java-implementation)
- [Least Frequently Used Cache](https://leetcode.com/problems/lfu-cache/)

You can see the interface of `memoizee` [here](https://www.npmjs.com/package/memoizee#limiting-cache-size)

#### NaN

A fascinating quirk of javascript is that `NaN !== NaN`. This is a quirk of other languages which follow the **IEEE 754** standard. This puts an implementer of memoization in an awkward situation. Because if you want the `===` definition of equality to hold, passing in `NaN` will always result in a cache-miss. This may or may not be desirable (probably not). Your implementation may wish to make an exception for `NaN`.

#### Impure Functions

As a user of memoization, it is important to understand it will only work correctly for **pure functions**. A **pure function** is function that will always return the same output given the same inputs and do not have side-effects that are outside of the function.

The fact you can only apply this optimization to **pure functions** is a good reason to prefer those types of function when possible.