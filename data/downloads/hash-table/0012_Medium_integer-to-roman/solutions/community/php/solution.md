# [0ms][1LINER][100%][Fastest Solution Explained] O(n) time complexity | O(n) space complexity

**Author:** darian-catalin-cucer
**Votes:** 28
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/2057323/](https://leetcode.com/problems/integer-to-roman/solutions/2057323/)

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
    final static int[] val = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
    final static String[] rom = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

    public String intToRoman(int N) {
        StringBuilder ans = new StringBuilder();
        for (int i = 0; N > 0; i++)
            while (N >= val[i]) {
                ans.append(rom[i]);
                N -= val[i];
            }
        return ans.toString();
    }
}

```

```
```

```
```
***"We are Anonymous. We are legion. We do not forgive. We do not forget. Expect us. Open your eyes.." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***