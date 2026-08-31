# [algorithm-study] Kotlin

**Author:** jisan-oh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/4789780/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/4789780/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Solved with hint

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)...?

# Code
```
// class Solution {
//     fun beautifulSubarrays(nums: IntArray): Long {
//         val binaryNums = nums.map(::toBinary)
//         var count = 0L
//         for (size in 1..nums.size) {
//             val maxStart = nums.size - size
//             for (start in 0..maxStart) {
//                 if (isBeautifulArray(binaryNums, start, start + size - 1)) {
//                     count += 1
//                 }
//             }
//         }

//         return count
//     }

//     fun toBinary(num: Int): String {
//         return num.toString(radix = 2).reversed()
//     }

//     fun isBeautifulArray(nums: List<String>, start: Int, end: Int): Boolean {
//         val map = mutableMapOf<Int, Int>()
//         for (numIndex in start..end) {
//             for ((i, n) in nums[numIndex].withIndex()) {
//                 if (n == '1') map[i] = (map[i] ?: 0) + 1
//             }
//         }
//         return map.values.all { it % 2 == 0 }
//     }
// }

class Solution {
    fun beautifulSubarrays(nums: IntArray): Long {
        var xors = mutableMapOf(0 to 1)
        var prefix = 0
        var count = 0L
        for (num in nums) {
            prefix = prefix xor num
            count += xors[prefix] ?: 0
            xors[prefix] = (xors[prefix] ?: 0) + 1
        }
        return count
    }
}


```