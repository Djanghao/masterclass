# O(log(n)) Complexity

**Author:** timurvasilev
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/5008943/](https://leetcode.com/problems/smallest-range-i/solutions/5008943/)

---

# Complexity
- Time complexity:
 $$O(log(n))$$

- Space complexity:
O(1)

# Code
```
func smallestRangeI(nums []int, k int) int {
    sort.Ints(nums)

    middle := (nums[0] + nums[len(nums) - 1]) / 2

    min := nums[0] + k
    if (min > middle) {
        min = middle
    }

    max := nums[len(nums) - 1] - k
    if (max < middle) {
        max = middle
    }
    return max - min  
}
```