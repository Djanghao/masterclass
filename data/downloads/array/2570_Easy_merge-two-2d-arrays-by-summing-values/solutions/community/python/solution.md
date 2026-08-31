# 🔥[Python 3] Using Counters, 2 lines

**Author:** yourick
**Votes:** 7
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3782785/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3782785/)

---

```python3 []
class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        d = Counter(dict(nums1)) + Counter(dict(nums2))
        return [[k, v] for k, v in sorted(d.items())]
```
```python3 []
class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        return [[k, v] for k, v in sorted((Counter(dict(nums1)) + Counter(dict(nums2))).items())]
```