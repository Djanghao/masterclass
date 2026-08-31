# Python O(n) by linear scan. [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 11
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/637217/](https://leetcode.com/problems/consecutive-characters/solutions/637217/)

---

Python O(n) by linear scan.

---

```
class Solution:
    def maxPower(self, s: str) -> int:
        
        # the minimum value for consecutive is 1
        local_max, global_max = 1, 1
        
        # dummy char for initialization
        prev = '#'
        for char in s:
            
            if char == prev:
                
                # keeps consecutive, update local max
                local_max += 1
                
                # update global max length with latest one
                global_max = max( global_max, local_max )
                
            else:
                
                # lastest consective chars stops, reset local max
                local_max = 1
            
                # update previous char as current char for next iteration
                prev = char
        
        
        return global_max
```