# Simple Golang solution

**Author:** mefs
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/4965944/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/4965944/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check every bit, if bit is 1 and continuous, merge and carry out.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Merge continuous bits into 1 bit
2. Count all the separate bit
3. Note that merged bit should carry to next position.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
func minOperations(n int) int {
    count := 0
    res := 0
    for n > 0 {
        if n & 1 != 0 {
            count++
        } else if count == 1 {
            res++
            count = 0
        } else if count > 1 {
            count = 1
            res++
        }
        n >>= 1
    }
    if count == 1 {
        res++
    } else if count > 1 {
        res += 2
    }
    return res
}
```