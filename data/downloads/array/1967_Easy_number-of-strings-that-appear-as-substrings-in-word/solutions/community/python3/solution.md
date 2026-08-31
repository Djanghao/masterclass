# [Python3] 1-line

**Author:** ye15
**Votes:** 25
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404073/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404073/)

---


```
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        return sum(x in word for x in patterns)
```

You can find the solutions to weekly 254 in this [repo](https://github.com/gaosanyong/leetcode/commit/dcc452fea7d159bd4fae8318c14d546f17783894).