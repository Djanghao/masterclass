# using intersection and union

**Author:** Sajal_
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/5159284/](https://leetcode.com/problems/two-out-of-three/solutions/5159284/)

---

# Code
```
class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        s1 = set(nums1).intersection(set(nums2))
        s2 = set(nums2).intersection(set(nums3))
        s3 = set(nums1).intersection(set(nums3))
        return s1.union(s2).union(s3)
```