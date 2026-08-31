# Python 3 || 4 lines, filter nums1 and count  || T/S:  98% / 61%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5209053/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5209053/)

---

```
class Solution:
    def numberOfPairs(self, nums1: List[int], 
                            nums2: List[int], k: int, ans = 0) -> int:

        nums1 = list(map(lambda x: x//k, filter(lambda x: x%k == 0, nums1)))
        
        for n1, n2 in product(nums1, nums2):
            
            if n1%n2 == 0: ans+= 1

        return ans
```
[https://leetcode.com/problems/find-the-number-of-good-pairs-i/submissions/1268155427/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/submissions/1268155427/)

I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(1), in which *M* ~ `len(nums1)` and *N* ~ `len(nums2)`.