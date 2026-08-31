# O(n^2) with Go - Brute force

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3013089/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3013089/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Brute force

# Approach
<!-- Describe your approach to solving the problem. -->
Two loops with i and j to check every pair in the arr1 and arr2

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxAbsValExpr(arr1 []int, arr2 []int) int {
    res := -1<<63

    for i := 0; i < len(arr1); i++ {
        for j := i+1; j < len(arr1); j++ {
            res = max(res, abs(i-j) + abs(arr1[i] - arr1[j]) + abs(arr2[i] - arr2[j]))
        }
    }

    return res
}

func abs(a int) int {
    if a >= 0 {
        return a
    }

    return -a
}

func max(a, b int) int {
    if a > b {
        return a
    }

    return b
}
```