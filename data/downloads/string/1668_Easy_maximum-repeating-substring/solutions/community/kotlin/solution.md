# simple solution

**Author:** ITPavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/5169148/](https://leetcode.com/problems/maximum-repeating-substring/solutions/5169148/)

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
    fun maxRepeating(sequence: String, word: String): Int {
    var count: Int = 0
    while (sequence.contains(word.repeat(count + 1))) count++
    return count
    }
}
```