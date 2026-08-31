# Python 3   ||   7 lines,  bisect_left, w/ explanation   ||   T/S: 81% / 97%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4061435/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4061435/)

---

Here's the plan:
1. We create a boolean function (`helper`) that accepts an integer and then determines whether none of the machines can produce that many alloys based on `composition`, `stock`, and `cost`. Thus, `helper` returns `False` if at least one machine can succeed.

1. We create `rng`, a range in which the solution must lie. (Note that we get an *non-decreasing* boolean array when we map `helper` onto`rng`, which allows us to use`bisect_left`in the binary search.)

1. We use `bisect_left` to determine the least number of alloys that all machines fail to produce. The greatest number that can be produced therefore is one less than this "fail" number.


```
class Solution:
    def maxNumberOfAlloys(self, n: int, k: int, budget: int, 
                          composition: List[List[int]], 
                          stock: List[int], cost: List[int]) -> int:
                          cost: List[int]) -> int:

        def helper(x):                                  #  <-- 1.         
            
            for comp in composition:
                need = sum(max(0,cp*x - st) * co
                           for cp,st,co in zip(comp,stock,cost))

                if need <= budget: return False
            return True


        rng = range(min(stock) + budget+1)              #  <-- 2.
  
        return bisect_left(rng, True, key = helper) - 1 #  <-- 3.
```
[https://leetcode.com/problems/maximum-number-of-alloys/submissions/1052855136/](http://)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `min(stock) + budget`.