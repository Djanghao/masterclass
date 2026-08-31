# Python 3   ||   2 lines,  w/ example   ||   T/S: 87% / 99%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3316862/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3316862/)

---

Here's the code:
```
class Solution:
    def evenOddBit(self, n: int) -> List[int]:                 
        evens, odds = int('0101010101',2), int('1010101010',2)

        return [(evens&n).bit_count(),(odds&n).bit_count()]
```
Here's an example:
```
   Example:  n = 545 --> '0b1000100001'

       n = 1000100001       n = 1000100001
   evens = 0101010101    odds = 1010101010
           \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013           \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013
 evens&n = 0000000001  odds&n = 1000100000

                 return [1,2]
```
[https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/918209401/](https://leetcode.com/problems/number-of-even-and-odd-bits/submissions/918209401/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).