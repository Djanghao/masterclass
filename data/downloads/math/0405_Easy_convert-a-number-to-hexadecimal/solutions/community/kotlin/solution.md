# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/2129940/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/2129940/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Java ***

```

class Solution {
    public String toHex(int num) {
        if (num == 0) return "0";
        
        boolean isNegative = num < 0;
        
        num = isNegative ? (num + 1) * -1 : num;
        
        var sb = new StringBuilder();
        while (num > 0) {
            int r = num % 16;
            if (isNegative) r = 15 - r;
            char c = (char) (r < 10 ? r + '0' : r - 10 + 'a');
            sb.append(c);
            num /= 16;
        }
        
        if (isNegative) {
            while (sb.length() < 8) {
                sb.append('f');
            }
        }
        
        return sb.reverse().toString();
    }
}

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
