# scala

**Author:** jordan_lee
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/3879550/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/3879550/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countHillValley(nums: Array[Int]): Int = {
        var isHill: Option[Boolean] = None
        (1 until nums.length).map { i => 
            val prev = nums(i-1)
            val curr = nums(i)
            if(prev != curr) {
                if (prev > curr) {
                    val result = isHill match {
                        case Some(true) => 1
                        case _ => 0
                    }
                    isHill = Some(false)
                    result
                } else {
                    val result = isHill match {
                        case Some(false) => 1
                        case _ => 0
                    }
                    isHill = Some(true)
                    result
                }
            } else 0
        }.sum
    }
}
```