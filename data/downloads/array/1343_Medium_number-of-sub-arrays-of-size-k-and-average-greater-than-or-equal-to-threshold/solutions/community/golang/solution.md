# Go beats 100% of solutions

**Author:** bulwark_zero
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5973661/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5973661/)

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
func numOfSubarrays(arr []int, k int, threshold int) int {
    subArrays := 0

    sum := 0
    for i, num := range arr {
        sum += num

        if i < k - 1{
            continue
        }

        if sum / k >= threshold {
            subArrays++
        }

        sum -= arr[i+1-k]
    }

    return subArrays
}
```