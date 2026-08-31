# Simple O(n) solution

**Author:** justherefortesting
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/4950181/](https://leetcode.com/problems/super-washing-machines/solutions/4950181/)

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
    fun findMinMoves(machines: IntArray): Int {
        var sum = 0
        for(n in machines) {
            sum += n
        }        
        
        var len = machines.size
        if (sum % len > 0) 
            return -1

        var avg = sum / len
        var ret = 0

        var tmp = 0
        for(n in machines) {
            var diff = n - avg
            tmp += diff
            ret = maxOf(ret, abs(tmp))
            ret = maxOf(ret, diff)
        }
        return ret        
    }
}
```