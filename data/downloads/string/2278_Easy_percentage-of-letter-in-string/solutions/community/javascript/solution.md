# JS Solution || Fast & Simple || Understandable

**Author:** PoeticIvy302543
**Votes:** 7
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2065067/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2065067/)

---

**Runtime: 67 ms, faster than 85.98% of JavaScript online submissions for Percentage of Letter in String.
Memory Usage: 42.2 MB, less than 40.15% of JavaScript online submissions for Percentage of Letter in String.**

```
var percentageLetter = function(s, letter) {
    let count = 0;
    for (let i of s) { // count how many letters are in s
        if (i == letter) count++;
    }
    return (Math.floor((count*1.0) / (s.length*1.0) * 100)) // get percentage
};
```