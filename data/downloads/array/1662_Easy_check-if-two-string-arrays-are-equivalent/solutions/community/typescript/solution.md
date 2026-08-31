# a simple one liner solution, 87% faster | Typescript/js

**Author:** garbagedevvv
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/2740616/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/2740616/)

---

# Code
```
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return word1.join("") === word2.join("");
};
```
OWL