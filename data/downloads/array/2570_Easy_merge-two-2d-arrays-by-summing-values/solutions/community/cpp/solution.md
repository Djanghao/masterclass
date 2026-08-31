# Using MAP || Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 24
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3203773/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3203773/)

---

# Approach
We just need to put the element to ordered hash map, and keep incrementing the value for all elements in the array.

# Code
```
class Solution {
public:
    vector<vector<int>> mergeArrays(vector<vector<int>>& nums1, vector<vector<int>>& nums2) {
        vector<vector<int>> ans;
        map<int, int> mp;
        for(auto n: nums1) mp[n[0]] += n[1];
        for(auto n: nums2) mp[n[0]] += n[1];
        for(auto m: mp) ans.push_back({m.first, m.second});
        return ans;
    }
};
```