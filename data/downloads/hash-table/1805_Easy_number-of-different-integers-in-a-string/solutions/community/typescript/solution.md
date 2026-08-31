# 100% both, MADMAN one liner solution, using array method, Set, RegExp | TS/JS

**Author:** garbagedevvv
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/2846779/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/2846779/)

---



# Code
```
function numDifferentIntegers(word: string): number {
    return new Set(word.replace(/[a-z]+/g, " ").split(" ").filter(num=>num !== "").map(num=>num.replace(/\\b0+/, ""))).size;
};
```