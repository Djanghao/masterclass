# Go 0ms 2024 100% simple

**Author:** ducquoc
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6060677/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6060677/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->copy from a friend

# Approach
<!-- Describe your approach to solving the problem. --> [https://leetcode.com/submissions/detail/1456856784/](https://leetcode.com/submissions/detail/1456856784/)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1)

# Code
```golang []
func countValidSelections(nums []int) int {
    n, rs, sum := len(nums), 0, 0
    ps, ss := make([]int, n), make([]int, n)
    for i := 0; i < n; i++ {
        ps[i] = sum
        sum += nums[i]
    }
    sum = 0
    for i := n-1; i >= 0; i-- {
        ss[i] = sum
        sum += nums[i]
    }
    for i, num := range nums {
        if num != 0 { continue }
        if ps[i] == ss[i] { rs += 2 } else 
        if ps[i] - ss[i] == 1 || ps[i] - ss[i] == -1 { rs += 1 }
    }
    return rs
}
```