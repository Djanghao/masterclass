# kotlin

**Author:** user8645e
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/4834190/](https://leetcode.com/problems/incremental-memory-leak/solutions/4834190/)

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
    fun memLeak(memory1: Int, memory2: Int): IntArray {
        var intArray = intArrayOf(0,0,0)
        var memory1 = memory1
        var memory2 = memory2
        while(true){
            var bits = 1
            while(memory1 >= bits || memory2 >= bits)
            {
                if(memory1 >= memory2) {
                    memory1 -= bits
                }else{
                    memory2 -= bits
                }
                ++bits
            }
            intArray = intArrayOf(bits, memory1, memory2)
            break;
        }
        return intArray
    }
}
```