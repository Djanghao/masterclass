# Easy solution

**Author:** kevinsong880125
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/4036195/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/4036195/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just gotta sort the vector and check one by one
# Approach
<!-- Describe your approach to solving the problem. -->
Sort vector, then compare current element to the one on its right. Apply the requirements.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn) because of std::sort

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {
public:
    bool isConsecutive(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int i = 0; i < nums.size() - 1; i++){
            if(nums[i + 1] - 1 > nums[i] or nums[i + 1] == nums[i]){
                return false;
            }

        }
        return true;
    }
};
```