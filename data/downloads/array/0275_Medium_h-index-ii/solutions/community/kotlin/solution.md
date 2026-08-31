# easy way to kotlin

**Author:** plstyxs
**Votes:** 1
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/3504416/](https://leetcode.com/problems/h-index-ii/solutions/3504416/)

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
    fun hIndex(citations: IntArray): Int {
        var hIndex = citations.size
        
        citations.forEachIndexed { index, i -> 
            if(i >= hIndex - index){
                return hIndex - index
            }
        }
        return 0
    }
}
```