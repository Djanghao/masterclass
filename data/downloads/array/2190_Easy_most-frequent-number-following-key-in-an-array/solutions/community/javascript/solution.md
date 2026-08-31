# [JavaScript] Easy to understand - detailed explanation - counting with map or array

**Author:** poppinlp
**Votes:** 5
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1827425/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1827425/)

---

## Core Strategy

It's another counting problem. What we need to do is:
- counting the frequency for every `target`
- find out the number with the max frequency

It's easy to think about using a 2 times traversal - 1 time for counting and another time for finding the max.
But, actually, we could finish it in just 1-time traversal by maintaining a variable of the max frequency.

## Count with map

We just follow the strategy, use a map to save the frequency, nothing more.

Here's a sample code from me:

```js
const mostFrequent = (nums, key) => {
  const freq = {};
  let ret = 0;
  for (let i = 0, max = 0; i < nums.length - 1; ++i) {
    if (nums[i] !== key) continue;
    const target = nums[i + 1];
    freq[target] = (freq[target] || 0) + 1;
    if (freq[target] > max) {
      max = freq[target];
      ret = target;
    }
  }
  return ret;
};
```

## Count with array

We use a fixed-length array to save the frequency, and I try to make the code shorter.

Here's a sample code from me:

```js
const mostFrequent = (nums, key) => {
  const freq = new Uint16Array(1001);
  let ret = 0;
  for (let i = 0, max = 0; i < nums.length - 1; ++i) {
    const target = nums[i + 1];
    nums[i] === key && ++freq[target] > max && ((max = freq[target]), (ret = target));
  }
  return ret;
};
```