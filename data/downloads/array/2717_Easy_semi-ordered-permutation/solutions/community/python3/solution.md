# Python 3   ||   2 lines,  w/ brief explanation   ||   T/S: 99% /  63%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/3597749/](https://leetcode.com/problems/semi-ordered-permutation/solutions/3597749/)

---

Here's the plan:

- We determine the indices `mn`and`mx`of two numbers being migrated to the ends of the list.
- We count the number of steps required to move each, which are `mn` and `n-mx-1`. 
- We check whether `mn > mx`, in which case the two migrations share a step and we then correct by decrementing the sum by one.

- We return this sum.
```
class Solution:
    def semiOrderedPermutation(self, nums: List[int]) -> int:
        
        mn, mx = nums.index(1) , nums.index(n:= len(nums))     
        return mn - mx + n - 1 - (mn > mx)
```
[https://leetcode.com/problems/semi-ordered-permutation/submissions/1440532226/](https://leetcode.com/problems/semi-ordered-permutation/submissions/1440532226/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~`len(nums)`.