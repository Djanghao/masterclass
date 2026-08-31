# HashMap + Video | Java C++ Python

**Author:** jeevankumar159
**Votes:** 12
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671637/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671637/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/_xIkHvSZpDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    public int longestArithSeqLength(int[] nums) {
        int ans = 0;
        int n = nums.length;
        HashMap<Integer,Integer>[] dp = new HashMap[n];
        for(int i = 0;i<n;i++){
            dp[i] = new HashMap<>();
            for(int j = 0;j<i;j++){
                int diff = nums[j]-nums[i];
                dp[i].put(diff, dp[j].getOrDefault(diff,1)+1);
                ans= Math.max(ans, dp[i].get(diff));
            }
        }
        return ans;
    }
}
```
```
class Solution {
public:
    int longestArithSeqLength(vector<int>& nums) {
        int ans = 0;
        int n = nums.size();
        vector<unordered_map<int, int>> dp(n);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int diff = nums[j] - nums[i];
                dp[i][diff] = dp[j].count(diff) ? dp[j][diff] + 1 : 2;
                ans = max(ans, dp[i][diff]);
            }
        }
        return ans;
    }
};
```
```
class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        ans = 0
        n = len(nums)
        dp = [defaultdict(int) for _ in range(n)]
        for i in range(n):
            for j in range(i):
                diff = nums[j] - nums[i]
                dp[i][diff] = dp[j].get(diff, 1) + 1
                ans = max(ans, dp[i][diff])
        return ans
```
