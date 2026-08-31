# Series of hints for this problem

**Author:** CuriousJianXu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/5672701/](https://leetcode.com/problems/minimum-factorization/solutions/5672701/)

---

# Hints
<!-- Describe your first thoughts on how to solve this problem. -->

- Hint0: greedy!
- Hint1: each digit is 0~9. And we always ignore 0, 1
- Hint2: When considering digit counts, for 1 < a < b < 10, if num%b == 0, it is always a weakly dominant strategy (in game thoery terms) to choose a over b
- Hint3: For two valid candidate with same digit counts, the candidate with largest digit value can never have smallest value larger than that of the the other candidate. Yes, again, it is always a weakly dominant strategy to choose the candidate with largest digit.
- Hint4: For a given candidate, it is always best to sort the digits
- Hint5: Under what circumstances we will find no candidate?
  - 1. candidate with prime factor larger than 7
  - 2. candidate larger than MAX_VALUE_WITH_32_bits



# Code
```python3 []
# Hint0: greedy!
# Hint1: each digit is 0~9. And we always ignore 0, 1
# Hint2: When considering digit counts, for 1 < a < b < 10, if num%b == 0, 
#   it is always a weakly dominant strategy (in game thoery terms) to choose a over b
# Hint3: For two valid candidate with same digit counts, 
#   the candidate with largest digit value can never have smallest value larger than that of the the other candidate
#   yes, again, it is always a weakly dominant strategy to choose the candidate with largest digit.
# Hint4: For a given candidate, it is always best to sort the digits
# Hint5: Under what circumstances we will find no candidate?
#   1. candidate with prime factor larger than 7
#   2. candidate larger than MAX_VALUE_WITH_32_bits

MAX_VALUE_WITH_32_bits = 2_147_483_647 # 2**31 - 1
class Solution:
    def smallestFactorization(self, num: int) -> int:
        if num < 2: # num == 1
            return 1
        
        res, mul = 0, 1
        for digit in range(9, 1, -1):
            while num%digit == 0:
                num //= digit
                res += mul * digit
                mul *= 10
        
        if num < 2 and res <= MAX_VALUE_WITH_32_bits:
            return res
        return 0

```