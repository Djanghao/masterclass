# Python3  ||  Four lines with explanation   T/S: 99% / 49%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/2104160/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/2104160/)

---

Here's the plan:

By *Rule 1*: `00` -> `10` and by *Rule 2*: `10` ->`01` . 

1. By Rule 2, any zero may be moved through any number of ones to the left(Ex: `1110`->`1101`->`1011`->`0111`).

1. Consider the leftmost zero in the string. If there's a zero to its right, it can gobble this zero by Rule 1 to the right as it moves left. For example:

 `1001011` ->`1 00 1011` -> `1 10 1011` -> `110 10 11` -> `110 01 11` -> `11 10 111` -> `111011`

3. It follows that the leftmost zero can only move one position to the right for each other zero in the string to its right, and when all the other zeros have been eaten by the leftmost zero, we are done.


```
class Solution:
    def maximumBinaryString(self, binary: str) -> str:

        if not '0' in binary: return binary
        left0, zeros = binary.find('0'), binary.count('0')
        
        ans = '1'*(left0+zeros-1) + '0'
        return ans.ljust(len(binary), '1')
```
[https://leetcode.com/problems/maximum-binary-string-after-change/submissions/1224999021/](https://leetcode.com/problems/maximum-binary-string-after-change/submissions/1224999021/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(binary)`.