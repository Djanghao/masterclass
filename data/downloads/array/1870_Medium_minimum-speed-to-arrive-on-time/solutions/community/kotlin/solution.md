# Kotlin solution

**Author:** shohruh_genius
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3817831/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3817831/)

---

# Complexity
- Time complexity: $$O(n*log(maxAnswer))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minSpeedOnTime(dist: IntArray, hour: Double): Int {
        var (l, r) = 1 to 10_000_000
        while (l <= r) {
            val m = (l + r) / 2
            var h = 0.0
            dist.forEachIndexed { i, v ->
                if (i != dist.size - 1) h += (v + m - 1) / m
                else h += v / m.toDouble()
            }
            if (h > hour) l = m + 1
            else if (h < hour) r = m - 1
            else return m
        }
        return if (l <= 10_000_000) l else -1
    }
}
```