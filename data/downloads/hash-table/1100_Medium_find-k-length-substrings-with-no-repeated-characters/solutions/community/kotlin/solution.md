# [Kotlin] Sliding window with comments (beats 100%)

**Author:** akshayLeetCode
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/3497905/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/3497905/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(k)

# Code
```
class Solution {
    fun numKLenSubstrNoRepeats(s: String, k: Int): Int {
        // If k is greater than length of the string
        if (k > s.length)
            return 0
        
        var total = 0
        // Map to keep count of unique charaters in sequence along with position in string
        // At miximum, size of this map will be equal to  k
        val map = HashMap<Char, Int>()
        
        for (i in 0..s.length - 1) {
            // If we got a character which is already present in map,
            // remove it along with charaters at indices before the index of matching character
            if (map.contains(s[i])) {
                var oldIndex = map[s[i]]!!
                val until = i - map.size
                while (oldIndex >= until) {
                    map.remove(s[oldIndex])
                    oldIndex--
                }
            }
            
            map[s[i]] = i

            // If current size of map is equal to k, add  1 to total
            if (map.size == k) {
                total += 1
                map.remove(s[i-k+1])
            }
        }

        return total
    }
}
```