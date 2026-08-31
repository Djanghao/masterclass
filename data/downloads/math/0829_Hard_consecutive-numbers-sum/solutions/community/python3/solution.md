# 8 lines Python3 code

**Author:** tongho
**Votes:** 10
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/1466133/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/1466133/)

---

Let say integer **n** is equal to sum of **i** consecutive positive integers. Then 
**n=a+(a+1)+(a+2)..+(a+i-1)**
**=ai+(0+1+2+...+(i-1))**
so **(n-(0+1+2+...+(i-1)))/i==a**, which means if **(n-(0+1+2+...+(i-1))) % i ==0**, there will be integer **a** and **i** satisfies the requirement.



```
class Solution:
    def consecutiveNumbersSum(self, n: int) -> int:
        csum=0
        result=0
        for i in range(1,n+1):
            csum+=i-1
            if csum>=n:
                break
            if (n-csum)%i==0:
                result+=1
        return result
```