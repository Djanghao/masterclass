# 🚀🚀 BEATS 100% | Easy-To-Understand 🔥🔥

**Author:** goderdzishvili
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361963/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361963/)

---


# Code
```
function largestGoodInteger(num: string): string {
  for(let i = 9; i >= 0; i--){
    if(num.includes(`${i}${i}${i}`)){
      return `${i}${i}${i}`;
    }
  }
  return '';

};
```