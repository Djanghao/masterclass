# Python 3: TC O(max(n+k) + Q*sqrt(max(k))/log(max(k))): Prime Sieve, Multichoose, Modular Inverse

**Author:** BiggestChungus
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/5001206/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/5001206/)

---

# Intuition

For `n, k`: each of the `n` entries must be
* a product of 1+ of the prime factors of `k`
* or `1`

Suppose the prime factorization of `k` is `p1**x * p2**y * ...`
* **each pattern of distributing the `x` factors of `p1` across the buckets gives a different array**, as does distributing the `y` factors of `p2`, etc
* for `x` copies of `p1` across `n` buckets, **there are `x multichoose n == x+n-1 choose x` ways**
  * this is a "stars and bars" combinatorics problem
  * the `x` factors are to be placed among `n` buckets
  * so if we look at the isomorphic problem of arranging `x` items and `n-1` dividers, that's `x+n-1` slots, and `x` (or `n-1`) items to place into the slots. Hence the `x+n-1 choose x` ways
* so we if we have `x` copies of the first prime, and `y` copies of the next, etc., then **the answer is the product of (x multichoose n) for all prime factorization exponents x**

This is a bit more advanced math than many submitted solutions, but faster and simpler in the sense that the code takes fewer operations to run, and the operations are more "clean." No need to do a recursive thing to calculate the multichoose. Just use the `n choose k` equivalent.

# Approach

## Summary

