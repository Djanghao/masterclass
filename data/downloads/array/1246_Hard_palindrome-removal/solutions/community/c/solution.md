# Fast C++ DP solution with explanation O(N^3)

**Author:** DVS
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-removal/solutions/1553470/](https://leetcode.com/problems/palindrome-removal/solutions/1553470/)

---

```
class Solution {
public:
    int minimumMoves(vector<int>& arr) {
        int n = arr.size();
        int dp[n][n], l, r, i, k;
        
        // i denotes the size of the window under consideration
        for (i = 0; i <= n; i++) {
            l = 0;
            r = l + i;
            
            // Moving this window from start to end
            while (r < n) {
                dp[l][r] = INT_MAX;
                // Handle 1 size case
                if (i == 0)
                    dp[l][r] = 1;
                else {
                    if (arr[l] == arr[r])
                        // Handle 2 size case
                        if (i == 1)
                            dp[l][r] = 1;
                        else
                            // If left and right are the same, then they can be accommodated in the
                            // existing value
                            // Example: [2,3] -> 2, [1,2,3,1] -> 2 
                            // (Remove 3 or 2 and the remaining array is a palindrome)
                            dp[l][r] = min(dp[l][r], dp[l+1][r-1]);
                    
                    // Breaking the window from every point and taking minimum of all
                    // Example: res(2,1,1,3) -> 
                    // minimum (res(2) + res(1,1,3), res(2,1) + res(1,3), res(2,1,1) + res(3))
                    for (k = l; k <= r-1; k++)
                        dp[l][r] = min(dp[l][r], dp[l][k] + dp[k+1][r]);
                }
                
                l++;
                r++;
            }
        }
        
        return dp[0][n-1];
    }
};