# Easy | O(N) solution | Hashing

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/6034353/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/6034353/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun arraysIntersection(arr1: IntArray, arr2: IntArray, arr3: IntArray): List<Int> {
        var ans = arrayListOf<Int>()
        val res = mutableSetOf<Int>()
        val hm = mutableSetOf<Int>()
        arr1.forEach{
            hm.add(it)
        }
        arr2.forEach{
            if(hm.contains(it)) {
                res.add(it)
            }
        }
        arr3.forEach{
            if(res.contains(it)) {
                ans.add(it)
            }
        }
        return ans.toList()
        
    }
}
```