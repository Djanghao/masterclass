# [Go] Sort + one pass thru array (beats 100% runtime, 100% memory)

**Author:** ekalinin
**Votes:** 2
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4305594/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4305594/)

---

# Intuition
- Sort an array
- Itereate over array count each "step to the next level" (it will be the cost for reducing current element to the lowest one)


# Complexity
- Time complexity: $$O(nlogn)$$
- Space complexity: $$O(1)$$

# Code
```
func reductionOperations(nums []int) int {
    slices.Sort(nums)

    res, steps := 0, 0
    first, prev := nums[0], nums[0]
    for _, n := range nums {
        if n == first {
            continue
        }
        if n != prev {
            steps++
        }
        if steps > 0 {
            res += steps
        }
        prev = n
    }

    return res
}
```