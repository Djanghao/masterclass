# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 5
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/4930986/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/4930986/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) 
    {
        if(!k or k==1) return 0;
        int i = 0, j = 0, ans = 0, n = nums.size();
        long long product = 1;
        while(j<n)
        {
            product *= nums[j];
            while(product >= k) product /= nums[i++];
            ans += (j-i+1);
            j++;
        }
        return ans;
    }
};
```