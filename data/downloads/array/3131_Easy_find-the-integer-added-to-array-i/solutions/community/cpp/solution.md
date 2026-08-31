# O(N) || Two Approaches || C++

**Author:** fahad_Mubeen
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5082119/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5082119/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Approach 1
- apply insertion sort technique to get the smallest element at 0th index for both the vectors.
- return the difference of the 0th index of the two.
# Code
```
class Solution {
public:
    int addedInteger(vector<int>& nums1, vector<int>& nums2) {
        for(int i = nums1.size() - 1; i >= 1; i--){
            if(nums1[i] > nums1[i - 1]) swap(nums1[i], nums1[i - 1]);
        }
        for(int i = nums2.size() - 1; i >= 1; i--){
            if(nums2[i] > nums2[i - 1]) swap(nums2[i], nums2[i - 1]);
        }
        return nums2[0] - nums1[0];
    }
};
```
# Approach 2
- Optimization of approach 1.
- Find the minimum element of both the vectors and return their difference.
- Slightly better time complexity.
# Code 
```
class Solution {
public:
    int addedInteger(vector<int>& nums1, vector<int>& nums2){
        int min1 = INT_MAX, min2 = INT_MAX;
        for(auto x : nums1) min1 = min(min1, x);
        for(auto x : nums2) min2 = min(min2, x);
        return min2 - min1;
    }
};
```
