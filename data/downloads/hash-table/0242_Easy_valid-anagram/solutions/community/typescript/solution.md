# Typescript one line solution

**Author:** Yorkinjon
**Votes:** 15
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/2558253/](https://leetcode.com/problems/valid-anagram/solutions/2558253/)

---

```
function isAnagram(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
};
```