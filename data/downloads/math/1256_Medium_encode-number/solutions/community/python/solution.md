# Should be easy

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-number/solutions/4895690/](https://leetcode.com/problems/encode-number/solutions/4895690/)

---

```
class Solution:
    def encode(self, num: int) -> str:
        """
		input   input+1
        0 ""    1:  0 []
        
        1 "0"   2:  1 [0]
        2 "1"   3:  1 [1]
        
        3 "00"  4:  1 [00]
        4 "01"  5:  1 [01]
        5 "10"  6:  1 [10]
        6 "11"  7:  1 [11]
        
        7 "000" 8:  1 [000]
        
        n = leftmost len - 1 bits of n + 1        
        """
        return bin(num + 1)[3:]
```