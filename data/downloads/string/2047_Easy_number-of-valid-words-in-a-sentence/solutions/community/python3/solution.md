# [Python3] check words

**Author:** ye15
**Votes:** 24
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1537625/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1537625/)

---


```
class Solution:
    def countValidWords(self, sentence: str) -> int:
        
        def fn(word): 
            """Return true if word is valid."""
            seen = False 
            for i, ch in enumerate(word): 
                if ch.isdigit() or ch in "!.," and i != len(word)-1: return False
                elif ch == '-': 
                    if seen or i == 0 or i == len(word)-1 or not word[i+1].isalpha(): return False 
                    seen = True 
            return True 
        
        return sum(fn(word) for word in sentence.split())
```

Adding a regex solution by @yo1995
```
class Solution:
    def countValidWords(self, sentence: str) -> int:
        pattern = re.compile(r'(^[a-z]+(-[a-z]+)?)?[,.!]?$')
        return sum(bool(pattern.match(word)) for word in sentence.split())
```