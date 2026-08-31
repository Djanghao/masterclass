# [Python3] 1-liners

**Author:** cenkay
**Votes:** 21
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/397596/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/397596/)

---

```
class Solution:
    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        return sorted(set(arr1) & set(arr2) & set(arr3))
```
```
class Solution:
    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        return [k for k, v in collections.Counter(arr1 + arr2 + arr3).items() if v == 3]
```