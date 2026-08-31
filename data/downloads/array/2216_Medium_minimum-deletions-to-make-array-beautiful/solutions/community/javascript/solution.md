# [JavaScript] 2216. Minimum Deletions to Make Array Beautiful

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1890258/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1890258/)

---

---

- Implementation, after we write, is easy

---

**Weekly Contest 286**
- **Q1** answer - https://leetcode.com/problems/find-the-difference-of-two-arrays/discuss/1889224/JavaScript-2215.-Find-the-Difference-of-Two-Arrays
- **Q2** answer - https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/discuss/1890258/JavaScript-2216.-Minimum-Deletions-to-Make-Array-Beautiful
  - **below**
- **Q3** answer - https://leetcode.com/problems/find-palindrome-with-fixed-length/discuss/1892167/JavaScript-2217.-Find-Palindrome-With-Fixed-Length

---

Hope it is simple to understand.

---

```
var minDeletion = function (nums) {
    const n = nums.length;

    let deletes = 0;
    for (let i = 0; i < n - 1; i++) {
        let j = i - deletes; // new i
        if (
            j % 2 === 0 && //
            nums[i] === nums[i + 1]
        ) {
            deletes++;
        }
    }

    // nums.length must be is even, if odd delete 1 more
    return deletes + ((n - deletes) % 2);
};
```

---
