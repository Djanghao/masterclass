# [Python] simple 1 line

**Author:** f1re
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1887064/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1887064/)

---

```
def findDifference(self, a: List[int], b: List[int]) -> List[List[int]]:
        return [set(a)-set(b), set(b)-set(a)]
```