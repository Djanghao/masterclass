# easy sol scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-partition/solutions/6043606/](https://leetcode.com/problems/array-partition/solutions/6043606/)

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
```scala []
object Solution {
    def arrayPairSum(nums: Array[Int]): Int = {
        val ss = nums.sorted.sliding(2, 2).toList.map(v => v.toList)
        println(ss)
        var sum = 0
        for(v <- 0 until ss.size){
            val a = ss(v)(0)
            val b = ss(v)(1)
            sum = sum + Math.min(a,b)

        }
        return sum
    }
}
```