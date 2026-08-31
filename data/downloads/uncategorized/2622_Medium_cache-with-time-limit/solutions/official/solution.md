# Official Solution

**Link:** [https://leetcode.com/problems/cache-with-time-limit/solution/](https://leetcode.com/problems/cache-with-time-limit/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to implement a key-value store, but where each entry expires after a certain amount of time

It is recommended you first read the [Sleep Editorial](https://leetcode.com/problems/sleep/editorial/) as it covers topics on asynchronous programming not discussed here.

#### Use-case for a Cache with a Time Limit

Imagine you are maintaining a cache of files from a database. You could load each file once and keep it in memory indefinitely. The issue is if a file is updated in the database, the cache will contains out-of-date data. Another option is to constantly re-download the files every time a file is accessed (or at least send a request asking if it changed). But this could be inefficient and slow, especially if the files change infrequently.

If it is acceptable for the data to sometimes be a little out of date, a good compromise is to give the data a ***Time Until Expiration***. This provides a good balance between performance and having up-to-date data. This type of cache is most effective when the same key is accessed in rapid succession.

Here is some code showing how to use this type of cache for that purpose:

```js
const cache = new TimeLimitedCache();

async function getFileWithCache(filename) {
  let content = cache.get(filename);
  if (content !== -1) return content;
  content = await loadFileContents(filename);
  const ONE_HOUR = 60 * 60 * 1000;
  cache.set(filename, content, ONE_HOUR);
  return content;
}
```

In the above code, `getFileWithCache` first tries to load the data from the cache. If there was a cache-hit, it immediately returns the result. Otherwise it downloads the data and populates the cache before returning the downloaded data.

---

### Approach 1: setTimeout + clearTimeout + Class Syntax

Every time a key-value pair is placed in the cache, we can also create a timer that deletes that key after the expiration time has elapsed. However, we need to be careful with this approach because what happens if we overwrite an existing key before the time expires? It will cause the new key to get prematurely deleted. For this reason, we need to maintain a reference to the timer so we can clear it if the key gets overwritten.

1. When a new instance of `TimeLimitedCache` is created, a new `Map` is created. Note that the `constructor` function is omitted here. Alternatively, we could have put `this.cache = new Map();` in the constructor and it would have resulted in identical behavior.
2. In the `set` method, we get the associated value for the key. If the key doesn't exist `valueInCache` is `undefined`. If `valueInCache` is NOT `undefined`, we cancel the timer that was supposed to delete the old key so it doesn't delete the new key. We then create a new timer that will delete the new key. Finally, we store both the value and a reference to the timer in the `Map` and return if the value was found or not.
3. In the `get` method, we use a [ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) to return value if it exists or `-1` if it doesn't.
4. In the `count` method, we simply return the `size` of the `Map`. Since, all the keys are deleted as soon as they expire, we know this value is accurate.

<iframe src="https://leetcode.com/playground/VNHPuvaP/shared" frameBorder="0" width="100%" height="446" name="VNHPuvaP"></iframe>

---

### Approach 2: setTimeout + clearTimeout + Function Syntax

The logic for this approach is identical to Approach 1, however we use functions instead of a class. Class syntax is more modern and is generally considered best-practice, however it is good to understand how functions can be used as constructors in older codebases. You can read more about the mechanics of this older syntax [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).


<iframe src="https://leetcode.com/playground/DwT4FY4F/shared" frameBorder="0" width="100%" height="480" name="DwT4FY4F"></iframe>

---
### Approach 3: Maintain Expiration Times

Rather than maintaining timers that delete keys, we can instead store the expiration time. When asked for the count of non-expired keys, we can simply filter out keys where `Date.now() > expirationTime`.

Note that `Date.now()` returns the number of milliseconds since the [unix epoch](https://en.wikipedia.org/wiki/Unix_time).

1. When the `set` method is called, we first assign `hasUnexpiredValue` to a boolean by checking if both the value exists and it hasn't expired. Then we add a new value being sure to include the time of expiration.
2. When the `get` method is called, we immediately return `-1` if the key doesn't exist or is expired. Otherwise, we return the value associated with the key.
3. When `count` is called, we need to check every entry to see if it has expired. `Object.values` returns a list of values associated with the keys in the object.

<iframe src="https://leetcode.com/playground/ceSDcioj/shared" frameBorder="0" width="100%" height="500" name="ceSDcioj"></iframe>

### Approach 4: Maintain Expiration Times + Priority Queue

Approach 3 has a few problems
- The values are stored in memory even after they have expired. This could be considered a memory leak.
- Counting the unexpired keys is an $O(N)$ operation with respect to the size of the cache.

We could fix the memory leak problem by removing all expired keys every time `set` is called, but this makes `set` an $O(N)$ operation as well.

A more optimal approach is to maintain a sorted list of all the expiration times in a [Priority Queue](https://en.wikipedia.org/wiki/Priority_queue). This allows us to remove an element that is expired in $O(logN)$ time.

1. We need to define a new method `handleExpiredData`. What this does is pop all the expired elements from the front of the queue. Then it should delete those expired elements from the cache. But what if the key is in the queue but we know it was overwritten at some point in time. In that case, we shouldn't delete it from the cache. Handling the overwritten flag will be handled in the `set` method.
2. In the `set` method, we first must call `handleExpiredData()`. We then check if the key exists in the cache so we can later return this value. If the key does already exist, we need set the `overwritten` flag to `true` so `handleExpiredData` doesn't delete the data by mistake. We can then define an object with all the relevant information (key, value, overwritten flag) and add it to both the queue and the cache.
3. In the `get` method, we must first call `handleExpiredData()`. After that, it's as simple as returning the value in the cache or `-1` if it doesn't exist.
4. In the `count` method, as usual, we must first call `handleExpiredData()`. Since we have been maintaining a `size` property, we just have to return it.

This implementation is pretty efficient. All the method calls have an average time complexity of $O(logN)$. However, in the worst case where all the keys are expired and need to be deleted, the time complexity is $O(NlogN)$. 

Although this implementation helps with the memory leak issue, it doesn't completely solve it. To see why, imagine you write the same key-value pair over and over again and give it a long expiration time. The queue will just get longer and longer unnecessarily. An approach that would solve this could be to use a [Binary Search Tree](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree) which allows for removing elements in the middle of the queue, not just at the front. However LeetCode does not include a built-in implementation for this in JavaScript.

You can read more about LeetCode's built-in Priority Queue [here](https://www.npmjs.com/package/@datastructures-js/priority-queue/v/4.1.0).

<iframe src="https://leetcode.com/playground/32LXVUKW/shared" frameBorder="0" width="100%" height="500" name="32LXVUKW"></iframe>

---