# kotlin code

**Author:** merve_nur
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/2902267/](https://leetcode.com/problems/convert-the-temperature/solutions/2902267/)

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
    fun convertTemperature(celsius: Double): DoubleArray {
        return doubleArrayOf( celsius + 273.15, celsius * 1.80 + 32.00)
    }
}
```