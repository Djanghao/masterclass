# JAVA || Clean & Concise & Optimal Code || Prefix Sum Technique || O(N) Time || 100% Faster Solution

**Author:** anii_agrawal
**Votes:** 5
**Link:** [https://leetcode.com/problems/range-addition/solutions/1437259/](https://leetcode.com/problems/range-addition/solutions/1437259/)

---

```
class Solution {
    public int[] getModifiedArray(int length, int[][] updates) {
        
        int[] prefixSum = new int[length];
        
        for (int[] update : updates) {
            prefixSum[update[0]] += update[2];
            if (update[1] + 1 < length) {
                prefixSum[update[1] + 1] -= update[2];
            }
        }
        
        for (int i = 1;  i < length; i++) {
            prefixSum[i] += prefixSum[i - 1];
        }
        
        return prefixSum;
    }
}
```

Please help to **UPVOTE** if this post is useful for you.
If you have any questions, feel free to comment below.

**LOVE CODING :)
HAPPY CODING :)
HAPPY LEARNING :)**