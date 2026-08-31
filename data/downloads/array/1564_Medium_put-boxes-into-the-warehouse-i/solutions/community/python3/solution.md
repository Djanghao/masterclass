# [Python3] greedy

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1070539/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1070539/)

---

**Algo**
Loop through `boxes` from the largest one to smallest one. If the current box fit in the current room, update counter. 

**Implementation**
```
class Solution:
    def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
        k = 0
        for box in sorted(boxes, reverse=True): 
            if k < len(warehouse) and box <= warehouse[k]: 
                k += 1
        return k
```

**Analysis**
Time complexity `O(MlogM + N)`
Space complexity `O(M)`

[1564. Put Boxes Into the Warehouse I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/discuss/1070539/Python3-greedy)
[1580. Put Boxes Into the Warehouse II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/discuss/1069002/Python3-greedy)