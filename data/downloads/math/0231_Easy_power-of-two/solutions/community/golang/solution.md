# Solution without loops/recursion

**Author:** CharryLee0426
**Votes:** 9
**Link:** [https://leetcode.com/problems/power-of-two/solutions/4255020/](https://leetcode.com/problems/power-of-two/solutions/4255020/)

---

# Intuition
If we don't use loops/recursion, we have to bit manipulation.

# Approach
We can find that there is only one 1 in the binary format if the number is power of two. Then we can know that $n&(n-1) = 0$ if n is 0 or the power of two.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
func isPowerOfTwo(n int) bool {
    if n == 0 {
        return false
    }
    res := n & (n-1)

    if res == 0 {
        return true
    } else {
        return false
    }
}
```