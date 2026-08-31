# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 4
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3385343/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3385343/)

---

# Code
```
class Solution:
    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:
        small1, small2, common = min(nums1), min(nums2), set(nums1) & set(nums2)
        output1, output2 = int(f"{small1}{small2}"), int(f"{small2}{small1}")
        if common:
            common = min(common)
            if common < output1 and common < output2:
                return common
        if small1 < small2:
            return output1
        return output2
        
```