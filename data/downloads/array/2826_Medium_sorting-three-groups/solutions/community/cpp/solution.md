# LIS || DP(Easy) || C++ || Python || JAVA || Easy Video Solution 🔥

**Author:** ayushnemmaniwar12
**Votes:** 32
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3932052/](https://leetcode.com/problems/sorting-three-groups/solutions/3932052/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to think in terms of DP

Easy Video Solution

https://youtu.be/tQWg5Lb4ePs



To summarize, the algorithm calculates the length of the longest non-decreasing subsequence for each element in the input vector using dynamic programming. It then returns the minimum number of operations needed to make the entire sequence strictly decreasing, which is equivalent to subtracting the length of the longest non-decreasing subsequence from the total length of the sequence.

# Complexity
- Time complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

```C++ []
class Solution {
public:
    int minimumOperations(vector<int>& v) {
        int n=v.size();
        vector<int>dp(n,1);
        int m=1;
        for(int i=1;i<n;i++)
        {
            for(int j=i-1;j>=0;j--)
            {
                if(v[i]>=v[j])
                {
                    dp[i]=max(dp[i],1+dp[j]);
                    m=max(m,dp[i]);
                }
            }
        }
        return n-m;
    }
};
```
```python []
class Solution:
    def minimumOperations(self, v: List[int]) -> int:
        n = len(v)
        dp = [1] * n
        m = 1
        for i in range(1, n):
            for j in range(i - 1, -1, -1):
                if v[i] >= v[j]:
                    dp[i] = max(dp[i], 1 + dp[j])
                    m = max(m, dp[i])
        return n - m

```
```JAVA []
import java.util.Arrays;

public class Solution {
    public int minimumOperations(int[] v) {
        int n = v.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        int m = 1;
        for (int i = 1; i < n; i++) {
            for (int j = i - 1; j >= 0; j--) {
                if (v[i] >= v[j]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                    m = Math.max(m, dp[i]);
                }
            }
        }
        return n - m;
    }
}

```


# ***If you like the solution Please Upvote***
