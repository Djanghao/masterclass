# Very simple, easy to understand Kotlin solution.

**Author:** AdamGold
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/3999769/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/3999769/)

---

Idea is to add all numbers to a set, so that when you loop through nums you can check whether or not the neighbors are in the set. To avoid counting the same chain of consecutive numbers more than once, remove those neighbor numbers from the hash set. This ensures that you only ever access each element once in th second loop.

complexity requires two for loops. One or the hash set, and the other to count the consecutive chains. O(2n) = O(n)

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n) needed for hash set
# Code
```
class Solution {
    fun longestConsecutive(nums: IntArray): Int {
        val map = nums.toHashSet()

        var max = 0
        for (num in nums) {
            if (!map.contains(num)) {
                continue
            }

            var left = num
            var right = num

            while (map.contains(--left)) {
                map.remove(left)
            }
            while(map.contains(++right)) {
                map.remove(right)
            }
            
            var count = right-left-1;
            if (count > max) {
                max = count
            }
        }
        return max
    }
}
```