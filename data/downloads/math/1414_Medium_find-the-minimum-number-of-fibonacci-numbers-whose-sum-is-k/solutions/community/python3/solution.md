# [Python3] greedy (& binary search)

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/1124073/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/1124073/)

---


```
class Solution:
    def findMinFibonacciNumbers(self, k: int) -> int:
        fibo = [1]
        f0 = f1 = 1
        while f1 < k: 
            f0, f1 = f1, f0+f1
            fibo.append(f1)
        
        ans = 0
        while k: 
            ans += 1
            i = bisect_right(fibo, k) - 1
            k -= fibo[i]
        return ans 
```