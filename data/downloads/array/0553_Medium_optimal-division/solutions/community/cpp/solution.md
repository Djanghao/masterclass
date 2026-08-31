# C++ 100% Beats.

**Author:** ramudarsingh46
**Votes:** 6
**Link:** [https://leetcode.com/problems/optimal-division/solutions/5644769/](https://leetcode.com/problems/optimal-division/solutions/5644769/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string optimalDivision(vector<int>& nums) {
        string str = to_string(nums[0]);
        if(nums.size() == 1)
            return str;
        if(nums.size() == 2) {
            str += "/" + to_string(nums[1]);
            return str;
        }
        str += "/(" + to_string(nums[1]);
        for(int i=2; i<nums.size(); i++)
            str += "/" + to_string(nums[i]);
        str += ")";
        return str;
    }
};
```