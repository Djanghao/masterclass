# Python 3 three lines easy and explained

**Author:** denisrasulev
**Votes:** 31
**Link:** [https://leetcode.com/problems/most-common-word/solutions/500772/](https://leetcode.com/problems/most-common-word/solutions/500772/)

---

Runtime: 36 ms, faster than 40.27% of Python3 online submissions for Most Common Word.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Most Common Word.

```Python 3
import re

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
		
		# convert to lower case and split string into words by spaces and punctuation
        a = re.split(r'\\W+', paragraph.lower())
		
		# make new list consisitng of words not in banned list (remove banned words)
        b = [w for w in a if w not in banned]
		
		# return value that counted max times in the new list
        return max(b, key = b.count)
```

Please, upvote if you like it so that others can see and learn from it. Thanks!