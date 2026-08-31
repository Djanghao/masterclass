# GoLang | Simple One Pass

**Author:** 1nnOcent
**Votes:** 5
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/3152283/](https://leetcode.com/problems/shuffle-the-array/solutions/3152283/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(N)$$

# Code
```
func shuffle(nums []int, n int) []int {
    res := []int{}

    for i := 0; i < n; i++ {
        res = append(res, nums[i], nums[i + n])
    }

    return res
}   
```