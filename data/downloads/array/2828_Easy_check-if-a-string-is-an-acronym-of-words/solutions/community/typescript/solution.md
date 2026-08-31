# 🚀🚀 BEATS 100% | One Line Solution | Easy-To-Understand 🔥🔥

**Author:** goderdzishvili
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4540432/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4540432/)

---

typescript / javascript 

# Code
```
function isAcronym(words: string[], s: string): boolean {
    return words.map(word => word[0]).join('') === s;
};  
```