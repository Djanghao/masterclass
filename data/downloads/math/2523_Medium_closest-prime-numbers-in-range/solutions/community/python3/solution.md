# Python | Twin Primes, No Sieve

**Author:** nika-skybytska
**Votes:** 27
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2979147/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2979147/)

---

# Intuition

[Twin primes](https://en.wikipedia.org/wiki/Twin_prime) are quite common, so it won't take long to find some.

# Approach

**Lemma**: every range $$1 \\le L \\le R \\le 10^6$$ of length at least 1'452 contains a pair of twin primes. _Proof_: run a sieve of Eratosthenes and see for yourself.

If there are fewer than 1'452 numbers in $$[L, R]$$ then finding all primes in $$O((R - L) \\sqrt{R})$$ time is fast enough (takes roughly $$10^6$$ operations). Otherwise, you can stop once you encounter a twin pair, since no further gap will be smaller.

_Note_: In practice, finding primes in a range $$[L, R]$$ is faster than $$O((R - L) \\sqrt{R})$$. For example, all even numbers require only one step to determine that they are composite. All numbers of the form $$6k+3$$ require only two steps, etc. Amortized analysis applies here.

**Conjecture**: naively finding primes in a range $$[L, R]$$ takes $$O((R - L) \\sqrt R / \\log R)$$ time. Experimentally, for $$R \\le 10^6$$ the constant factor of this estimate is roughly 2. In other words, checking if a random number close to a million is prime takes on average $$2 \\sqrt{10^6} / \\log_2(10^6) \\approx 100$$ operations, which is much better than $$\\sqrt{10^6} = 1000$$.

# Complexity

- Time complexity: $$O(\\min(1'452, R - L) \\sqrt R / \\log R)$$

- Space complexity: $$O(\\min(1'452, R - L) / \\log R)$$ due to [prime number theorem](https://en.wikipedia.org/wiki/Prime_number_theorem).

# Code

[submission link](https://leetcode.com/problems/closest-prime-numbers-in-range/submissions/868988755/).

```
import math


def is_prime(num: int) -> bool:
    if num == 1:
        return False
    for divisor in range(2, math.floor(math.sqrt(num)) + 1):
        if num % divisor == 0:
            return False
    return True


class Solution:
    def closestPrimes(self, left: int, right: int) -> list[int]:
        primes = []
        for candidate in range(left, right + 1):
            if is_prime(candidate):
                if primes and candidate <= primes[-1] + 2:
                    return [primes[-1], candidate]  # twin or [2, 3]
                primes.append(candidate)
        
        gaps = ([primes[i - 1], primes[i]]
                for i in range(1, len(primes)))

        return min(gaps,
                   key=lambda gap: (gap[1] - gap[0], gap[0]),
                   default=[-1, -1])

```