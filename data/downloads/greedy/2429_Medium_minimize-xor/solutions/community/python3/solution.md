# Python 3   ||  15 lines,  bit manipulation   ||   T/S: 99% / 21%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/2656230/](https://leetcode.com/problems/minimize-xor/solutions/2656230/)

---

Here's the plan:

 - We determine determine the number of set-bits in `num2`
 
 - We use that count of bits to construct an integer by mirroring the 1-bits of `num1` (starting with the most significant bit).
 - If any bits remain after this iteration, we iterate in reverse and put them in the least significant 0-bits remaining.

```
class Solution:
    def minimizeXor(self, num1: int, num2: int, mxbits = 31) -> int:

        num1 = bin(num1)[2:].rjust(mxbits,'0') 
        bitNum =bin(num2).count('1')
        ans = ['0'] * mxbits

        for i in range(mxbits):
            if num1[i] == '1':
                ans[i] = '1'
                bitNum-= 1
                if bitNum == 0: break
                
        else:
            for i in range(mxbits - 1, -1, -1):
 
                if num1[i] == '0':
                    ans[i] = '1'
                    bitNum-= 1
                    if bitNum == 0: break

        return int(''.join(ans),2)
        
```
[https://leetcode.com/problems/minimize-xor/submissions/1289234819/](https://leetcode.com/problems/minimize-xor/submissions/1289234819/)
		
