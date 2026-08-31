# [Python 3] - Check for "01" (1 Liner)

**Author:** mb557x
**Votes:** 41
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/1097225/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/1097225/)

---

**Solution 1**: Check for ```"01"```
Since the input string cannot ```s``` cannot have any leading zeroes and must contain ```at most one contiguous segment of 1s```, we need to check if ```"01"``` is present in ```s``` or not. If it is present, we can return False, else True.

A few testcases to help understand the intuition:
1. ```1100``` - True
2. ```11001``` - False (since ```01``` is present).
3. ```111111000000``` - True
4. ```1101010100``` - False
5. ```1``` - True
6. ```1111110000111``` - False

```
class Solution:
    def checkOnesSegment(self, s: str) -> bool:
        return "01" not in s
```
<br>
<br>

**Solution 2**: Using ```strip()```
```strip("0")``` will remove both the leading and trailing zeroes in the string. Thus, if zeroes are present inside the string, the output must be False.
```
class Solution:
    def checkOnesSegment(self, s: str) -> bool:
        s = s.strip("0")
        return ("0" not in s)
```
