# Recursion + memoization

**Author:** donpaul271
**Votes:** 27
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5280121/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5280121/)

---


There will be 3 parameters in the function

pos = index of current position
prev = index of the previous element in the subsequence
cnt = number of exceptions remaining (arr[i] != arr[i+1])

These 3 parameters will give a unique state.

use a memo of the form dp[503][503][26]

pos, prev < 500
cnt <= 25 (since k<=25);

(please upvote if it helped)

```

#define ll long long
int dp[503][503][26];


int find(int pos, int prev, int cnt, vector<int> &nums)
{
    if(pos == nums.size())
        return 0;
    
    int ans = -1; 

    if(dp[pos][prev+1][cnt] != -1)
        return dp[pos][prev+1][cnt];
    
    if(prev == -1) // prev = -1 implies the the subsequence has not started
    {
        ans = max(ans, find(pos+1, -1, cnt, nums)); // not starting
        ans = max(ans, 1 + find(pos+1, pos, cnt, nums)); //starting
    }
    
    else
    {
        if(nums[pos] == nums[prev]) // if prev == curr no need to reduce the cnt when adding to subsequence
            ans = max(ans, 1 + find(pos+1, pos, cnt, nums)); // adding
        
        else
        {
            ans = max(ans, find(pos+1, prev, cnt, nums)); // skipping
            
            if(cnt > 0) // make sure cnt > 0 before adding a number not equal to the previous. 
                ans = max(ans, 1 + find(pos+1, pos, cnt-1, nums)); // adding and reducing cnt
        }
    
    }
        
    return dp[pos][prev+1][cnt] = ans;
}


class Solution {
public:
    int maximumLength(vector<int>& nums, int k) {
        
        memset(dp, -1, sizeof(dp));
        
        int ans = find(0, -1, k, nums);
        return ans;
    }
};




```