# Explained - iteration || Very simple and easy to understand

**Author:** kreakEmp
**Votes:** 7
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/3595215/](https://leetcode.com/problems/semi-ordered-permutation/solutions/3595215/)

---

## Approach
1. Find the ith index of min val 1 => we need to do i operation to move 1 to first position
2. Find the ith index of the max val n => we need to do (n - i - 1) operation to take it to last position
3. Take the sum of above two as the answer. Only corner case is when the ith index of 1 is larger than ith index of n - in this case we need to reduce the ans by 1 as the 1 & n cna be swapped at the same time so that we count it as 1 operation in place of 2.
 
# Code
```
class Solution {
public:
    int semiOrderedPermutation(vector<int>& nums) {
        int imin = 0, imax = nums.size(), n = nums.size();
        for(int i = 0; i < n; ++i){
            if(nums[i] == 1) imin = i;
            if(nums[i] == n) imax = i;
        }
        if(imin < imax) return (imin + n - imax - 1);
        return (imin + n - imax - 1) - 1;
    }
};
```