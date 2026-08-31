# [JavaScript] Easy to understand - 2 solutions

**Author:** poppinlp
**Votes:** 22
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1143981/](https://leetcode.com/problems/truncate-sentence/solutions/1143981/)

---

## SOLUTION 1

We could solve it easily via spliting.
```js
const truncateSentence = (s, k) => s.split(' ', k).join(' ');
```

## SOLUTION 2

Let's see if we could have a better performance.
Since there's no leading or trailing space, and words that are separated by only a single space, so if we want only the first `k` words, we could just count `k` spaces.
And, don't forget to return whole `s` if there are not enough words.

```js
const truncateSentence = (s, k) => {
  let spaceCount = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ' ' && ++spaceCount === k) return s.slice(0, i);
  }
  return s;
};
```