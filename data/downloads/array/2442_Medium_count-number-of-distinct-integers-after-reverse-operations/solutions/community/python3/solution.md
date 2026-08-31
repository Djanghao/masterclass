# Python  ||   2 lines, sets   ||    T/S: 90% / 13.8%

**Author:** Spaulding_
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2711984/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2711984/)

---

```
class Solution:            
    def countDistinctIntegers(self, nums: List[int]) -> int:
	
        nums= set(nums)
        
        return len(set(int(str(x)[::-1]) for x in nums)|nums)  
```
[https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/submissions/1289394416/]()

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.