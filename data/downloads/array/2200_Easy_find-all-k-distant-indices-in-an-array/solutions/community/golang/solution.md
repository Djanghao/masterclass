# Clean golang solution | time O(n), space O(1)

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4539087/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4539087/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func findKDistantIndices(nums []int, key int, k int) []int {
    res := make([]int, 0, len(nums))
    prev := -1
    for i, n := range nums {
        if n == key {
            from, to := max(i - k, 0, prev + 1), min(i + k, len(nums) - 1)
            for ;from <= to; from++ {
                res = append(res, from)
                prev = from
            }
        }
    }
    return res
}
```