# O(n* 1024) Memoization + Bitmask

**Author:** Priyanshu_Chaudhary_
**Votes:** 40
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203755/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203755/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
* We want no prime factor should occur more than once in our product of numbers.
*Use only prime numbers for bitmask state of dp.
*This reduces the number of states for bitmask from $${2^{30}}$$ to $${2^{10}}$$
# Approach
<!-- Describe your approach to solving the problem. -->
* We have 10 prime numbers from 0 to 30:   $$ 2,3,5,7,11,13,17,19,23,29;$$
* If any of them comes twice in our product we wont be having sqaure free integer.
* We define the state of dp as `i(current element)` and `mask (in which set bits represent the prime number already present in our product)`
* For each I we can either include it in our product or not include it.
* We can include it only if multiplying the number with the mask does not results in a prime number occuring twice as factor;
* For example, if i have mask as $$0000001010$$ then nums[i] should not have 3 and 7 as factors and also it should not have any of these factors occuring twice.

key notes:
* `count` variable is used to calculate how many time a prime factor divides nums[i]
* `((count==1)&&((mask>>j)&1))` checks whether a prime factor is already there in the mask or not

# Complexity
- Time complexity:$$O(n* {2^{10}}))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n* {2^{10}}))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
#define ll long long
class Solution {
public:
    int memo[1001][1024];
    vector<int>vec={2,3,5,7,11,13,17,19,23,29};
    ll mod=1e9+7;
    ll dp(vector<int>&nums,int i,int mask)
    {
        if(i==nums.size()) return 1;
        if(memo[i][mask]!=-1) return memo[i][mask];
        int temp=mask,flag=1;
        for(int j=0;j<10;j++)
        {
            int num=nums[i],count=0;
            while(num%vec[j]==0)  num/=vec[j], count++;
            if(count>=2 or ((count==1) and ((mask>>j)&1)))
            {
                flag=0;
                break;
            }
            if(count) temp=temp|(1<<j);
        }
        if(flag)
               return memo[i][mask]=(dp(nums,i+1,mask)+dp(nums,i+1,temp))%mod;
        else
              return memo[i][mask]=dp(nums,i+1,mask);
        
    }
    
    int squareFreeSubsets(vector<int>& nums) 
    {
        memset(memo,-1,sizeof(memo));
        return 1LL*(dp(nums,0,0)-1+mod)%mod;  
    }
};
```