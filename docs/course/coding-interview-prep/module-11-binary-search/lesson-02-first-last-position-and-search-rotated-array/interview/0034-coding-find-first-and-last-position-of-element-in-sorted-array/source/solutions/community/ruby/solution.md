# 🚩O(n) 📈Simple Solution with detailed explanation | 🚀Using Simple Approach | Beats 100%

**Author:** nikkipriya_78
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4148057/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4148057/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this question is to count the number of occurrences of the target value in the sorted array and then calculate the starting and ending positions based on the count.

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a count variable to keep track of the number of occurrences of the target value and set it to 0.
2. Iterate through the array from left to right.
3. When you encounter the target value, increment the count.
4. If the count becomes greater than 0, this means you've found at least one occurrence of the target value. Set the starting position to the index of the first occurrence.
5. Calculate the ending position as the starting position plus the count minus one since all occurrences are adjacent in a sorted array.
6. Return the starting and ending positions as the result.

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this approach is O(n), where n is the number of elements in the input array. In the worst case, you may need to traverse the entire array to count the occurrences and find the starting and ending positions.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) because it only uses a constant amount of extra space to store the count and the result vector, regardless of the size of the input array.

---

# Code
```
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> result = {-1, -1};
        int count = 0;
        
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] == target) {
                if (count == 0) {
                    result[0] = i;
                }
                count++;
            }
        }
        
        if (count > 0) {
            result[1] = result[0] + count - 1;
        }
        
        return result;
    }
};

```