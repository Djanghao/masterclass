# 📌 Python3 simple solution using two pointers

**Author:** suniljs6
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2209743/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/2209743/)

---

```
class Solution:
    def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
        length1, length2 = len(nums1), len(nums2)
        i,j = 0,0
        
        result = 0
        while i < length1 and j < length2:
            if nums1[i] > nums2[j]:
                i+=1
            else:
                result = max(result,j-i)
                j+=1
            
        return result
```