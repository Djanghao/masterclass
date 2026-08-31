# Python 3 (two lines) (beats 100%) (16 ms) (With Explanation)

**Author:** junaidmansuri
**Votes:** 144
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/470770/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/470770/)

---

- Start from letter z (two digit numbers) and work backwords to avoid any confusion or inteference with one digit numbers. After replacing all two digit (hashtag based) numbers, we know that the remaining numbers will be simple one digit replacements.
- Note that ord('a') is 97 which means that chr(97) is 'a'. This allows us to easily create a character based on its number in the alphabet. For example, 'a' is the first letter in the alphabet. It has an index of 1 and chr(96 + 1) is 'a'.

```
class Solution:
    def freqAlphabets(self, s: str) -> str:
        for i in range(26,0,-1): s = s.replace(str(i)+'#'*(i>9),chr(96+i))
        return s
            
		
		
- Junaid Mansuri
- Chicago, IL