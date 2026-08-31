# [Python3] 1-line (beating 99.22%)

**Author:** ye15
**Votes:** 15
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/423642/](https://leetcode.com/problems/valid-word-square/solutions/423642/)

---

`zip(*words)` is a commonly used Python trick to transpose a matrix. `zip_longest` is used in place of `zip` for stirngs of different lengths, e.g. `words = ["abcd","bnrt","crm","dt"]`. 
```
>>> list(zip(*words))
[('a', 'b', 'c', 'd'), ('b', 'n', 'r', 't')]
>>> list(zip_longest(*words))
[('a', 'b', 'c', 'd'), ('b', 'n', 'r', 't'), ('c', 'r', 'm', None), ('d', 't', None, None)]
```
`None` can be removed using `filter(None, x)`. Then, lists are joined (using `"".join()`) into strings. 

```
from itertools import zip_longest 

class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        return words == ["".join(filter(None, x)) for x in zip_longest(*words)]
```

```
class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        return words == ["".join(x) for x in zip_longest(*words, fillvalue="")]
```

Edited on 2/4/2021
Adding a more readable implementation
```
class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        for i in range(len(words)):
            vals = []
            for ii in range(len(words)):
                if i < len(words[ii]): vals.append(words[ii][i])
            if words[i] != "".join(vals): return False 
        return True 
```