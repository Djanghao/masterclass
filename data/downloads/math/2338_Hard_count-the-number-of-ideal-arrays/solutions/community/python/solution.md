# [Python] Arranging primes; intro to combinatorics

**Author:** grawlixes
**Votes:** 52
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2261280/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2261280/)

---

Consider a value, `v`, where `1 <= v <= maxValue`. If we're going to end the array with the number v, then we're going to have to "place" every prime factor of v somewhere in one of the array's n indices. 

When I say "place" a prime at index `i`, I mean we multiply every element from `i` up to `n - 1` with the prime, so it "shows up" in every number up to v at the end. So, we'll count the number of ways to arrange each prime `p` of value `v`, multiply each number of ways together, and add up each of these products for all `v`. 

If we only have one prime of a certain type, call it p, then it's easy to figure out how many different arrays this can give us: the ability to place the prime at any of our n indices just multiplies the number of different arrays by n. 

But if there's more than one prime of one type - say `k` primes of this type - then it's a little harder, because we can't count duplicates. For example, n = 2 and v = 4, we'd count `[2, 2]` twice if we multiplied by n two times (one for each prime). The solution here is to use `nCr` instead; count the ways to arrange `k` primes among `n` possible spaces. For k = 2, it's `n * (n + 1) / 2`. For k = 3, it's `n * (n + 1) * (n + 2) / (2 * 3)`, and so on.

Code is a bit long, but most of it is just auxiliary code to get prime factors.

```
from math import sqrt

class Solution:
    def primesUpTo(self, n):
        primes = set(range(2, n + 1))
        for i in range(2, n):
            if i in primes:
                it = i * 2
                while it <= n:
                    if it in primes:
                        primes.remove(it)
                    it += i

        return primes

    def getPrimeFactors(self, n, primes):
        ret = {}
        sq = int(math.sqrt(n))

        for p in primes:
            if n in primes:
                ret[n] = 1
                break

            while n % p == 0:
                ret[p] = ret.get(p, 0) + 1
                n //= p

            if n <= 1:
                break

        return ret
        
    def idealArrays(self, n: int, maxValue: int) -> int:
        mod = 10**9 + 7
        ret = 0
        primes = self.primesUpTo(maxValue)
        
        for num in range(1, maxValue + 1):
            # find number of arrays that can end with num
            # for each prime factor, we can add it at any index i that we want
            pf = self.getPrimeFactors(num, primes)
            cur = 1
            for d in pf:
                ct = pf[d]
                v = n
                # there are (n + 1) choose k ways to add k prime factors
                for add in range(1, ct):
                    v *= (n + add)
                    v //= (add + 1)
                
                cur = (cur * v) % mod
                    
            ret = (ret + cur) % mod
                    
        return ret
```

Happy to answer any questions in the comments, I wrote this kind of quickly so I may have glossed over some details. If you found this useful and want to learn more about combinatorics and higher-level math in competitive programming/interview problems, [check out this post I made explaining another mathy problem on Leetcode.](https://leetcode.com/problems/kth-smallest-instructions/discuss/918396/python-math-solution-introduction-to-combinatorics)