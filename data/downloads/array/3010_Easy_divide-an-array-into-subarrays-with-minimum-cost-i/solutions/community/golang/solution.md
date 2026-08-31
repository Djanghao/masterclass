# Clean golang solution

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4641756/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4641756/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumCost(nums []int) int {
    m1, m2 := math.MaxInt, math.MaxInt
    for i := 1; i < len(nums); i++ {
        if nums[i] < m1 {
            m1, m2 = nums[i], m1
        } else if nums[i] < m2 {
            m2 = nums[i]
        }
    }
    return nums[0] + m1 + m2
}
```