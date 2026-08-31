# 🚀🚀 One Line Solution | Easy-To-Understand 🔥🔥

**Author:** goderdzishvili
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4541310/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4541310/)

---



# Code
```
function countSegments(s: string): number {
    return s.split(' ').flatMap(ch => ch.length ? ch : []).length;
    
};
```