# C++ very simple solution

**Author:** himanshsh1704
**Votes:** 58
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/1379564/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/1379564/)

---

Here we need to find out subsequence so that now we can sort the array. 
Algo - 
1. We first sort the array.
2. Use 2 pointers approach let say i and j.
		i=0 and j=n-1;
	now if(nums[i]+nums[j]<=target) then we can make substrings out of that 
			next thing from this how many substrings we can make we need to maintain nums[i[ as minimum we need to take it and  the maximum element can be any from i+1 to j
	So, for every element we have two choices whether to take or not so, we have 2^(j-i) substrings out of that. and i++;
	else j--


```
class Solution {
public:
    int mod=1000000007;
    int numSubseq(vector<int>& nums, int target) 
    {
        sort(nums.begin(),nums.end());
        int res=0,n=nums.size(),i=0,j=n-1;
        vector<int>pow2(n+1,1);
        for(int i=1;i<=n;i++)
        {
            pow2[i]=(2*pow2[i-1])%mod;
        }
        while(i<=j)
        {
            if(nums[j]+nums[i]<=target)
            {
                res=(res+pow2[j-i])%mod;
                i++;
            }
            else
                j--;
        }
        return res;
    }
};
```

It would be great if you upvote.
	