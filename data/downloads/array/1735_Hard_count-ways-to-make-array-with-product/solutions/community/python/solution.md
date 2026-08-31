# Key Idea Fully Explained Python

**Author:** sarthakBhandari
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/3228329/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/3228329/)

---

This problem is quite similar to https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/3226221/key-idea-fully-explained-python/

**Approach 1: Prime Factorisation, Combinatorics**
Let **prime factorisation** of `x = P1^f1 * P2^f2 * ... * Pm^fm`

How many ways to put M balls into N slots?
How many ways to put f1 P1s into n slots?
This can be found using https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)
There are `(n - 1 + f1 Choose f1)` ways to distribute all P1s into n slots.

`ways(x,n) = (n - 1 + f1 C f1) * (n - 1 + f2 C f2) * ... * (n - 1 + fm C fm)`
Where `ways(x,n) = no. of arrays of size n, whose product is x`

**Time: O(|Q| sqrt(K))
Space: O(|Q|)**
```
class Solution:
    def waysToFillArray(self, queries: List[List[int]]) -> List[int]:
        mod = 10**9 + 7

        #prime factorisation
        def prime_exponents(x):
            prime_exps = []
            
            c_pow = 0
            while x%2 == 0:
                c_pow += 1
                x //= 2
            
            if c_pow:
                prime_exps.append(c_pow)
                c_pow = 0

            for j in range(3, floor(sqrt(x)) + 1, 2):
                while x%j == 0:
                    c_pow += 1
                    x //= j
                
                if c_pow:
                    prime_exps.append(c_pow)
                    c_pow = 0
            
            if x > 2: prime_exps.append(1)
            return prime_exps

        res = []
        for n,k in queries:
            mul = 1
            for exp in prime_exponents(k):
                mul = (mul * math.comb(n - 1 + exp, exp))%mod
            res.append(mul)
        
        return res
```