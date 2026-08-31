# [cpp] solution using 2D dp with explanation

**Author:** _algoristy
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/1969637/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/1969637/)

---

Time Complexity:- O(n * n * k)

```
// in this question the logic is i cut the array with k cuts creating k+1 subarrays and for each subarray we need to
// find the maximum element for each subarray respectively and then we need to calcuate the space wasted as 
// per the maximum value define in their respective subarrays

// eg3:- nums[] = 10, 20, 15, 30, 20 and k = 2
// 
// our 1st step is to make 2 cuts in the array leaving 2+1 subarrays
// [10] , [20, 15], [30, 20]
// now we need to find the maximum value in each subarray
// {10}, {20}, {30}
//
// xtra space is 
// [0], [0, 5], [0, 10]
//
// adding all the xtra spaces
// 0 + 0 + 5 + 0 + 10 = 15

class Solution {
public:
    int minSpaceWastedKResizing(vector<int>& nums, int k) {
        int n = nums.size(); // size of nums array
        
        //dp[i][j] will store the minimum value we can wasted in the subarray of length i
        //         if the value of k is j (number of cuts in the array)
        //dp[i][j] == -1 means it is not possible to cut the subarray in kth parts
        vector<vector<int>> dp = vector<vector<int>>(n, vector<int>(k+1, -1));
        
        // maxx[i][j] represents the maximum element from i to j in the nums array
        vector<vector<int>> maxx = vector<vector<int>>(n, vector<int>(n, 0));
        
        //that's a normal prefixSum 
        vector<int> prefixSum = vector<int>(n+1, 0);  
        
        //filling the maxx and the prefixSum array
        for(int i=0;i<n;i++){
            int maxel = nums[i];
            prefixSum[i+1] = prefixSum[i] + nums[i];
            for(int j=i;j<n;j++){
                maxel = max(maxel, nums[j]);
                maxx[i][j] = maxel;
            }
        }
        
        for(int i=0;i<n;i++){   // for each index in nums
            for(int j=0;j<=k;j++){  // go through each cuts
                if(j > i){  // if the number of cuts exeeded the length of subarray
                    dp[i][j] = -1;
                    continue;   // continue
                }
                dp[i][j] = INT_MAX; //else initially store INT_MAX in it
                if(j == 0){ // if the number of cuts is 0
                    int maxel = maxx[0][i]; // then calculate the maximum element until ith position
                    dp[i][j] = maxel*(i+1) - prefixSum[i+1];    // calculate number of wastage of space and store it in dp
                }
                else{       //else
                    for(int l=0;l<i;l++){ //for each l where (l < i)
                        if(dp[l][j-1] == -1) continue;  // if dp[l][j-1] not possible continue
                        // dp[l][j-1] means if the array length is upto lth position and we need to cut it into j-1 cuts
                        int maxel = maxx[l+1][i]; // calcuate the maximum value of the subarray(l+1, i)
                        //and calcuate the more space wasted in the subarray(l+1, i) if we already know the ans for subarray(0, l) for j-1 cuts i.e. dp[l][j-1]
                        int tempo = dp[l][j-1] + maxel*(i-l) - (prefixSum[i+1] - prefixSum[l+1]);
                        
                        // if this value (tempo) is lesser then our previous calculated ans replace it
                        dp[i][j] = min(dp[i][j], tempo);
                    }
                    // after all the calculations if we can't find any and make it to -1
                    if(dp[i][j] == INT_MAX) dp[i][j] = -1;
                }
            }
        }
        
        // in the end return the value of dp[n-1][k] represents if we had a subarray of length(0, n-1) [whole array] and we need to divide it into k cuts
        return dp[n-1][k];
    }
};
```

upvote if you like it
Thanks