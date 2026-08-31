# !!!!!The SHORTEST solution!!!!!

**Author:** Bogutskii
**Votes:** 36
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3646561/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3646561/)

---

# Code
```
const reverseVowels = function(s) {
    const vow = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/ig, el=> vow.pop());
};
```