# DP || 3D || C++|| WELL EXPLAINED

**Author:** desmos_2000
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/3338079/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/3338079/)

---

# Intuition
We have n times to roll the dice 
Each time the dice can have values from [1-----6]

We have to check for two condition 

If we are ith point 

Keep a check of i-1 and i-2 move

Because __gcd(i move , i-1 move) == 1 
and i!=i-1 move
and i!=i-2 move


# Approach
We will use a 3D dp matrix
Why 3D 

Because we have 3 changing variables 
1 ind (current move)
2 prev (previous move)
3 previous of previous 


At i th move we have to 6 options 

And for each move , we have to check for its validity 
```

for(int i = 1;i<=6;i++)
{
    //my current move can have 6 options 
    //each of my option has to satisfy the given       constraint

                if(p1!=i && p2!=i && (p1 == 0 || __gcd(p1 , i) ==1))
        {
            ans = ans+solve(dp , n , ind+1 , i , p1);
        }
}

```


# Complexity
- Time complexity:
O(36N) approximatly $$O(n)$$
- Space complexity:
O(36N) approximatly $$O(n)$$

# Code
```
class Solution {
public:
    int mod = 1e9+7;
    int distinctSequences(int n) {
        vector<vector<vector<int>>> dp(n+1 , vector<vector<int>>(7 , vector<int>(7 , -1)));
        return solve(dp , n , 0 , 0 , 0);
    }
    //we have three varying parameters
    //ind , prev , prev1
    //dp 3d dp is required

    int solve(vector<vector<vector<int>>> &dp , int n , int ind , int p1 ,int p2)
    {
        if(ind == n)
            return 1;
        if(dp[ind][p1][p2]!=-1)
            return dp[ind][p1][p2];
        long long ans = 0;
        for(int i = 1;i<=6;i++)
        {
            if(p1 != i && p2 != i && (p1 == 0 || __gcd(p1 , i) == 1))
            {
                //we can use this i , since it satisfies all the condition 
                ans = (ans%mod+(long long)solve(dp , n , ind+1 , i , p1)%mod)%mod;
            }
        }
        return dp[ind][p1][p2]= ans;
    }
};
```