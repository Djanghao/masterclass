# Python   ||      6 lines, binary search, w/ example   ||      T/S: 96% / 96%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2743723/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2743723/)

---

```
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], diff: int) -> int:
        
        nums = [n1-n2 for n1, n2 in zip(nums1, nums2)]
                                                        #    Ex: nums1 = [3,-1,5,5]  ; nums2 = [-2,2,7,1] 
        arr, ans = [], 0                                #        nums  = [5, -3, -2, 4]
                                                        #    
        for num in nums:                                #    num     arr           ans
            ans += bisect_right(arr, num + diff)        #    \u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013         \u2013\u2013\u2013
            insort(arr, num)                            #     5   [5]               0
                                                        #    -3   [-3, 5]           0
        return ans                                      #    -2   [-3, -2, 5]       1
                                                        #     4   [-3, -2, 4, 5]    4   <-- answer
```
[https://leetcode.com/problems/number-of-pairs-satisfying-inequality/submissions/1289155165/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/submissions/1289155165/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums1)`
