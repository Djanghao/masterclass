# Python 3 || 6 lines, two pointers || T/S: 58% / 98%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4417892/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4417892/)

---

```
class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        
        nums.sort()
        pal = lambda x: str(x) == str(x)[::-1]
        left = rght = nums[len(nums)//2]

        while not pal(left): left-= 1
        while not pal(rght): rght+= 1

        return min(sum(map(lambda x: abs(x - left), nums)),
                   sum(map(lambda x: abs(x - rght), nums)))
```
[https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/submissions/1295778192/
](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/submissions/1295778192/)


I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.