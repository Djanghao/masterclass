# [JavaScript] Elegant solution using a set and reduce (with explanation)

**Author:** mrhyde
**Votes:** 33
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/1013948/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/1013948/)

---

It's a pretty straight forward solution. All we need to do is:
- create a set containing all allowed characters,
- iterate over all words using reduce accumulating the number of `good` words
- split each word into the array of letters
- check if `every` letter is present in a set of allowed words
- if so - increment the accumulator
- return accumulated value


```javascript
const countConsistentStrings = (allowed, words) => {
  let set = new Set(allowed)
  return words.reduce((a, w) => {
    return w.split('').every(l => set.has(l)) ? ++a : a
  }, 0)
}
```