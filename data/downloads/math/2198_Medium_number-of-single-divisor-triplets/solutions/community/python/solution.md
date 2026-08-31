# Python3   |||   13 lines,  Counter || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/2634696/](https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/2634696/)

---

```
class Solution:
    def singleDivisorTriplet(self, nums: List[int]) -> int:

        isTriplet = lambda x,y,z: sum((bool((y+z)%x),
                                       bool((x+z)%y),
                                       bool((x+y)%z))) == 2 
        ans, ctr = 0, Counter(nums)
        keys = list(ctr)               
        
        for i, n1 in enumerate(keys):
            for j, n2 in enumerate(keys[i:]):
                for n3 in keys[i+j:]:
                    if isTriplet(n1,n2,n3):

                        if n1 == n2:
                            ans += ctr[n3]*ctr[n1]*(ctr[n1]-1)//2

                        elif n2 == n3:
                            ans += ctr[n1]*ctr[n2]*(ctr[n2]-1)//2

                        else: ans += ctr[n1]*ctr[n2]*ctr[n3]
                                                        
        return 6 * ans
```
[https://leetcode.com/problems/number-of-single-divisor-triplets/submissions/1280686389/](https://leetcode.com/problems/number-of-single-divisor-triplets/submissions/1280686389/)

I could be wrong, but I think that time complexity is *O*(*N* ^2) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.