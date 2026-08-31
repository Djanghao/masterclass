# Python 3  || 4 lines,  filter and pairs   ||   T/S: 98% / 89%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/1995032/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/1995032/)

---

Here's the plan:
1. We determine the `nDiv3 = sum(nums) %3`. If `nDiv3` is 0, we are done.

2. All terms 0 mod 3 can be ignored. The remaining terms are either 1 mod 3 and 2 mod 3, so the task reduces to finding the least sum of two terms in `terms` that is equal to nDiv3 %3. We are guaranteed that this sum occurs in the four least-valued elements of `nums` + `[0]`.
3. We use `filter` to determine such pairs, from these pairs we determine the pair with the least sum, and we return the sum of `nums` less this sum.



```
class Solution:
    def maxSumDivThree(self, nums: list[int]) -> int:
                    
        n = sum(nums)                                               # <-- 1)
        nDiv3 = n%3
        if nDiv3 == 0: return n
        
        terms = [0]+ sorted(filter(lambda x:x%3 != 0, nums))[:4]    # <-- 2)

        return n - min(map(sum,filter                               # <-- 3)
            (lambda x: (x[0]+x[1])%3 == nDiv3, combinations(terms,2))))
```
[https://leetcode.com/problems/greatest-sum-divisible-by-three/submissions/1276520166/](https://leetcode.com/problems/greatest-sum-divisible-by-three/submissions/1276520166/)


I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.