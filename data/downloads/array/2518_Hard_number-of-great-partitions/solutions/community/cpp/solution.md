# [C++] | DP (O(n*k)) | Complete Explanation

**Author:** tyagsa
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/2948074/](https://leetcode.com/problems/number-of-great-partitions/solutions/2948074/)

---

# Intuition
My first thought was to look at what will be the types of partitions we can make.
# Approach

Let the 2 partitions be called P1 and P2. We can make some observations 
1. if 2*k > sum(array) then return 0 
2. if n == 1 then return 0 (since partitions can not be empty)
3. the partition P1 and P2 can be of 3 types
	(a) ```sum(P1) >= k and sum(P2) >= k```
	(b) ```sum(P1) < k and sum(P2) > k```
	(c) ```sum(P1) > k and sum(P2) < k```
	* note that case (b) and (c) are symmetric
4. Instead of counting number of partitions P1 and P2 such that sum(P1) >= k and sum(P2) >= k,
	let us instead count the number of partitions P1 and P2 such that sum(P1) < k and sum(P2) > k:
	
    let count of such partitions be X :
	then our answer will be - 
        ```ans = (total ways of partitioning the array in any manner ) - 2*X ( note that we are muliplying by 2 to also count for the case where sum(P1) > k and sum(P2) < k )```

So the problem simply boils down to calculating X, we can use dynamic programming to do this:
let ```dp[i][j]``` indicate the number of segments of the array (from 0 - i index) such that their sum is equal to j:
the transition will be - ```dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i]]```
we can then simply sum up ```dp[n-1][1] + dp[n-1][2] + dp[n-1][3] + ... dp[n-1][k-1]``` to find X ;

the total ways of paritioning the array ( such that both P1 and P2 are non empty) = ```2^(n) - 2 (the two cases we are substracting are when p1 or p2 is empty)```

# Complexity
- Time complexity:
O(n*k) - To fill the DP Table

- Space complexity:
O(n*k) - For the DP Table (can be optimized to O(k)) 

# Code
```
#define ll long long
#define mod 1000000007
ll mpow(ll a, ll b, ll m)
{
	if (b == 0)
		return 1;
	ll x = mpow(a, b / 2, m);
	x = (x * x) % m;
	if (b % 2)
	{
		x = (x * a) % m;
	}
	return x;
}
class Solution {
public:
    int countPartitions(vector<int>& nums, int k) {
        ll totSum =0;
        int n = nums.size();
        for(auto node : nums) totSum += node;
        if((2*k)>totSum) return 0;
        sort(nums.begin(),nums.end());
        
        if(n == 1) return 0;
        
        vector<vector<ll>> dp(n,vector<ll>(k,0));
        
        for(int i =0 ;i<n ; i+=1){
            for(int j =0; j < k; j+=1){
                if(!i && !j){
                    dp[i][j] = 1;
                    continue;
                }
                if(i == 0){
                    if(j==nums[i]) dp[i][j] = 1;
                    continue;
                }
                if(nums[i]>j) dp[i][j] = dp[i-1][j];
                else{
                    dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i]];
                    dp[i][j] %= mod;
                }
            }
        }
        
        ll ways= 0;
        for(int i = 1; i< k ; i+=1){
            ways += dp[n-1][i];
        }
        ways %= mod;
        ll totWaysOfDividing = mpow(2,n,mod);
        totWaysOfDividing -= 2;
        totWaysOfDividing -= 2*ways;
        totWaysOfDividing = (totWaysOfDividing%mod + mod)%mod;
        return totWaysOfDividing;
        
        
        
    }
};
```