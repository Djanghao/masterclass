# 2 lines of code with 100% less space used

**Author:** vashisht7
**Votes:** 29
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1142293/](https://leetcode.com/problems/truncate-sentence/solutions/1142293/)

---

```
class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        words = s.split(" ")
        return " ".join(words[0:k])
```
Just split the string with space into list and then append the number of words according to the number given.

If you find it useful kindly upvote the solution so it will be useful for others.
Cheers