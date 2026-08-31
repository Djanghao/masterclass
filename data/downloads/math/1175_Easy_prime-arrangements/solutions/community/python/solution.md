# Python 3 solution (100% faster and 100% less memory)

**Author:** ColtMac
**Votes:** 7
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/371865/](https://leetcode.com/problems/prime-arrangements/solutions/371865/)

---

the n-tuple can be bifurcated into two collections: primes and not primes.  Since each element is unique - each collection's number of combinations is the factorial of its length.  Multiply these two together since each representation in each collection (prime and not prime) can be arranged with all possible representations from the other collection.
```
from math import factorial

class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
        num_primes = len([x for x in primes if x <= n])  #cleaned up per comment
        return ( factorial(num_primes) * factorial(n - num_primes) ) % (10**9 + 7)
```

*Note: since the problem says n <= 100, listing the primes is efficient.