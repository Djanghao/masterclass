# 5-line Python solution, easy to understand

**Author:** kitt
**Votes:** 297
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/19202/](https://leetcode.com/problems/group-anagrams/solutions/19202/)

---

```
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        letters_to_words = defaultdict(list)
        for word in strs:
            letters_to_words[tuple(sorted(word))].append(word)
        return list(letters_to_words.values())
```
