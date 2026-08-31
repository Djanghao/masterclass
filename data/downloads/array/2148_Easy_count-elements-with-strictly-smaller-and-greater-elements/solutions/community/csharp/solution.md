# 🟢🔴🟢 2 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5829186/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5829186/)

---

# Intuition
The problem asks to count how many elements in the list are strictly greater than the smallest element and strictly smaller than the largest element. The sorted nature of the list helps simplify this process by positioning the smallest element at the start and the largest at the end of the list.

The idea is to remove the smallest and largest elements and then count how many numbers lie between them.

# Approach
1. **Sort the List**: First, we sort the list to easily identify the smallest and largest elements.
2. **Filter Elements**: After sorting, we iterate through the list and count the numbers that are greater than the smallest element (`nums.first`) and less than the largest element (`nums.last`).
3. **Return the Count**: Finally, return the count of elements that satisfy the condition.

# Example Walkthrough

### Example 1:
**Input**:  
`nums = [1, 2, 2, 3]`

1. **Sort the List**: After sorting, `nums = [1, 2, 2, 3]`.
2. **Filter Elements**:
   - First element `1` is the smallest, and last element `3` is the largest.
   - The only elements greater than `1` and smaller than `3` are the two `2`s.
   
**Output**:  
The count is `2`.

---

### Example 2:
**Input**:  
`nums = [1, 1, 1, 1]`

1. **Sort the List**: The list remains `[1, 1, 1, 1]`.
2. **Filter Elements**: There are no elements greater than `1` or smaller than `1`.

**Output**:  
The count is `0`.

# Complexity
- **Time Complexity**:  
  The time complexity is \\( O(n \\log n) \\) due to sorting the list of numbers. Filtering elements is \\( O(n) \\), so the overall time complexity is dominated by the sorting step, making it \\( O(n \\log n) \\).

- **Space Complexity**:  
  The space complexity is \\( O(n) \\), as we store the sorted list and perform filtering, but no additional space is required beyond the list itself.

# Code
```dart
class Solution {
  int countElements(List<int> nums) {
    nums.sort();
    return nums.where((e) => e > nums.first && e < nums.last).length; 
  }
}
