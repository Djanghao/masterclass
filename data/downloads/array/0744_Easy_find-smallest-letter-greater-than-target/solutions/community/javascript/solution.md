# JavaScript one-line O(n)

**Author:** shengdade
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/506564/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/506564/)

---

**Binary Search** will give you O(log(n)), but if you just want a quick O(n) solution, see below:

```javascript
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  return letters.find(c => c > target) || letters[0];
};
```