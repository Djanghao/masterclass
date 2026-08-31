# Easiest Solution | [C++] | Basic Approach

**Author:** kshzz24
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3229079/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3229079/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
If we have to take difference of MAX and MIN Element in a pack of K elements, then why not sort it and take 2 Pointers placed at 0th Position and (0+k-1)th Position respectively and take the difference of both and continue the same process until array is finished.
 

# Code
```
class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        int i = 0;
        int j = k-1;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        int ans =INT_MAX;
        while(j<n){
           ans = min(ans,nums[j++]-nums[i++]);
        }
        return ans;
    }
};
```