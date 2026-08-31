# Optimal solution without sliding window

**Author:** kazinov
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3558123/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3558123/)

---

# Complexity
- Time complexity:
O(n) time

- Space complexity:
O(1) space

# Code
```
// O(n) time
// O(1) space
function longestSubarray(nums: number[]): number {
    let maxLength = 0;
    let count = 0;
    let onesBefore = 0;
    for(const num of nums) {
        if(num) {
            count++;
            maxLength = Math.max(maxLength, count + onesBefore);
        } else {
            onesBefore = count;
            count = 0;
        }
    }
    return Math.min(maxLength, nums.length - 1);
};
```