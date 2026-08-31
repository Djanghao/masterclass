# Easy one liner solution

**Author:** elangoram1998
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/4349842/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/4349842/)

---


# Code
```
function countPrefixes(words: string[], s: string): number {
    return words.filter((word) => s.startsWith(word)).length;
};
```