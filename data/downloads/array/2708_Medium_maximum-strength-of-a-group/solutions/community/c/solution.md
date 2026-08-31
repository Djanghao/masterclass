# Simple Recursion

**Author:** MohakHarjani
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568709/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568709/)

---

```
class Solution {
public:
    long long ans = INT_MIN;
    void solve(vector<int>&nums, int index, long long product, int size)
    {
        if (index == nums.size()) 
        { 
            //we need a non empty group
            if (size != 0) ans = max(ans, product);  
            return; 
        }
        solve(nums, index + 1, product * nums[index], size + 1); //pick
        solve(nums, index + 1, product, size); //not pick
    }
    long long maxStrength(vector<int>& nums) 
    {
        solve(nums, 0, 1, 0);
        return ans;
    }
};
```