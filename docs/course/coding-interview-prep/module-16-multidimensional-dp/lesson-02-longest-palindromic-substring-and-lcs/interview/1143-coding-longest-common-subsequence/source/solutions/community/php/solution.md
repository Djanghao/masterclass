# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-common-subsequence/solutions/2312188/](https://leetcode.com/problems/longest-common-subsequence/solutions/2312188/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).

```

class Solution {
public:
    int longestCommonSubsequence(string &a, string &b) {
    short m[1001][1001] = {};
    for (auto i = 0; i < a.size(); ++i)
        for (auto j = 0; j < b.size(); ++j)
            m[i + 1][j + 1] = a[i] == b[j] ? m[i][j] + 1 : max(m[i + 1][j], m[i][j + 1]);
    return m[a.size()][b.size()];
}
};

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***


