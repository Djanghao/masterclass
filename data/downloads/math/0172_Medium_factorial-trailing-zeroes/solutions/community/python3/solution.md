# Python Log(n) Loop | 100% Speed

**Author:** Aragorn_
**Votes:** 40
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/755572/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/755572/)

---

**Python Log(n) Loop | 100% Speed**

The code below presents an Easy Python solution with clear syntax. The algorithm works as follows:

1. The numbers of "zeros" in "n!" can be traced by decomposing the multiplication "n * (n-1) * ..." into a prime factorization with the format:
 * n! = 2^a * 3^b * 5^c, ...

2. In this factorization, the number of "zeros" in "n!" would correspond to the highest number of "10's" that we can form. Since  "10 = 5 * 2", the number of zeros would be "10's = min(a,c) ". 

3. While we should consider tracking 2^a and 5^c separately, we can note that 50% of integer numbers are even (multiples of 2), whereas only 20% are multiples of 5.

4. As a result, we can conclude that we add a zero to our factorial every time we multiply by 5...

5. Some numbers can multiply by 5 more than once, such as 5^2 = 25 or 5^3 = 125. We can consider these cases by adding a loop to account for all multiples of 5^x. Since 5^x grows exponentially, we achieve an algorithm with Log(n) time complexity.

I hope the explanation was helpful. This is a very interesting problem.

Cheers,

```
class Solution:
    def trailingZeroes(self, n):
        x   = 5
        res = 0
        while x <= n:
            res += n//x
            x   *= 5
        return res
```