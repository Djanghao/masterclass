# 💥MOST EFFICENT🔥 SIMPLE & EASY METHOD 🔥

**Author:** hopmic
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5738480/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5738480/)

---

# Approach
- ***Convert to string and Sort digits in ascending order for positive, descending for negative.***
- ***Swap leading zero with the first non-zero digit for pos numbers.***
- ***Convert sorted digits back to an integer, convert back to the original sign.***

# Complexity
- **Time**: $O(n log n)$
- **Space**: $O(n)$

\uD83D\uDCA5 UPVOTE if it helped :D ------------>
# Code
```python3 []
class Solution:
    def smallestNumber(self, num: int) -> int:
        digits = sorted(str(abs(num)), reverse= num < 0) # if -ve sort in reverse 
        # swap leading zeros for pos number
        if digits[0] == '0':
            for i in range(1, len(digits)):
                if digits[i] != '0':
                    digits[0], digits[i] = digits[i], '0'
                    break

        return int("".join(digits)) * (1 if num > 0 else -1)
```