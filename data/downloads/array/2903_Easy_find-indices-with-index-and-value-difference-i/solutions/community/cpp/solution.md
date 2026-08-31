# Simple , Easy and clean Code || C++ Solution

**Author:** ajay_1134
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169763/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169763/)

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
    vector<int> findIndices(vector<int>& nums, int d, int v) {
        int n = nums.size();
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(abs(i-j) >= d && abs(nums[i] - nums[j]) >= v) return {i,j};
            }
        }
        return {-1,-1};
    }
};
```