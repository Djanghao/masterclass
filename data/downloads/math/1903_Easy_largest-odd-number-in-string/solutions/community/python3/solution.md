# PYTHON 3: 99.34% FASTER, EASY EXPLANATION

**Author:** rohitkhairnar
**Votes:** 50
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/1338138/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/1338138/)

---

As we want the largest odd num , so we will iterate from back , and once the element is found in the set of odd no. elements , we will return the string immediately , without the previous even numbers by slicing.
```
class Solution:
    def largestOddNumber(self, num: str) -> str:
        
        for i in range(len(num) - 1, -1, -1) :
            if num[i] in {'1','3','5','7','9'} :
                return num[:i+1]
        return ''
```
**plz upvote if it was helpful : )**