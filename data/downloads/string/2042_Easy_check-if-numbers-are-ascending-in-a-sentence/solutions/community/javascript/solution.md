# 2042. Check if Numbers Are Ascending in a Sentence

**Author:** pgmreddy
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525180/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525180/)

---

---

Weekly Contest 263

- Q1 answer
  - ( below answer )
- Q2 answer
  - https://leetcode.com/problems/simple-bank-system/discuss/1525218/2043.-Simple-Bank-System
- Q3 answer
  - https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/discuss/1525237/2044.-Count-Number-of-Maximum-Bitwise-OR-Subsets

---

Hope it is simple to understand.

---

```
var areNumbersAscending = function (s) {
    let nums = s
        .split(' ')
        .map((x) => +x)                         //     try to convert number, else it will be NaN
        .filter((x) => x);                      //     remove NaN, now only numbers remain

    for (let i = 1; i < nums.length; i++)
        if (nums[i - 1] >= nums[i]) {
            return false;                       //     non ascending - fail
        }

    return true; // good
};
```
