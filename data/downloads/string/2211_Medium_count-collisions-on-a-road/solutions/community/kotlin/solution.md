# Kotlin simple O(n)

**Author:** 3AKOH
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/3275623/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/3275623/)

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
class Solution {
    fun countCollisions(dir: String): Int {
        var i = 0
        var j = dir.length - 1

        while (i < dir.length && dir[i] == 'L') i++
        while (j >= 0 && dir[j] == 'R') j--

        var result = 0
        for (k in i..j) {
            if (dir[k] != 'S') result++
        }
        return result
    }
}
```