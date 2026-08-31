# Sliding Window js and ts.

**Author:** anuchataowkaen
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/6055211/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/6055211/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```javascript []
function longestAlternatingSubarray(nums, threshold) {
    let r = 0
    let res = 0
    for (let l = 0; l < nums.length; l++) {
        if (nums[l] % 2 === 0 && nums[l] <= threshold) {
            r = l + 1
            while (r < nums.length) {
                if (nums[r] > threshold || nums[r] % 2 === nums[r - 1] % 2) break
                r++
            }
            res = Math.max(res, r - l)
        }
    }
    return res
};
```
```typescript []
function longestAlternatingSubarray(nums: number[], threshold: number): number {
    let r = 0
    let res = 0
    for (let l = 0; l < nums.length; l++) {
        if (nums[l] % 2 === 0 && nums[l] <= threshold) {
            r = l + 1
            while (r < nums.length) {
                if (nums[r] > threshold || nums[r] % 2 === nums[r - 1] % 2) break
                r++
            }
            res = Math.max(res, r - l)
        }
    }
    return res
};
```