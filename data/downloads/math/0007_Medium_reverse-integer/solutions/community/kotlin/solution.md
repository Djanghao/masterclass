# ✅[0ms][1LINER][100%][Fastest Solution Explained] O(n) time complexity | O(n) space complexity

**Author:** darian-catalin-cucer
**Votes:** 12
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/2055036/](https://leetcode.com/problems/reverse-integer/solutions/2055036/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Python ***

```

class Solution:
    def reverse(self, x: int) -> int:
        
        x = str(x)
        
        if x[0]=="-":
            sign = -1
        else:
            sign = 1
            
        x = x.lstrip("-")
        x = x.lstrip("+")
        
        x = x[::-1]
        
        int_x = int(x) * sign
        
        if int_x > 2**31-1:
            return 0
        elif int_x < -2**31:
            return 0
        else:
            return int_x
        

```

```
```

```
```
***"We are Anonymous. We are legion. We do not forgive. We do not forget. Expect us. Open your eyes.." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***