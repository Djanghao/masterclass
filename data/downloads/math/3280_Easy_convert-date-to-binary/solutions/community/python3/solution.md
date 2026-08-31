# Python3 || parse, convert to binary, join ||

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/5753345/](https://leetcode.com/problems/convert-date-to-binary/solutions/5753345/)

---

Here's the plan:

1. We parse the string into the three integers.
2. We convert each integer to its binary equivalent as a string. 
2. We accumulate the strings, separated by `-`, into one string, and return.
____
Here's the code
```python3 []
class Solution:
    def convertDateToBinary(self, date: str) -> str:

        arr = date.split('-')                       # <-- 1)
        arr = map(lambda x: bin(int(x))[2:], arr)   # <-- 2)
        
        return "-".join(arr)))                      # <-- 3)
```
___
```python3 []
Here's a one-liner:
class Solution:
    def convertDateToBinary(self, date: str) -> str:
        
        return "-".join((map(lambda x: bin(int(x))[2:],date.split('-'))))