# Total number without good ones

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4313198/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4313198/)

---

# Intuition
First, we count the total number of pairs in the array, and then enter into the MAP the number of elements with the same difference between element and index (these are just good pairs). At the end, we subtract the number of good pairs from the total number.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun countBadPairs(nums: IntArray): Long {
        val len = nums.size
        var rez : Long = 1L*len*(len-1)/2
        val map: HashMap<Int, Int> = HashMap()
        for (i in 0 until len) {
            val razn = i - nums[i]
            map[razn] = map.getOrDefault(razn, 0) + 1
        }
        // println("map=$map")
        for((key, value) in map) {
            if (value>1) {
                val norm:Long = 1L * value * (value-1) / 2
                rez = rez - norm
            }
        }
        return rez
    }
}
```