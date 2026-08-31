# python with explanation

**Author:** Kurokawashiro
**Votes:** 3
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/596265/](https://leetcode.com/problems/nth-magical-number/solutions/596265/)

---

For a number ***m*** that m%A==0 and m%B==0, there are ***a = m//A*** numbers that divisible by A, in the meantime there are ***b= m//B*** numbers that divisible by B, ***c = m//lcm(A,B)*** numbers that can both divisiable by A and B. (lcm represents *least common multiple*).
So m is the **(a+b-c)** th number. 
In this case, we only need to find the exact number that (a+b-c)==N. Binary search is all we need :).
```
class Solution:
    def nthMagicalNumber(self, N: int, A: int, B: int) -> int:
        import math
        lcm= A*B // math.gcd(A,B)
        l,r=2,10**14
        while l<=r:
            mid=(l+r)//2
            n = mid//A+mid//B-mid//lcm
            if n>=N:
                r=mid-1
           
            else:
                l=mid+1
        return l%(10**9+7)
```

