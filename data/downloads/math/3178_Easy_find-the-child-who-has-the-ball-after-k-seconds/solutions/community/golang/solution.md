# simple fastest solution w/o loop only mod(%)

**Author:** zkhrg
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5490048/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5490048/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func numberOfChild(n int, k int) int {
    if (k / (n - 1)) % 2 == 1 {
        return (n - 1) - k % (n - 1)
    } 
    return (k) % (n - 1)
}
```