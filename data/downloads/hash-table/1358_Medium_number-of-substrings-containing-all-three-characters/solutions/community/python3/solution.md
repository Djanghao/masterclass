# Python 3 | Two Pointers | Explanation

**Author:** idontknoooo
**Votes:** 44
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/851021/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/851021/)

---

### Explanation
- Two pointer to same direction, fast pointer check new character, slow pointer shorten substr
- Use a little math (`n-j`) to count possible valid substrings
- Check comments for more detail
### Implementation
```
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        a = b = c = 0                        # counter for letter a/b/c
        ans, i, n = 0, 0, len(s)             # i: slow pointer
        for j, letter in enumerate(s):       # j: fast pointer
            if letter == 'a': a += 1         # increment a/b/c accordingly
            elif letter == 'b': b += 1
            else: c += 1
            while a > 0 and b > 0 and c > 0: # if all of a/b/c are contained, move slow pointer
                ans += n-j                   # count possible substr, if a substr ends at j, then there are n-j substrs to the right that are containing all a/b/c
                if s[i] == 'a': a -= 1       # decrement counter accordingly
                elif s[i] == 'b': b -= 1
                else: c -= 1
                i += 1                       # move slow pointer
        return ans    
```