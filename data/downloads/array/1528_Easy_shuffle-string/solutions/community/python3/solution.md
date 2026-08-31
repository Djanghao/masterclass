# Python 3 lines easy O(n)

**Author:** faizulhai
**Votes:** 59
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/755911/](https://leetcode.com/problems/shuffle-string/solutions/755911/)

---

Using a list to store all the chars and joining it to return the answer string. 
```
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        res = [''] * len(s)
        for index, char in enumerate(s):
            res[indices[index]] = char
        return "".join(res)