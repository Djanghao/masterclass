# Kotlin better

**Author:** uvc
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/4980195/](https://leetcode.com/problems/closest-divisors/solutions/4980195/)

---

# Intuition
Similar to [https://leetcode.com/problems/closest-divisors/solutions/4980183/kotlin-solution] except instead of adding to an array, we just store the pair with the lowest absolute difference. This performs faster, especially because of early stopping implemented which will instantly stop when a square number is found.

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
    fun closestDivisors(num: Int): IntArray {
        val sqrts : List<Pair<Int, Int>> = listOf(num+1 to sqrt((num+1).toDouble()).toInt(), num+2 to sqrt((num+2).toDouble()).toInt())
        var divisors : IntArray = intArrayOf()
        var minFound = 1000000000
        for(sqrt in sqrts){
            val f = sqrt.first
            val s = sqrt.second
            for(i in 1..s){
                if(f % i == 0 && f/i - i < minFound) {divisors = intArrayOf(i, f/i); minFound = f/i - i; if (minFound == 0) {println("Early stop"); return divisors}}
            }
        }
        return divisors
    }
}
```