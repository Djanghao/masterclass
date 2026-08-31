# C++ || count subarrays with sum % mod == k || Easy Explanation

**Author:** anupam_713
**Votes:** 76
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995124/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995124/)

---


/*
special elements are those elements whose elem % mod == k

we have to focus on counting the no of subarrays 
whose count of special elements % mod == k

now let's convert these special elements into 1 
and non special elements into 0

now instead of focussing on the count of special elements in subarray 
we can focus on the sum of elements in subarray
as count is same as sum now.. 

we have to find those subarrays whose sum % mod == k

now this comes to down to some standard questions like 

https://leetcode.com/problems/subarray-sums-divisible-by-k/
```

*/
class Solution {
public:
    long long countInterestingSubarrays(vector<int>& nums, int modulo, int k) {
        #define int long long int 
        int ans = 0;
        int n = nums.size();
        for(int i = 0; i < n;i++)
        {
            if (nums[i] % modulo == k)
            {
                nums[i] = 1;
            }
            else
            {
                nums[i] = 0;
            }
        }
        unordered_map <int, int> mp;
        int total = 0;
        for(int i = 0; i < n;i++)
        {
            total += nums[i];
            int mod_val = total % modulo;
            if (mod_val == k) ans++;
            int find = mod_val - k;
            if (find < 0)
            {
                find += modulo;
            }
            ans += mp[find];
            mp[mod_val]++;
        }
        return ans;
        #undef int 
    }
};
```