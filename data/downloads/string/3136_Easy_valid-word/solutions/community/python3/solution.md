# Python 3 || 7 lines,  sets || T/S: 98% / 21%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-word/solutions/5118468/](https://leetcode.com/problems/valid-word/solutions/5118468/)

---

Here's the plan:

1. We convert three strings (`'aeiouAEIOU'`, `'@#$'`, and `word`) to sets of characters.
2. We use set intersection to determine whether a special character exists in word; if so, we return `False`. If not, we continue.
3. We use set intersection to determine whether a vowel exists in word; if not, we return `False`. If so, we continue.
4. We remove all vowels and digits from `word`. Any characters remaining must be consonants. We return `True` any characters remain, and `False` if not. 


```
vowels  = set('aeiouAEIOU')
special = set('@#$')

class Solution:
    def isValid(self, word: str) -> bool:

        if len(word) < 3: return False
        word = set(word)

        if word & special: return False 
        if not word & vowels: return False
      
        return word - (vowels|set(digits))
```
[https://leetcode.com/problems/valid-word/submissions/1250450498/](https://leetcode.com/problems/valid-word/submissions/1250450498/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(word)`.