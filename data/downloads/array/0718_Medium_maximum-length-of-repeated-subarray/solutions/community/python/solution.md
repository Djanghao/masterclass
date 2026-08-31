# [Python3] Runtime: 178 ms, faster than 99.92% | Memory: 13.8 MB, less than 99.81%

**Author:** anubhabishere
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/2599253/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/2599253/)

---

```
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        strnum2 = ''.join([chr(x) for x in nums2])
        strmax = ''
        ans = 0
        for num in nums1:
            strmax += chr(num)
            if strmax in strnum2:
                ans = max(ans,len(strmax))
            else:
                strmax = strmax[1:]
        return ans
```