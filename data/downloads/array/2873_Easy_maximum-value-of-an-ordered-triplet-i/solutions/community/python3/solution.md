# Python 3   ||   3 lines,  pref and suff   ||   T/S: 99% /  21%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4115426/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4115426/)

---

Yup, same as LC2874.
```
class Solution:
    def maximumTripletValue(self, nums: List[int], mx = 0) -> int:

        pref = accumulate(nums, max)
        suff = list(accumulate(nums[::-1], max))[::-1]

        return max(0,*((J-I) * K for I, J, K 
                                  in zip(nums[1:],pref,suff[2:])))
```
[https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/submissions/1064194952/](http://)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.