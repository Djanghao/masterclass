# Golang Solution

**Author:** seitk
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3282092/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3282092/)

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
```
func evenProduct(nums []int) int64 {
  var output, j int64 = 0, -1
    for i, v := range nums {
      // iterate through the nums array
      if v % 2 == 0 {
        // if a number is even, the previous indexes with the product of i will be even too
        // Summing up the possibility with the i itself (so +1)
        output += (int64(i) + 1)

        // Storing the last even so we know indexes to be skipped in between
        j = int64(i)
      } else {
        // If the last even exists, summing up possibility within the odds in between
        // o o e o o X
        // 1 1 1 - - 1
        if j >= 0 {
          output += (j + 1)
        }
      }
    }
    return output
}
```