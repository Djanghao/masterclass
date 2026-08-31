# [Python3] Short and easy to understand

**Author:** frolovdmn
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1491046/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1491046/)

---

We want to return only the part that matches the condition **('\\d+)'** (matches one or more digits), then convert every element  to **int** and the length of the **set(nums)** will be the answer.
```
class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        word = re.findall('(\\d+)', word)
        nums = [int(i) for i in word]
        
        return len(set(nums))
```