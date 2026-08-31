# Python 3   ||   9 lines,  sieve   ||   T/S: 91%  /  79%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3709717/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3709717/)

---


```
primes = [False,False] + [True] * 999_999               #
                                                        #
for i in range(2, 1001):                                # <-- sieve construction
    if primes[i]:                                       # 
        for j in range(i + i, 1000_000, i):             #
            primes[j] = False                           #

class Solution:
    def findPrimePairs(self, n: int) -> List[List[int]]:

        if n < 4: return []                             # 
                                                        # <-- edge cases
        if n%2 or n == 4:                               #
            return [[2,n-2]] if primes[n-2] else []     #

        return [[i, n - i] for i in range(3,(n+3)//2)   # <-- find pairs
                       if primes[i] and primes[n - i]]  #
```
[https://leetcode.com/problems/prime-pairs-with-target-sum/submissions/984727574/](http://)

I could be wrong, but I think that time complexity is *O*(*N* log(log *N*)) and space complexity is *O*(*N*), in which *N* ~ `n`.