# Checking distinct positive integers with map in Kotlin

**Author:** behzodhalil
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/4611423/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/4611423/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun intersection(nums: Array<IntArray>): List<Int> {
        val bucket = nums.flatMap { it.toList() }.groupingBy { it }.eachCount()
        val answer = mutableListOf<Int>()
        
        for(key in bucket.keys) {
            if(bucket[key] == nums.size) {
                answer.add(key)
            }
        }

        return answer.sorted()
    }
}
```