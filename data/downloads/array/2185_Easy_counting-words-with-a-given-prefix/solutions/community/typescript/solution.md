# ✅ Simplest solution. TypeScript

**Author:** 13ozOfCats
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/4140252/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/4140252/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function prefixCount(words: string[], pref: string): number {
    return words.reduce((acc, val) => val.startsWith(pref) ? ++acc : acc, 0)
}
```