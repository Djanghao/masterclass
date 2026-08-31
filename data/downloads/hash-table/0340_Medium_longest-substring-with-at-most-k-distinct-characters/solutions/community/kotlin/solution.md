# Sliding Window easy solution

**Author:** user0122E
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/5170579/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/5170579/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding Window

# Complexity
- Time complexity: $$O(2n) == O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(26)$$ (assume chars are lowercase letters)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    // Space: O(26)
    // Time: O(2N) = O(N)
    fun lengthOfLongestSubstringKDistinct(s: String, target: Int): Int {
        // Sliding Window + Map
        val map = mutableMapOf<Char, Int>()
        var right = 0
        var left = 0
        var result = 0

        while(right <= s.lastIndex) {
            map[s[right]] = map.getOrDefault(s[right], 0) + 1

            if(map.size <= target) {
                result = max(result, right - left + 1)
            } else {
                // shrink
                while(map.size > target) {
                    if(map.getValue(s[left]) > 1) map[s[left]] = map.getValue(s[left]) - 1
                    else map.remove(s[left])
                    left++
                }
            }
            // expand
            right++
        }
        
        return result
    }
}
```