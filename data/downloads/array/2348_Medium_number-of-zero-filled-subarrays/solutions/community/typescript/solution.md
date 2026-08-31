# One liner Javascript solution

**Author:** bemad123
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3323178/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3323178/)

---


# One Liner:
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = ((nums, counter = 0) =>
    nums.reduce((p, num) =>
        p + (counter = num === 0 ? counter + 1 : 0), 0)
)
```

Please upvote if helpful!