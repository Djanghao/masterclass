# Do it backwards O(N)

**Author:** user9591
**Votes:** 44
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2454397/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2454397/)

---

For nums = [1,2,5,6,1], removeQueries = [0,3,2,4,1], the reverse process will be 
add 1 : [0, 2, 0 ,0 ,0]
add 4 : [0, 2, 0 ,0 ,1]
add 2 : [0, 2, 5 ,0 ,1]
add 3 : [0, 2, 5, 6, 1]
add 0 : [1, 2, 5, 6, 1]

When an index q is added, extend the contiguous sequence by finding if q+1 or q-1 exists, and also record the value of the maximum segment sum. For example, before adding the 3rd element, there are two contiguous sequences, [2, 5] and [1], and we can extend it to a length 4 sequence after the 3rd element is added.
```
class Solution:
    def maximumSegmentSum(self, nums: List[int], removeQueries: List[int]) -> List[int]:
        mp, cur, res = {}, 0, []
        for q in reversed(removeQueries[1:]):
            mp[q] = (nums[q], 1)
            rv, rLen = mp.get(q+1, (0, 0))
            lv, lLen = mp.get(q-1, (0, 0))
                
            total = nums[q] + rv + lv
            mp[q+rLen] = (total, lLen + rLen + 1)
            mp[q-lLen] = (total, lLen + rLen + 1)
        
            cur = max(cur, total)
            res.append(cur)
            
        return res[::-1] + [0]
```