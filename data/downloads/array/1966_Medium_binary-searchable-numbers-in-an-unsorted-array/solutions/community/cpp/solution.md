# Simple linear algorithm that keeps track of min/max and eliminates non-searchable elements

**Author:** danluc
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/5892170/](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/5892170/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A number is searchable if and only if all the numbers that precede it in the array are smaller than it, and all numbers that follow it are larger than it. 
# Approach
<!-- Describe your approach to solving the problem. -->
Perform two traversals, one left to right keeping track of the maximum, and one right to left keeping track of the minimum, and eliminate numbers that are not searchable. Count the remaining ones.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```cpp []
class Solution {
public:
    int binarySearchableNumbers(vector<int>& nums) {
        const int n = nums.size();
        // Consider all elements are searchable, and remove those that are not
        vector<bool> searchable(n, true);
        int max = nums[0];
        for (int i = 1; i < n; ++i) {
            if (nums[i] >= max)
                max = nums[i];
            else
                // A larger number is at an index j < i. If we search nums[i]
                // and pick the j-th number as a pivot, we'll miss nums[i].
                searchable[i] = false;
        }
        int min = nums[n - 1];
        for (int i = n - 2; i >= 0; --i) {
            if (nums[i] <= min)
                min = nums[i];
            else
                // A smaller number is at an index j > i. If we search nums[i]
                // and pick the j-th number as a pivot, we'll miss nums[i].
                searchable[i] = false;
        }
        return std::count(searchable.begin(), searchable.end(), true);
    }
};
```