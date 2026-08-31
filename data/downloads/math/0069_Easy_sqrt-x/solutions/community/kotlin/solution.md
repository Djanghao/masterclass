# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 25
**Link:** [https://leetcode.com/problems/sqrtx/solutions/2129929/](https://leetcode.com/problems/sqrtx/solutions/2129929/)

---

**As a professional with a passion for problem-solving and collaboration, I am always looking to expand my network of like-minded individuals on LinkedIn. By connecting with me, we can work together to tackle complex challenges, share ideas, and grow both professionally and personally.**

**Whether you're an expert in your field or just starting out, I welcome connections from all backgrounds and experiences. By building a diverse and collaborative network, we can leverage our unique perspectives and skill sets to push the boundaries of what's possible.**

**So, if you're interested in connecting and exploring the potential for future collaborations, please don't hesitate to reach out. Let's start a conversation and see where it takes us!**

---

https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/

---
(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Java ***

```

class Solution {
    public int mySqrt(int x) {
        if(x == 0) // To avoid division by 0
            return 0;
        int start = 1, end = x / 2 + 1; // The squareroot can only lie in this range
        while(start <= end) {
            int mid = start + (end - start) / 2;
            if(mid == x / mid) // Not multiplying as the product for a large number may be greater than the max value of int
                return mid;
            else if(mid < x / mid) 
                start = mid + 1;
            else
                end = mid - 1;
        }
        return end; // end will be the largest integer such that end^2 < x
    }
}

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
