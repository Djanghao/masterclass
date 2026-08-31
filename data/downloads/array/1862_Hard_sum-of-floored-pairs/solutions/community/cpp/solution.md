# No Advanced DSA| Lower_Bound + Basic Maths

**Author:** its_gupta_ananya
**Votes:** 6
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/1210269/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/1210269/)

---


```
#define mod 1000000007
class Solution {
public:
    int sumOfFlooredPairs(vector<int>& nums) {
        
        int n = nums.size();
        unsigned long long int ans =0;
        
        sort(nums.begin(), nums.end());
        
        for(int i=0;i<n;++i){
            int ind = 0;
			//k denotes the next multiple of nums[i] 
            for(unsigned long long int k = nums[i]; k <= nums[n-1]; k += nums[i]){
                ind = lower_bound(nums.begin() + ind, nums.end(), k) - nums.begin();
                // Add 1 for every value greater than or equal to k
				ans = (ans + n - ind)%mod; 
				//(n-ind) denotes the number of elements greater than equal to k
            }
        }
        return ans;
    }
};
```

**Update:- The test cases have been updated and the code gives TLE for bigger test cases like [1,1,1,1,11,........,10^5]. Optimisations for the same are welcome, Thank you!**