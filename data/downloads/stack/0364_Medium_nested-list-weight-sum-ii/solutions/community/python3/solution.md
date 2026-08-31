# [Python] The simplest, clearest 10 line code

**Author:** LambertT
**Votes:** 8
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/1647358/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/1647358/)

---

```
class Solution:
    def depthSumInverse(self, nestedList: List[NestedInteger]) -> int:
        total, cur_total = 0, 0
        queue = deque(nestedList)
        
        while queue:
            for _ in range(len(queue)):
                ele = queue.popleft()
                if ele.isInteger():
                    cur_total += ele.getInteger() # we dont clear current total, so every round previous depth total would be accumulated again and again.
                else:
                    queue.extend(ele.getList())      
            total += cur_total
                
        return total
```