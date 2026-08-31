# Kotlin solution

**Author:** shohruh_genius
**Votes:** 1
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4486113/](https://leetcode.com/problems/assign-cookies/solutions/4486113/)

---

# Complexity
- Time complexity: $$O(nlog(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(log(n))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun findContentChildren(g: IntArray, s: IntArray): Int {
        g.sort()
        s.sort()
        var (i, j) = 0 to 0
        while (i < g.size && j < s.size) {
            if (g[i] <= s[j]) i++
            j++
        }
        return i
    }
}
```