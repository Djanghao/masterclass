# Golang. One loop simple

**Author:** john6604sue
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5702017/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5702017/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```golang []
func numberOfPairs(nums []int) []int {
    var result = []int{0, 0}
    freq := make(map[int]int)
    for _, v := range nums {
        freq[v]++
        result[1]++
        if freq[v] == 2 {
            freq[v] -= 2
            result[1] -= 2
            result[0]++
        }
    }
    return result
}
```