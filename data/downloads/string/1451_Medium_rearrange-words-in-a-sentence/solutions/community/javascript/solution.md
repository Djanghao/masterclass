# [JavaScript] Easy to understand - bucket sort

**Author:** poppinlp
**Votes:** 9
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/638261/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/638261/)

---

The algorithm for this problem is pretty straight forward. But the `Array.prototype.sort` in JS is not always stable which can't fit this requirement:

> If two words have the same length, arrange them in their original order.

So we need to implement a stable sort instead of it. Here, I choose a bucket sort since the range is not too large.

The code is here:

```js
const arrangeWords = text => {
  const buckets = [];
  const words = text.split(' ');
  let ret = '';
  words[0] = words[0].toLowerCase();
  for (const word of words) {
    buckets[word.length] ? buckets[word.length].push(word) : (buckets[word.length] = [word]);
  }
  for (const list of buckets) {
    list && list.forEach(word => ret += word + ' ');
  }
  return ret[0].toUpperCase() + ret.slice(1, -1);
};
```