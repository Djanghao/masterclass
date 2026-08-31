# Kotlin, HashMap, O(N)

**Author:** firemaples
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3392773/](https://leetcode.com/problems/find-anagram-mappings/solutions/3392773/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun anagramMappings(nums1: IntArray, nums2: IntArray): IntArray {
        val map = mutableMapOf<Int, Int>()
        for (i in 0 until nums2.size) {
            map[nums2[i]] = i
        }
        val result = IntArray(nums1.size)
        for (i in 0 until nums1.size) {
            result[i] = map[nums1[i]]!!
        }

        return result
    }
}
```