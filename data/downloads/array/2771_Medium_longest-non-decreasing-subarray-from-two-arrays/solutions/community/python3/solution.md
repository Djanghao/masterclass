# Python 3   || 5 lines, iteration ||   T/S: 98% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3747375/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3747375/)

---


```
class Solution:
    def maxNonDecreasingLength(self, nums1: List[int],
                                     nums2: List[int]) -> int:        

        ans, s0, s1 = 1,1,1

        for (a1,b1), (a2,b2) in zip(nums1, nums1[1:], 
                               nums2, nums2[1:]):
     
            s0, s1 = (max(s0*(a1 <= b1),  s1*(a2 <= b1))+1, 
                      max(s0*(a1 <= b2),  s1*(a2 <= b2))+1)

            ans = max(ans, s0, s1)

        return ans
```
[https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/submissions/1297165657/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/submissions/1297165657/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums1)`.