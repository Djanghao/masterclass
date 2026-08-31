# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/power-of-three/solutions/2129933/](https://leetcode.com/problems/power-of-three/solutions/2129933/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Java ***

```

class Solution {
    public boolean isPowerOfThree(int n) {
        if(n==0) return false;
        while(Math.abs(n)>1) {
            if(n%3!=0) return false;
            n /= 3;
        }
        return n == 1;
    }
}

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
