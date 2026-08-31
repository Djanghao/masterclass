# [Python] blazingly fast (208 ms, 99% runtime) while short and simple

**Author:** Ceay
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-longest-awesome-substring/solutions/780639/](https://leetcode.com/problems/find-longest-awesome-substring/solutions/780639/)

---

Two simple ideas that take advantage of long test scenarios:

1. In the first loop, create dictionaries dictF(orward) and dictB(ackward) that contain first and last occurances of cumulative XOR for bitwise coding of digits - the coding is explained very well in other solutions in the discussion. [E.g., see this great post from votrubac.](https://leetcode.com/problems/find-longest-awesome-substring/discuss/779893/C%2B%2BJavaPython3-with-picture-(similar-to-1371))
2. In the return statement, browse dictF and dictB for the largest distance between the indices. 

Time saving: finding max at every step is no longer needed. Instead, we need to populate additional dictionary.

```
class Solution:
    def longestAwesome(self, s: str) -> int:
        
        digits=[512 >> move for move in range(11)]
        xor, dictF, dictB=0, {0:-1}, {0:-1}
        
        for i in range(len(s)):
            xor=xor ^ (1 << int(s[i]))
            if xor not in dictF:
                dictF[xor]=i
            dictB[xor]=i

        return max([(ind-dictF[val ^ digit]) \\
                            for val, ind in dictB.items() \\
                            for digit in digits \\
                            if digit ^ val in dictF])
```