# [Python3] nums[i]-i + TreeSet

**Author:** dinusX
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4250713/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4250713/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sort elements by `nums[i]-i` and add them to a TreeSet one at a time.
When updating this tree, we are also updating max possible sequence sum for this number, which would max of 3 elements (this_num, prev_num+this_num, prev_num).


# Complexity
- Time complexity:
$$O(n*log(n))$$


- Space complexity:
$$O(n)$$

# Code
```
from sortedcontainers import SortedSet

class Solution:
    def maxBalancedSubsequenceSum(self, nums: List[int]) -> int:
        
        treeSet = SortedSet()
        # map: nums[i]-i -> max_total
        valMap = {}
        res = -inf
        
        for i, num in enumerate(nums):
            x = num-i
        
            total = num
            pos = treeSet.bisect_right(x)-1
            if pos >= 0:
                val2 = valMap[treeSet[pos]]
                
                total = max(num, num + val2, val2)

            # remove anything on the right side of the element in the tree that has a lower max_total value. 
            while pos+1 < len(treeSet) and valMap[treeSet[pos+1]] < total:
                del treeSet[pos+1]
                
            treeSet.add(x)
            valMap[x] = max(total, valMap.get(x, -inf))
            res = max(res, total)

        return res
                
            
```