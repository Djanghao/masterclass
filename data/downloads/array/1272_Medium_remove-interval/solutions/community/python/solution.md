# [python] my simple 4 if conditions

**Author:** focusfocus
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-interval/solutions/440887/](https://leetcode.com/problems/remove-interval/solutions/440887/)

---

my simple yet maybe naive solution. 
for each interval in the `invervals` list, there are just 4 senarios:
* 	interval is outside of the `toBeRemoved` range, append to `res`
* 	interval intersects with the `toBeRemoved` on the frond end,  only append the `[a, toBeRemoved[0]]` portion
* 	interval intersects with the `toBeRemoved` on the back end, only append the `[toBeRemoved[1], b]` portion
* 	inverval could be bigger than `toBeRemoved`, in that case, add both front end and the back end portion of the inverval
* 	inverval is in completely in `toBeRemoved`, do nothing! it is to be removed

then just turn them into 4 if statements.
```python
class Solution:
    def removeInterval(self, intervals: List[List[int]], toBeRemoved: List[int]) -> List[List[int]]:
        res = []
        for a, b in intervals:
            if b <= toBeRemoved[0] or a >= toBeRemoved[1]:  # out of range
                res.append([a, b])
            elif a < toBeRemoved[0] < b <= toBeRemoved[1]:  # intersect in the front
                res.append([a, toBeRemoved[0]])
            elif toBeRemoved[0] <= a < toBeRemoved[1] < b:  # intersect on the back
                res.append([toBeRemoved[1], b])
            elif a < toBeRemoved[0] and b > toBeRemoved[1]:  # interval is bigger than toBeRemoved
                res.append([a, toBeRemoved[0]])
                res.append([toBeRemoved[1], b])
        return res
```