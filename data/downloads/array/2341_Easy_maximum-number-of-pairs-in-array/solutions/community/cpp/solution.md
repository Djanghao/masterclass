# Easy to understand C++ solution TC: O(n) SC:O(n) ✅✅

**Author:** om_limbhare
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/3078532/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/3078532/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> numberOfPairs(vector<int>& nums) {
        map <int,int> mp;
        for(int i:nums) mp[i]++;
        int count=0,count1=0;
        for(auto it:mp){
            count+=(it.second/2);
            count1+=(it.second%2);
        }
        return {count,count1};
    }
};
```