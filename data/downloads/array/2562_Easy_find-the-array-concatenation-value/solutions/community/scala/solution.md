# Scala Solution - Runtime: O(N), Memory: O(1). Beats 100.00%

**Author:** dsb4k8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5363941/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5363941/)

---

# Intuition
Define an inner process that updates an accumulator based on requirements, then return the result.

NOTE: pay attention to the return type when implementing as using `toInt` will cause an overflow in larger test cases... `toLong` is the correct conversion between strings
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
    def findTheArrayConcVal(nums: Array[Int]): Long = {
        def process(nums: Array[Int], res: String): String = {
            if (nums.length > 1) {
                val first = nums.head.toString
                val last = nums.reverse.head.toString
                val concatValue = first.concat(last)
                val result = res.toLong + concatValue.toLong
            
                process(nums.tail.dropRight(1), result.toString)
                } else { 
                    if(nums.isEmpty){res} else((res.toLong + nums.head).toString)
                }
            }
        process(nums, "0").toLong
    }
}
```