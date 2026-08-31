# Yes it's a 2d DP !!

**Author:** Jay_1410
**Votes:** 69
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389322/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389322/)

---

# Intution -
- Let `A` be subsequence , with some `mod`

- `say mod = (A[i] + A[i+1]) % k = (A[i + 1] + A[i + 2]) % k = ... `
- `DP[currNum][mod]  ` denotes the maximum length of the mod subsequence (subsequence having this mod) ending with currNum
- Say we at index i , `currNum = nums[i]`
- This currNum can be a part of any of subsequence having mod =  [0  , k-1]
- So , we'll try to make our currNum to be a part of all possible subsequenes and choose the maximum out of it
- For currNum to be a part of mod subsequence 
 => (currNum + prevNum) % k = mod
 => prevNum = (mod - currNum + k) % k
- `DP[currNum][mod] = max(DP[currNum][mod] , 1 + DP[prevNum][mod])`
# Complexity:
- Time Complexity : O(N * K)
- Space Complexity : O(K * K)
```C++ []
class Solution {
public:
    int maximumLength(vector<int>& nums, int k) {
        vector<vector<int>> dp(k , vector<int>(k , 0));
        int maxi = 1;
        for(int num : nums){
            int currNum = num % k;
            for(int mod = 0 ; mod < k ; mod++){
                  int prevNum = (mod - currNum + k) % k;
                  dp[currNum][mod] = max(dp[currNum][mod] , 1 + dp[prevNum][mod]);
                  maxi = max(maxi , dp[currNum][mod]);
            }
        }
        return maxi;
    }
};
```
```Java []
class Solution{
    public int maximumLength(int[] nums, int k) {
        int[][] dp = new int[k][k];
        int maxi = 1;
        for(int num : nums){
            int currNum = num % k;
            for (int mod = 0; mod < k; mod++) {
                int prevNum = (mod - currNum + k) % k;
                dp[currNum][mod] = Math.max(dp[currNum][mod] , 1 + dp[prevNum][mod]);
                maxi = Math.max(maxi , dp[currNum][mod]);
            }
        }
        return maxi;
    }
}

```
```Python []
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        dp = [[0] * k for _ in range(k)]
        maxi = 1
        for num in nums:
            currNum = num % k
            for mod in range(k):
                prevNum = (mod - currNum + k) % k
                dp[currNum][mod] = max(dp[currNum][mod] , 1 + dp[prevNum][mod])
                maxi = max(maxi , dp[currNum][mod])
        return maxi

```
