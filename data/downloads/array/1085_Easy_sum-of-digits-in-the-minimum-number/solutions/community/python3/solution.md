# Python without string conversion or sum variable

**Author:** JuanRodriguez
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/907597/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/907597/)

---

If there is an odd number occurences of odd digits in the minimum number. Then the minimum number is odd. No need to store a sum. 

```
class Solution:
    def sumOfDigits(self, A: List[int]) -> int:
        isEven = True
        minNum = min(A)
        
        while minNum != 0:
            if (minNum % 10) % 2 == 1:
                isEven = not isEven
            minNum = minNum // 10
            
        return int(isEven)
```