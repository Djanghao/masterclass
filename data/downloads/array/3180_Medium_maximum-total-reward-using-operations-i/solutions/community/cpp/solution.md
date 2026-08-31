# Pick or not pick DP

**Author:** donpaul271
**Votes:** 83
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282114/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282114/)

---

Key observation required for this question is that the answer will never be above 4000.

Proof:
	
Lets say the last element we picked is X.
The max possible value of reward before that is X-1.
This implies max possible reward is X + (X-1) = 2*X-1.
Since max value of X is 2000, so the max value of reward is 3999.

With this information in mind we can use a function with parameters sum and pos.

sum = sum of total rewards till that point
pos = current position in the array

Using these two parameters we get a unique state.

We can use a memo of the form dp[2001][4000].
(pos<2000 and sum<4000)


Make sure you filter out the duplicate elements out of the array as we will never be able to pick the same element twice


(please upvote if it helped)

# Code
```
#define ll long long
int dp[2001][4000];

int find(int pos, int sum, vector<int> &nums)
{
    if(pos == nums.size())
        return 0;
    
    int ans = -1;
    
    if(dp[pos][sum]!=-1)
        return dp[pos][sum];
     
    if(nums[pos] > sum) // picking allowed
    {
        ans = max(ans, nums[pos] + find(pos+1, sum+nums[pos], nums)); // picking
        ans = max(ans,  find(pos+1, sum, nums)); // not picking
    }
    
    else
        ans = max(ans, find(pos+1, sum, nums)); // not picking 
    
    return dp[pos][sum] = ans;
}

class Solution {
public:
    int maxTotalReward(vector<int>& rv) {
        
        vector<int> nums;
        unordered_set<int> s;

        memset(dp, -1, sizeof(dp));
        
        for(int i=0; i<rv.size(); ++i)
            s.insert(rv[i]);
        
        for(auto i=s.begin(); i!=s.end(); ++i) // filtering out duplicate elements using sets and sorting the array
            nums.push_back(*i);
        
        sort(nums.begin(), nums.end());
        
        int ans = find(0, 0, nums);
        return ans;
        
    }
};



```