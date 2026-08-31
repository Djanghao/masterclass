# Python - No nested loops! Clean and Concise! Two pointers with explanation

**Author:** domthedeveloper
**Votes:** 28
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/1905787/](https://leetcode.com/problems/valid-word-abbreviation/solutions/1905787/)

---

**Idea**:
- We traverse both strings in reverse, and we jump in the *word* string if we see a number in the *abbr* string.
- If we see more than one number in a row in the *abbr* string, we jump *by a factor of ten* in the *word* string.
- If the letters don't match and there are no numbers involved, we return false.
- If we are matching letters, and the previous number was zero, that means we have a leading zero, and we automatically return false.
- Finally, we return true if we have successfully traversed both strings completely.

**Solution**:
```
class Solution:
    def validWordAbbreviation(self, word, abbr):
        i, j, m, prev = len(word), len(abbr), 1, None
        
        while i > 0 and j > 0:
            c1, c2 = word[i-1], abbr[j-1]
            if c1 == c2:
                i -= 1
                j -= 1
                m = 1
                if prev == 0: return False
            elif c2.isnumeric():
                i -= int(c2)*m
                j -= 1
                m *= 10
                prev = int(c2)
            else: return False
        
        return i == j == 0
```