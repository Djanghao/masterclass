# Easy and Simple Python Solution

**Author:** Gourav_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/3272492/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/3272492/)

---



# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution:
    def sumOfNumberAndReverse(self, num: int) -> bool:
        for i in range(0,num+1):
            s=str(i)
            s=s[::-1]
            s=int(s)
            if (s+i) == num:
                return True
        return False
```