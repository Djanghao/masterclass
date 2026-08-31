# Easy Python solution using Hashing

**Author:** MiKueen
**Votes:** 50
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/2229844/](https://leetcode.com/problems/decode-the-message/solutions/2229844/)

---

```python
class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        mapping = {' ': ' '}
        i = 0
        res = ''
        letters = 'abcdefghijklmnopqrstuvwxyz'
        
        for char in key:
            if char not in mapping:
                mapping[char] = letters[i]
                i += 1
        
        for char in message:
            res += mapping[char]
                
        return res