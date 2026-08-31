# Simple C++ solution

**Author:** gabit7
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/5390478/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/5390478/)

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
    int minProductSum(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end(), greater<>());

        int res = 0;
        for(int i = 0; i < nums1.size(); i++)
        {
            res += nums1[i] * nums2[i];
        }

        return res;
    }
};
```