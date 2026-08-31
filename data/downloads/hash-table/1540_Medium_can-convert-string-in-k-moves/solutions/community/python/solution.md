# Python - O(n) - Explained

**Author:** nadaralp
**Votes:** 17
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/779938/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/779938/)

---

The logic is as follows:
First we need to calculate the difference of the conversion. for example conversion from a to be will have difference of 1.
Then we hold a hash map ```diff``` to see how many times we want to convert each difference.
For example to go from "aa" to "bb" we want to go ```difference 1``` for 2 times.
This is possible only if we will have k of 27 or above, because to go from ```a``` to ```b``` we need 1, and each loop starts at 26 (alphabet count).

Quick way to check that is: ``` ((diff[d] - 1) * 26) + d > k ```

```
class Solution:
    def canConvertString(self, s: str, t: str, k: int) -> bool:
        if len(s) != len(t):
            return False
        
        # We calculate the differences
        diff = defaultdict(int)
        for sc, tc in zip(s, t):
            d = (ord(tc) - ord(sc)) % 26
            if d == 0: continue
            if d > k: return False
            diff[d] += 1
            if ((diff[d] - 1) * 26) + d > k:
                return False
        
        return True
```