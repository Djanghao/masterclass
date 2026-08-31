# Kotlin TreeMap | O(n*logn)

**Author:** jeppeman
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312980/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312980/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The idea is to store all numbers in a TreeMap where the key is the number, and the frequency is the value.
1. Loop over the input, for each num:
    i) Find the closest greater value greater than num in the map, this is done in O(logn)
    ii) If found, decrease its value by one, and increase the count

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {
    fun maximizeGreatness(nums: IntArray): Int {
        val map = TreeMap<Int, Int>()
        for (num in nums) map.compute(num) { _, n -> (n?:0) + 1}
        
        var count = 0
        for (num in nums) {
            val entry = map.higherEntry(num)
            if (entry != null && entry.key != num) {
                count++  
                if (entry.value - 1 == 0) map.remove(entry.key)
                else map[entry.key] = entry.value - 1
            }
        }
        
        return count
    }
}
```