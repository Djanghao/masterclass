# C++ Using STL std::equal_range

**Author:** alexisgoar
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/2838774/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/2838774/)

---


# Code
```
class Solution {
public:
    bool isMajorityElement(vector<int>& nums, int target) {
        auto [it1,it2] = std::equal_range(nums.begin(),nums.end(),target); 
        return std::distance(it1,it2) > nums.size()/2; 
    }
};
```