# Concise Go solution

**Author:** Vladius25
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3515286/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3515286/)

---

# Intuition
Sliding window with at most one zero.

# Complexity
- Time complexity:
$$O(n)$$ - one-pass.

- Space complexity:
$$O(1)$$.

# Code
```
func longestSubarray(nums []int) int {
    l, r := 0, 0
    zeroes := 0
    for ; r < len(nums); r++ {
        zeroes += (1 - nums[r])
        if zeroes > 1 {
            zeroes -= (1 - nums[l])
            l++
        } 
    } 
    return r - l - 1
}
```