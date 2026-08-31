# Recursion + Memo

**Author:** donpaul271
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355173/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355173/)

---

Function used in the recursion will  have the following parameters.

pos - postion in the array
stat - whether a subarray is already under construction or not.
sign - The sign of the current element if its added to the subarray 

-----

We can use a memo of the form dp[100001][2][2]
(make sure the dp is initialized to -1e16 and not -1, as -1 is a possible answer)

pos<=100000
stat can have two values 0 and 1(0 - not started, 1 - started)
sign can have two values 0 and 1(0 implies +ve sign and 1 implies -ve sign)

-----

We get a unique state using these parameters. 
Recursion calls are explained in the code. 

(please upvote if it helped)

# Code
```
#define ll long long

ll find(int pos, int stat, int sign, vector<ll> &nums, vector<vector<vector<ll>>> &dp)
{
    if(pos == nums.size())
        return 0;
    
    ll ans = -1e15;
    
    if(dp[pos][stat][sign]!=-1e16)
        return dp[pos][stat][sign];
    
    if(stat == 0) // we have to start the construction of a new subarray
        ans = max(ans, nums[pos] + find(pos+1, 1, 1, nums, dp)); // start the construction with sign = 1 as the next element will have negetive sign
    
    else if(stat == 1) // A subarray is already under construction
    {
        if(sign == 1) // negetive sign
        {
            ans = max(ans, -nums[pos] + find(pos+1, 1, 0, nums, dp)); // continue construction with flipped sign
            ans = max(ans,  find(pos, 0, 0, nums, dp)); // end the construction and begin a new one at this index. Dont increase pos, just change stat to 0.
        }
    
        else if(sign == 0) // positive sign
        {
            ans = max(ans, nums[pos] + find(pos+1, 1, 1, nums, dp)); // continue construction with flipped sign
            ans = max(ans, find(pos, 0, 0, nums, dp));  // end the construction and begin a new one at this index. Dont increase pos, just change stat to 0.
        }
    }

    return dp[pos][stat][sign] = ans;
}

class Solution {
public:
    long long maximumTotalCost(vector<int>& nums) {

        vector<ll> t1(2, -1e16);
        vector<vector<ll>> t2(2, t1);
        vector<vector<vector<ll>>> dp(nums.size()+1, t2); //initializing to -1e16
    
        vector<ll> a(nums.begin(), nums.end()); // converted to long long just in case, to avoid overflow any kind of overflow.

        ll ans = find(0, 0, 0, a, dp);
        return ans;
    }
};
    

    
```