# [scala] Sliding window solution

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/6022991/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/6022991/)

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
```scala []
object Solution {
    def characterReplacement(s: String, k: Int): Int = {
        val length = s.size - 1

        def valid(start: Int, end: Int): Boolean = {
            val newStr = s.substring(start, end+1)
            val newList = newStr.groupBy(identity).view.mapValues(_.size).toList.map(_._2).sorted
            val maxIt = newList.head
            val rest = newList.init.sum
            if(rest <= k) true
            else false
        }

        def helper(start: Int, end: Int, maxLen: Int): Int = {
            if(end > length) maxLen
            else if(valid(start,end)) helper(start, end+1, math.max(end-start+1, maxLen))
            else helper(start+1, end+1, maxLen)
        }

        helper(0,0,0)
    }
}
```