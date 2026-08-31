# Python 3 | Rolling Hash, Math, Set, Substring | Explanation

**Author:** idontknoooo
**Votes:** 13
**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/1762453/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/1762453/)

---

### Approach \\#1. Brute force using Python `Set`
- **This method might TLE if more cases are added**
- Time: `O(n**2 * m)`. As `hint 4` says, hash `cur` may take `O(m)`, if `m` is large this will time out.
```python
class Solution:
    def equalDigitFrequency(self, s: str) -> int:
        n, s_set = len(s), set()
        for i in range(n):
            cur, cnt = '', [0] * 10
            for j in range(i, n):
                cnt[ord(s[j]) - ord('0')] += 1
                cur += s[j]
                if len(set(cnt) - {0}) == 1:
                    s_set.add(cur)
        return len(s_set)
```
### Approach \\#2. Rolling hash, Math
- `if max_cnt * unique == j - i + 1` is the Math trick to speed the whole thing up.
```python
class Solution:
    def equalDigitFrequency(self, s: str) -> int:
        n, s_set = len(s), set()
        PRIME, MOD = 11, int(1e9+7)                         # find a prime for hash algorithm (any prime greater than 10 for this problem)
        for i in range(n):
            cnt = [0] * 10                                  # count frequency of digit
            unique = max_cnt = s_hash = 0                   # unique: unique digit in substring, max_cnt: max frequency of digit in current substring; s_hash: string hash
            for j in range(i, n):
                digit = ord(s[j]) - ord('0')
                unique += 1 if cnt[digit] == 0 else 0       # count unique digits
                cnt[digit] += 1
                max_cnt = max(max_cnt, cnt[digit])          # update max frequency
                s_hash = (s_hash * PRIME + digit + 1) % MOD # update hash in O(1)
                if max_cnt * unique == j - i + 1:           # if max frequency * unique digits == the substring length, meaning each digits have the same frequency
                    s_set.add(s_hash)
        return len(s_set)                                   # return number of "Unique Substrings With Equal Digit Frequency"
```