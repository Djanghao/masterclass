# Python3 || 12 lines, recursive functions  || T/S: 98% / 18%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5913117/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5913117/)

---

- There's plenty of expository discussion in other posted solutions of *Stirling numbers of the second kind* and the formula below (marked `####`). 
- This formula entails the use of four functions: `comb`, `factorial`, `stirling2`, `pow`. These functions are all available using the ``math`` or `scipy.special` modules.

- For this particular problem, however, using the recursive definition with caching for `comb`, `factorial`, and `stirling2` proves to be significantly more efficient time-wise because we are iterating through large ranges of consecutive integers.


```python3 []
mod = 1_000_000_007

@lru_cache(None)
def stirling2_(n: int, i: int)-> int:
    if not 0 <= i <= n: return 0
    if n == 0: return 1
    return (stirling2_(n - 1, i - 1) + i * stirling2_(n - 1, i)) % mod

@lru_cache(None)
def factorial_(num: int)-> int:
    if num == 0: return 1
    return (num * factorial_(num - 1))% mod

@lru_cache(None)
def comb_(n,i):
    if i == 0: return 1
    return comb_(n,i-1)* (n-i+1) // i   


class Solution:
    def numberOfWays(self, n: int, x: int, y: int, ans = 0) -> int:        
        
        for i in range(1, min(n, x) + 1):

            ans+= (comb_(x, i) * factorial_(i) * stirling2_(n, i) * pow(y, i, mod)) ####
            ans%= mod

        return ans
```
[https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/submissions/1422358487/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/submissions/1422358487/)

I could be wrong, but I think that time complexity is *O*(*NX*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and *X* ~ `x`.