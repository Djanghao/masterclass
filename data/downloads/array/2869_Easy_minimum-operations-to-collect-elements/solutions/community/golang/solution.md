# SOLUTION BEATS 100% OMG!!! LOOK IT!!!

**Author:** krabs0001
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5881188/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5881188/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func minOperations(nums []int, k int) int {
    l := make([]int, 0, k)
    i := len(nums)-1
    for ; len(l) < k; i-- {
        n := nums[i]
        if n <= k {
            exists := false
            for _, el := range l {
                if el == n {
                    exists = true
                    break
                }
            }

            if !exists {
                l = append(l, n)
            }
        }
    }

    return len(nums) - 1- i
}
```