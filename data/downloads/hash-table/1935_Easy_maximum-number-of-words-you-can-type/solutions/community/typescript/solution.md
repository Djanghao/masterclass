# [TypeScript, JavaScript] A one-liner with fastest runtime (100.00%)

**Author:** denshell
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/2373075/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/2373075/)

---

As you're having multiple characters to check a condition against, consider using *Array.prototype.some()*.
```
function canBeTypedWords(text: string, brokenLetters: string): number {
  return text.split(' ').reduce((prev, cur) => brokenLetters.split('').some(a => cur.indexOf(a) > -1) ? prev : prev + 1, 0);
}
```
Let me know if you have any questions. Please hit upvote if you find it useful.