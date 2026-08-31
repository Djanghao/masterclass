# Beats 100%

**Author:** ashuxtosh
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/4402816/](https://leetcode.com/problems/convert-the-temperature/solutions/4402816/)

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
object Solution {
    def convertTemperature(celsius: Double): Array[Double] = {
        return Array(celsius+273.15, (celsius*1.80)+32.00)
        
    }
}
```