# [Python3] greedy

**Author:** ye15
**Votes:** 17
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/1069002/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/1069002/)

---

**Algo**
First, compute the actual height that a room in warehouse can provide. Then, check the rooms from lowest to highest to accommodate a box as small as possible. 

**Implementation**
```
class Solution:
    def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
        ans = lo = 0
        hi = len(warehouse)-1
        for box in sorted(boxes, reverse=True): 
            if lo <= hi: 
                if box <= warehouse[lo]: 
                    lo += 1
                    ans += 1
                elif box <= warehouse[hi]: 
                    hi -= 1
                    ans += 1
        return ans
```

**Analysis**
Time complexity `O(MlogM + N)`
Space complexity `O(M)`

[1564. Put Boxes Into the Warehouse I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/discuss/1070539/Python3-greedy)
[1580. Put Boxes Into the Warehouse II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/discuss/1069002/Python3-greedy)

My original solution is longer than necessary. 
```
class Solution:
    def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
        ht = [0]*len(warehouse) # accessible height 
        prefix = suffix = inf 
        for i in range(len(warehouse)):
            ht[i] = max(ht[i], prefix := min(prefix, warehouse[i]))
            ht[~i] = max(ht[~i], suffix := min(suffix, warehouse[~i]))
        
        ans = i = 0 
        boxes.sort()
        for h in sorted(ht): 
            if i < len(boxes) and boxes[i] <= h: 
                ans += 1
                i += 1
        return ans 
```