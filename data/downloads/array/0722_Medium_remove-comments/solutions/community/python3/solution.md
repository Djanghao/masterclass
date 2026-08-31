# Python regex 10 lines

**Author:** DenysCoder
**Votes:** 12
**Link:** [https://leetcode.com/problems/remove-comments/solutions/573873/](https://leetcode.com/problems/remove-comments/solutions/573873/)

---

```
import re
class Solution:
    def removeComments(self, source: List[str]) -> List[str]:
        s = '\
'.join(source)
        regex_single = r"\\/\\/.*"
        regex_block_closed = r"(?s:\\/\\*.*?\\*\\/)"
        regex_block_not_closed = r"\\/\\*.*"    
        regex = '|'.join([regex_single, regex_block_closed, regex_block_not_closed])  # order matters
        s = re.sub(regex, '', s)
        return list(filter(None, s.split('\
')))
```