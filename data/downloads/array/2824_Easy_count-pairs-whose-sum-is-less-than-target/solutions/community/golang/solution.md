# Simple Approach | Two pointer | O(nlog) | Golang

**Author:** danieldt12
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/4035028/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/4035028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countPairs(nums []int, target int) int {
    sort.Ints(nums)

    ans, left, right := 0, 0, len(nums) - 1
    for left < right {
        if nums[right] + nums[left] < target {
            ans += right - left
            left++
        } else {
            right--
        }
    }

    return ans
}

```