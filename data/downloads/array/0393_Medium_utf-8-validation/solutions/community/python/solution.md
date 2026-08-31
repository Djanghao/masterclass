# Python3   ||  10 lines, binary pad, w/explanation  ||   T/S: 95% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2577038/](https://leetcode.com/problems/utf-8-validation/solutions/2577038/)

---

```
class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        
        count = 0                                   # Keep a tally of non-first bytes required
        
        for byte in data:                           # Pad out bytes to nine digits and ignore the 1st 1
            byte|= 256                                  # Ex: 35 = 0b100101 --> 35|256 = 0b1_00100101
			
                                                    # Check for bad bytes.
            if (byte >> 3 == 0b1_11111 or               # One of first five digits must be a 1
                (byte >> 6 == 0b1_10)^(count>0)):       # Non-first byte can happen if and only if the current count !=0.
                return False
                                                    # Update counts after new byte. (1-byte -> no change
													# to count required because count == 0.)
            if   byte >> 5 == 0b1_110 : count = 1       # 2-byte first byte
            elif byte >> 4 == 0b1_1110: count = 2       # 3-byte first byte
            elif byte >> 4 == 0b1_1111: count = 3       # 4-byte first byte
            elif byte >> 6 == 0b1_10  : count-= 1       # non-first bytes

        return not count                            # Check for zero-count at EOL
```

[https://leetcode.com/problems/utf-8-validation/submissions/1270645966/](https://leetcode.com/problems/utf-8-validation/submissions/1270645966/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(data)`.