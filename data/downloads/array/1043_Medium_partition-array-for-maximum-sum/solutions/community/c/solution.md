# Easy C++ solution

**Author:** saiteja_balla0413
**Votes:** 30
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/1281273/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/1281273/)

---

```
class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
        
        //dp[i] stores the sum at index i
        int n=arr.size();
        vector<int> dp(n);
        int maxi=arr[0];
        for(int i=0;i<k;i++)
        {
            maxi=max(arr[i],maxi);
            dp[i]=(maxi*(i+1));
        }
        for(int i=k;i<n;i++)
        {
            dp[i]=arr[i]+dp[i-1];
            maxi=arr[i];
            //check if a partition can result into the maximum sum
            for(int j=i-1;j>i-k;j--)
            {
                //get the maximum element
                maxi=max(maxi,arr[j]);
                dp[i]=max(dp[i],dp[j-1]+ (i-j+1)*maxi);
            }
        }
        return dp[n-1];
    }
};
```
**Please upvote if this helps :)**