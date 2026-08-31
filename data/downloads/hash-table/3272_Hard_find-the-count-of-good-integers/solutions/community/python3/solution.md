# Python 3 || 13 lines, find pal's and count  || T/S: 99% / 71%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5717009/](https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5717009/)

---

Here's the plan:
1. We determine `pals_left` the list of the left sides of the possible palindromes.

1. For each left side `pal_left`, we determine `pal_rght`, which we join to determine `pal`, a palindrome.
2. We check whether `pal` is *k-palindromic*. If so, we add its sorted string to the set `k_pals`. (We sort to avoid redundant palindromes.)
3. We use combinatorics to count the rearrangements for each `k_pal`, and return the sum of these counts as the answer.


```python3 []
class Solution:
    def countGoodIntegers(self, n: int, k: int) -> int:

        if n == 1: return 9//k
        k_pals, ans = set(), 0

        pals_left = product(*[digits[1:]]+[digits] *((n-1)//2)) # <-- 1
       
        for pal_left in pals_left:

            pal_rght = pal_left[::-1][n%2:]                     # <-- 2
            pal = ''.join(((*pal_left, *pal_rght)))

            if int(pal)%k == 0:                                 # <-- 3
                k_pals.add(''.join(sorted(pal)))

        for k_pal in k_pals:

            ctr = Counter(k_pal)                                # <-- 4
            denom = reduce(mul, map(factorial, ctr.values()))
            ans+= factorial(n)*(n - ctr['0'])//(denom * n)
            
        return ans
```
[https://leetcode.com/problems/find-the-count-of-good-integers/](https://leetcode.com/problems/find-the-count-of-good-integers/)

I could be wrong, but I think that time complexity is *O*(10^(*N*/2)) and space complexity is *O*(10^(*N*/2)), in which *N* ~ `n`.