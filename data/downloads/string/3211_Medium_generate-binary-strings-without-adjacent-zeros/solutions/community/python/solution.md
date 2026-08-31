# Memoization Recursion

**Author:** kaluginpeter
**Votes:** 7
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5432048/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5432048/)

---



# Complexity
- Time complexity: O(2**N)

- Space complexity: O(2**N)

# Code
```
class Solution:
    def __init__(self):
        self.memo: dict[int, list[str]] = {
            1: ['0', '1'], 2: ['01', '10', '11']
        }
    def validStrings(self, n: int) -> List[str]:
        if n in self.memo: return self.memo[n]
        previous_valid_strings: list[str] = self.validStrings(n-1)
        valid_strings: list[str] = []
        for s in previous_valid_strings:
            if s[-1] == '1':
                valid_strings.append(s + '0')
                valid_strings.append(s + '1')
            elif s[-1] == '0': valid_strings.append(s + '1')
        self.memo[n] = valid_strings
        return valid_strings
```