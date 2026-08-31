# [JavaScript] Easy to understand - 1 line

**Author:** poppinlp
**Votes:** 6
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1814309/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1814309/)

---

The core strategy for this problem is straightforward:
- traverse the list
- check each word is with a given prefix

I guess there won't be any problem with how to do the traversal. So, the only problem is how to check the prefix?

We could use `RegExp`, `indexOf`, `startsWith`, or even `slice` the first part.
Just choose anyone you like, here are 2 samples from me:

## Sample 1

```js
const prefixCount = (words, pref) => {
  let count = 0;
  for (const word of words) {
    word.startsWith(pref) && ++count;
  }
  return count;
}
```

## Sample 2

```js
const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;
```