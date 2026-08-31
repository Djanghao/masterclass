# Python 3 | Greedy | Explanation

**Author:** idontknoooo
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1492366/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1492366/)

---

### Explanation
- When talking about _**swap**_, it's almost always a greedy operation, no easy way around
- There are only two scenarios, either `010101....` or `101010....`, depends on the length of `s`, you might want to append an extra `0` or `1`
- Simply count the mismatches and pick the less one, see more explanation in the code comment below
### Implementation
```
class Solution:
    def minSwaps(self, s: str) -> int:
        ans = n = len(s)
        zero, one = 0, 0
        for c in s:                                    # count number of 0 & 1s
            if c == '0':
                zero += 1
            else:
                one += 1
        if abs(zero - one) > 1: return -1              # not possible when cnt differ over 1  
        if zero >= one:                                # '010101....' 
            s1 = '01' * (n // 2)                       # when zero == one
            s1 += '0' if n % 2 else ''                 # when zero > one 
            cnt = sum(c1 != c for c1, c in zip(s1, s))
            ans = cnt // 2
        if zero <= one:                                # '101010....'
            s2 = '10' * (n // 2)                       # when zero == one
            s2 += '1' if n % 2 else ''                 # when one > zero 
            cnt = sum(c2 != c for c2, c in zip(s2, s))
            ans = min(ans, cnt // 2)
        return ans
```