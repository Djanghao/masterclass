# Python by regex [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1541926/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1541926/)

---

Python by [regula expression aka regex](https://docs.python.org/3/library/re.html)

[Online regex debugger](https://regex101.com/)

---

```
import re
class Solution:
    def countValidWords(self, sentence: str) -> int:
        
        # parse and get each word from sentence
        words = sentence.split()
        
        # regular expression pattern for valid words
        pattern = re.compile( r'^([a-z]+\\-?[a-z]+[!\\.,]?)$|^([a-z]*[!\\.,]?)$' )
        
        # valid word count
        count = 0
        
        # scan each word from word pool
        for word in words:
            
            # judge whether current word is valid or not
            match = re.match(pattern, word)
            
            if match:
                count+=1
                
        return count
```

---

Reference:

[1] [Python official docs about regular expression and *re* module](https://docs.python.org/3/library/re.html)