So the above implies a reasonably straightforward (if you've solved similar problems):
* get the prime factorization of `k`, specifically the exponents
* for each exponent `x`, get `x multichoose n == x+n-1 choose x`
* the answer for `n, k` is the product of these multichooses

## Prime Factorization

When you need the factorizations for many numbers, the fastest (interview-friendly) way is
* use the Sieve of Erathosthenes to get the max prime up to *sqrt* of the largest number
* then use trial division by primes up `sqrt(k)`

Why sqrt? You can convince yourself pretty quickly that `k` has at most one prime factor `p` above `sqrt(k)`. If that wasn't true, the product of factors would be at least `p*p >= k` which is clearly wrong. So we
* do trial division by all numbers up to `sqrt(k)`
* if the remainder or "residue" after the divisions is not 1, then it must be the one prime factor `p` above `sqrt(k)` because
  * we divided out all the primes up to `sqrt(k)` by construction
  * and there is at most one more prime factor
  * so by the pigeonhole principle, the residue is that last prime

### Sieve of Eratosthenes

The idea is
* we start off saying "all numbers are prime"
* when we encounter a prime
  * append it to `primes`
  * then set `isPrime[c] == False` for all composite numbers `c` that are multiples of the new prime

Common optimizations:
* don't bother with evens, which we all know are multiples of 2
* when marking off multiples of prime `p`, start with `p**2`. The lesser numbers are multiples of `p * smallerPrimes`, and we already marked off the smaller primes' multiples

Neither of these changes the asymptotic complexity (even the latter, contrary to popular opinion), but in practice it's a significant difference for primes even up to `M ~ 6`.

Roughly speaking
* the algorithm runs in `O(N*log(log(N)))` time to find primes up to `N`. The reason is when we find a new prime `p`, we mark off all multiples of `p`, of which there are `N/p`. So the complexity is `N * sum(1/p | p is prime and <= N)`. That sum is called the "prime harmonic series" and is order `log(log(N))`
* the "start at p**2" stuff changes the number of multiples of `p` we mark off to `(N-p**2)/p`, which is still `O(N/p)`, hence the lack of asymptotic improvement
* but starting at `p**2` means we do `p` fewer mark-offs for each `p <= sqrt(N)`. There are about `N/log(N)` primes below N (the "prime counting function"), so the sum of `p` for all primes is basically the `p`th triangle number, divided by `log(n)` because only about `1/log(n)` of those numbers is prime
* so finally we get `N log(log(N))` to leading order, and our optimization removes order `N/log(N)` operations
* for N == 1e6:
  * `N log(log(N))` is roughly 8e5 (log of log of 1e6 is less than 1)
  * `N/log(N)` is roughly 1e5
  * so we can see that even for 1e6 the optimization is same magnitude of operations

### Trial Division by Primes

In the worst case we divide by the `O(sqrt(k)/log(k))` primes below `sqrt(k)`, then take the residue (if > 1) as the last prime.

## Multichoose

### Factorial Version

We rewrite `x multichoose n` as `n+x-1 choose x` so we can use the usual combinatorial formula.

### Modular Combinatorics

Factorials grow very big, very fast. But we want the result mod `BIG == 10**9 + 7`.

For `n choose k`, the answer is `n! / (k! * (n-k)!)`. Mod `BIG`, we want `(n! mod BIG) * inv(k!) * inv((n-k)!)` where `inv(x)` is the modular multiplicative inverse of `x` mod `BIG`.

The number theory is beyond the scope of this writeup, but the idea is that there are numbers `y` such that `a/x == a*y mod BIG`.

The reason this exists is
* `x and BIG` are coprime, because `BIG` is prime and larger than `x`
* thanks to Bezout's Theorem, that means there are multiples of `x` and `BIG` where `a*x + b*BIG == 1 mod BIG`
* that means `x = x*(a*x + b*BIG) mod BIG`. Which is obviously a really weird way to write `x`, but mathematically correct
* anything times `BIG` mod `BIG` is 0
* so `x = a*x*x mod BIG`... which is fascinating, because it shows that for any `x`, there exists `a` such that `a*x == 1 mod BIG`!!

How do you find `a`? In general:
* as writing "Bezout's Theorem" implies, we can find `a` with the Extended Euclidean Algorithm
* or we can use Euler's Theorem since `x` and `BIG` are coprime
  * `BIG` is prime
  * which means the formula simplifies to `x**(BIG-2) mod BIG`
  * which we can compute in `O(log(BIG))` time
  * and is easy in Python because `pow(x, p, m)` computes `x**p mod m`. Built-in!!

So the algorithm is:
* cache the factorials of numbers up to `n+k-1` and their modular multiplicative inverses
* compute `x multichoose n` using `x+n-1 choose x`
* compute the `choose` using `(x+n-1)!`, then *times* the modular inverses of `x!` and `(n-1)!`

# Complexity

Honestly the complexity analysis is the hardest part becaus it too requires a bunch of number theory.
* Sieve of Eratosthenes: `O(sqrt(max)*log(log(max)))` time where `max` is the largest `k`, as discussed above. The `log(log(max))` comes from the prime harmonic series
  * done once for all values
* finding prime factors: for max `k` equal to `max`, finding the prime factors requires trial division by factors up to `sqrt(k)`. There are clearly at most order `log(k)` such factors, and there are order `sqrt(k)/log(k)` primes up to `sqrt(k)`. Therefore the cost is `sqrt(max)/log(max)` for trial division
  * done once per query
* then we need multichoose
  * we cache the factorials and their inverses in `O(max(n) + max(k))` time for factorials
  * `BIG` is constant so modular powers for the inverse are computed in `O(1)`. But really it's `log(BIG)`
  * and we do this for the `O(log(max(k)))` distinct prime factors

So we see in the end that the leading order terms are
* `O(max(n+k))` for computing and caching factorials and their modular multiplicative inverses
* and for each of the `Q` queries, we need the prime divisors' exponents of `k`. The leading order term is `O(sqrt(max(k))/log(max(k)))`

- Time complexity: `O(max(n+k) + Q*sqrt(max(k))/log(max(k)))`
  - `max(n+k)` is the largest such query across all queries
  - `Q` is the number of queries
  - `max(k)` is the largest `k`, the worst-case (the best case is `k==1`)

- Space complexity: `O(max(n+k))` for caching factorials and their inverses

# Code
```
class Solution:
    def waysToFillArray(self, queries: List[List[int]]) -> List[int]:
        # n, k
        #
        #   number of ways to place positive ints into an array of size n | the product of the integers is k

        # prime factorization question?

        # each entry of the array must be
        #    > a product of 1+ prime factors
        #    > 1

        # suppose we have prime factors p1**x p2**y
        #    each entry is a "bucket" into which we can place factors
        #    distribute the x factors of p1 among the n buckets, aka x multichoose n = (n+x-1 choose x)
        # that applies for each factor, so it's the product of multichooses for each prime

        # so we need
        #     > modular combinatorics
        #     > prime factors

        # prime factorization: there's at most one prime factor above sqrt(k) so we need primes up to sqrt(k),
        # then residue, if any, is the remaining prime factor

        # Sieve of Eratosthenes
        M = int(sqrt(max(k for _, k in queries)))
        isPrime = [True]*(M+1)
        primes = [2]
        for p in range(3, M+1, 2):
            if not isPrime[p]: continue

            primes.append(p)
            for c in range(p**2, M+1, 2*p): isPrime[c] = False # composite

        # the args for multichoose: the prime exponents, in any order, the primes themselves don't matter
        def primeExponents(n: int) -> list[int]:
            """Returns the exponents of the prime factorization, e.g. 18 = 2*3*3 -> return [1, 2]"""

            r = n
            ans = []
            for p in primes:
                if p**2 > n: break # remaining prime is r, the only one above p**2
                
                if r % p == 0:
                    r //= p
                    ans.append(1)
                    while r % p == 0:
                        r //= p
                        ans[-1] += 1
                    if r == 1: break

            if r > 1:
                # the "residue," the single prime factor above sqrt(n)
                ans.append(1)

            return ans

        M = max(n+k-1 for n, k in queries)
        BIG = 10**9+7
        facts = [1]*(M+1) # facts[f] == f! mod BIG
        for f in range(2, M+1):
            facts[f] = f*facts[f-1] % BIG
        invFacts = [1]*(M+1) # invFacts[f] is modular multiplicative inverse of f! mod BIG: f! ** (BIG-2) mod BIG
        for f in range(2, M+1): invFacts[f] = pow(facts[f], BIG-2, BIG)

        def multichooseMod(n, k) -> int:
            """Returns n multichoose k mod BIG"""

            n += k-1 # n multichoose k is n+k-1 choose k

            # n choose k: is n!/(k! (n-k)!)
            return (((facts[n] * invFacts[k]) % BIG) * invFacts[n-k]) % BIG

        ans = [1]*len(queries)
        for q, (n, k) in enumerate(queries):
            exps = primeExponents(k)

            for e in exps:
                ways = multichooseMod(n, e)
                ans[q] = (ans[q] * ways) % BIG

        return ans
```