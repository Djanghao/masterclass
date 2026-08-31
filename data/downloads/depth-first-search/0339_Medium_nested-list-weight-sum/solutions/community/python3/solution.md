# Python3, DFS solution

**Author:** ramyh
**Votes:** 11
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/2661126/](https://leetcode.com/problems/nested-list-weight-sum/solutions/2661126/)

---

```
from typing import List
class Solution:
    def depthSum(self, nestedList: List[NestedInteger]) -> int:
        
        # use recursion (dfs)
        def dfs(nested_list, depth): 
            summ = 0 # initialization of the summ
            for element in nested_list:
                # if the element is integer
                if element.isInteger():
                    summ += element.getInteger() * depth # multiply by the depth
                # if the element is List    
                else:
                    summ += dfs(element.getList(), depth+1) # increment the depth by 1        
            return summ
    
        return dfs(nestedList, 1)   # start with depth=1         
        
   
```
