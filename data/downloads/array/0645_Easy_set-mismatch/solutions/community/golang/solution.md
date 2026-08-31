# one loop, no xtra space || beats 96% on both time/space || daily challenge

**Author:** adjoint
**Votes:** 3
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/2735652/](https://leetcode.com/problems/set-mismatch/solutions/2735652/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
func findErrorNums(nums []int) []int {
    var sum, dup int
    n:= len(nums)

    // compute the sum and find the duplicate
    // note that the elements of nums are +ve
    foundDuplicate := false
    for _, x := range nums {
        x1 := abs(x)
        sum += x1
        if !foundDuplicate {
            if nums[x1-1] < 0 {
                dup = x1
                foundDuplicate = true
            } else {
                nums[x1-1] = -nums[x1-1]
            }
        }
    }

    // assemble dup and missing
    sumExpected, sumUniq := n*(n+1)/2, sum - dup
    return []int{dup, sumExpected - sumUniq}
}

// Runtime 24 ms Beats 96.30%
// Memory 6.5 MB Beats 96.30%
```