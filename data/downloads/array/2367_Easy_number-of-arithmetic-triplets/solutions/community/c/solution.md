# ✅ A generic Dynamic Programming  (A[i] - diff)  || [Intuition Updated]

**Author:** Rowque
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2390787/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2390787/)

---

**This Approach even works if the array is unsorted or elements are negative or diff is negative**

**Similar to [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/).**
We simply save the value for every we have seen till now in a array and our count will be `cnt[A[i]]= cnt[A[i]-diff]+1` which is typical Dynamic Programming,
that we exactly do in **Longest Increasing subsequence.**

On the way get count for `A[i]-diff` Value and increase result if sequence length till this number is `>=3`.

# This Question is a simpler version of this:
+ [1027. Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)

**Intuition**:

We compute answer on the way. But how??
Basically lets say the sequence is `[a,b,c] is a AP` with `diff of k`.
So lets say we are at **b** element , so which element should be pick actually which will make **AP** with **b**???
If we know the **diff** , then its easy for us to predict the number we are looking for, and that number is **b-diff**.

# So we simply do this for every element we encounter and if the AP length till that element>=3 , then we will get an extra pair.

**Talking about unique Pairs**:
We always get unique pairs by default. 
Because if we considered indices [1,2,3], then we are not even considering its count again in the process. 
# C++     
	int arithmeticTriplets(vector<int>& nums, int diff) {
        int dp[201]{};
        int res=0;
        for(auto i:nums){ 
			dp[i]= i>=diff? dp[i-diff]+1 : 1;
            if(dp[i]>=3) res++; 
        }
        return res;
    }
	
# Using Hashmap
    int arithmeticTriplets(vector<int>& nums, int diff) {
       unordered_map<int,int> dp;
       int res=0;
       for(auto i:nums) 
	       if((dp[i]=dp[i-diff]+1)>=3) res++;
       return res;
    }
**Worst Time** - O(`200`)
**Worst Space** - O(`201`)