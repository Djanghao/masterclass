# Check this clean solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/3124662/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/3124662/)

---


```
class Solution {
    fun averageValue(nums: IntArray): Int {
        return nums.filter { num -> num % 6 == 0 }.average().toInt()
    }
}
```