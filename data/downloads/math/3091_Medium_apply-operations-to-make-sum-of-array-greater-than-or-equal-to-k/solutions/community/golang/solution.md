# Easy Solution | Beats 100 % | Explanation

**Author:** kmuhammadjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/5057866/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/5057866/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Greedy
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minOperations(k int) int {
    if k == 1{
        return 0
    }
    minNumberOfOperations := math.MaxInt64
    current := 1

    for current <= k / 2{
        // you dont have to use array just one variable and
        // increment it and by deviding you can calculate 
        // how many times you have to append
        current++
        operations := (k / current ) + current 
        if k % current == 0{
            operations--
        }
        if minNumberOfOperations > operations{
            minNumberOfOperations = operations
        }
    }

    
    return minNumberOfOperations - 1
}
```