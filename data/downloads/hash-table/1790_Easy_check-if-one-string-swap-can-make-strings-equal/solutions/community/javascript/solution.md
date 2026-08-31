# [JavaScript] Easy to understand - 2 solutions

**Author:** poppinlp
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1111937/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1111937/)

---

For this problem, the key point is "at most one string swap on exactly one of the strings" which means:
- the count of diff characters between the 2 strings must be 0 or 2
- the diff characters must be the same

After we got this, we could have our solutions easily.

## SOLUTION 1

This is a typical solution. We check the sequence and counting the diff characters and check that for result.

```js
const areAlmostEqual = (s1, s2) => {
  const BASE = 97;
  const dict1 = new Uint8Array(26);
  const dict2 = new Uint8Array(26);

  let diff = 0;
  for (let i = 0; i < s1.length; ++i) {
    ++dict1[s1.charCodeAt(i) - BASE];
    ++dict2[s2.charCodeAt(i) - BASE];
    s1[i] !== s2[i] && ++diff;
  }

  let flag = true;
  for (let i = 0; i < 26; ++i) {
    if (dict1[i] !== dict2[i]) { flag = false; break; }
  }

  return flag && (diff === 2 || diff === 0);
};
```

## SOLUTION 2

This is an optimization for solution 1.
To get the result, we don't need the information of whole characters but only the information of diff characters.
And we could return early if the diff count is more than 2.

```js
const areAlmostEqual = (s1, s2) => {
  let diff = 0;
  let di1 = 0;
  let di2 = 0;

  for (let i = 0; i < s1.length; ++i) {
    if (s1[i] === s2[i]) continue;
    if (++diff > 2) return false;
    diff === 1 ? (di1 = i) : (di2 = i);
  }

  return (diff === 0 || diff === 2) && s1[di1] === s2[di2] && s1[di2] === s2[di1];
};
```