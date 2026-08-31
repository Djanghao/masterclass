# Python 3 solution using recursion (efficient) 3-liner with explanation

**Author:** ketan35
**Votes:** 31
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/343424/](https://leetcode.com/problems/reverse-string-ii/solutions/343424/)

---

Explaination:
1) take first 2k characters from the string
2) reverse first k (using slicing [::-1])
3) add this reversed part with the second half of the considered part (2k characters)
4) call the function again with the remaining string
5) add the result of this call to your answer

Please comment for any doubt

```
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        if len(s)<(k):return s[::-1]
        if len(s)<(2*k):return (s[:k][::-1]+s[k:])
        return s[:k][::-1]+s[k:2*k]+self.reverseStr(s[2*k:],k)
            
```