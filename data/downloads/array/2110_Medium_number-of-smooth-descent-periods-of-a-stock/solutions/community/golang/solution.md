# Go O(n)

**Author:** DurkaVerder
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/5570996/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/5570996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
func getDescentPeriods(prices []int) int64 {
    r := 0
    length := 1
    count := 0
    for r < len(prices) - 1{
        if prices[r] - prices[r + 1] == 1{
            length++
        }   else {
            count += length * (length + 1) /2
            length = 1
        }
        r++
    }
    
    if length > 1 {
        count += length * (length + 1) /2
        return int64(count)
    }
    return int64(count + 1)
}
```