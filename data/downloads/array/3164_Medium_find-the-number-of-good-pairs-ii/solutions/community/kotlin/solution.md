# Kotlin- You should update the return type of the question from Int to Long

**Author:** anhtrungcuccua1
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5210152/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5210152/)

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
     fun numberOfPairs(nums1: IntArray, nums2: IntArray, k: Int): Long {
            var result = 0L
            val map = mutableMapOf<Int, Int>()
            nums2.forEach {
                val key = it * k
                map[key] = (map[key] ?: 0) + 1
            }

            nums1.forEach {
                val max = sqrt(it.toDouble()).toInt()
                for (i in 1 .. max){
                    if (it % i == 0){
                        result += map[i] ?: 0

                        val biggerOne = it/i
                        if (biggerOne != i) result += map[biggerOne] ?: 0
                    }
                }
            }

            return result
        }
}
```