# Beats 100% users... Dominate others with this code..

**Author:** Success_Code
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5213556/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5213556/)

---


# Code
```
'''class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
'''  
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        c = 0
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                if nums1[i] % (nums2[j] * k) == 0:
                    c += 1
        return c
```