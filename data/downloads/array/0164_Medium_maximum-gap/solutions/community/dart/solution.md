# Easy and Best way to find Maximum gap in the array.

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/5398546/](https://leetcode.com/problems/maximum-gap/solutions/5398546/)

---

# Intuition
When looking to find the maximum gap between successive elements in an array, the first thought is to sort the array. Once sorted, the maximum gap will be found between two consecutive elements.

# Approach
1. **Check for Short Array**:
   - If the array has fewer than two elements, return 0 since no gap can exist.
   
2. **Sort the Array**:
   - Sort the input array. This will arrange the elements in ascending order.
   
3. **Find Maximum Gap**:
   - Initialize a variable `maximumGap` to store the maximum gap found.
   - Iterate through the sorted array starting from the second element.
   - For each element, calculate the gap between it and the previous element.
   - Update `maximumGap` if the current gap is larger than the previous maximum gap.
   
4. **Return Result**:
   - After iterating through the array, return the value of `maximumGap`.

This approach ensures that we find the maximum gap efficiently by leveraging the sorted order of the elements.

# Complexity
- Time complexity: $$O(n \\log n)$$
  - Sorting the array takes \\(O(n \\log n)\\) time, where \\(n\\) is the length of the array.
  - Iterating through the array to find the maximum gap takes \\(O(n)\\) time.
  - The overall time complexity is dominated by the sorting step.

- Space complexity: $$O(1)$$
  - The space complexity is constant because we are not using any extra space that grows with the input size (excluding the space required for sorting, which is typically \\(O(\\log n)\\) for in-place sorting algorithms).

# Code
```dart
class Solution {
  int maximumGap(List<int> nums) {
    // If the array has less than two elements, return 0 as no gap can exist
    if (nums.length < 2) return 0;
    
    // Sort the array
    nums.sort();
    
    // Initialize the maximum gap variable
    int maximumGap = 0;
    
    // Iterate through the sorted array to find the maximum gap
    for (int i = 1; i < nums.length; i++) {
        maximumGap = max(maximumGap, (nums[i] - nums[i - 1]));
    }
    
    // Return the maximum gap found
    return maximumGap;
  }
}
