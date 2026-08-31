# [Python] Simple solution

**Author:** lokeshsk1
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/999230/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/999230/)

---

```
class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda x:x[1],reverse=1)
        s=0
        for i,j in boxTypes:
            i=min(i,truckSize)
            s+=i*j
            truckSize-=i
            if truckSize==0:
                break
        return s
```