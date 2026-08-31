# Here's a simple and well- explained Dart solution of the problem.

**Author:** _abhiramks
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929462/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929462/)

---

******Bold******# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int countMaxOrSubsets(List<int> nums) {
    int maxOr = 0;
 // Step 1: Find the maximum possible OR value of all elements combined
    for (int num in nums) {
      maxOr |= num;  
    }
 // Step 2: Recursive function to count subsets with max OR
    int countSubsets(int index, int currentOr) {
      if (index == nums.length) {
        return currentOr == maxOr ? 1 : 0;
      }
    // Option 1: Include current element in subset and OR it
      int include = countSubsets(index + 1, currentOr | nums[index]);
     // Option 2: Exclude current element from subset
      int exclude = countSubsets(index + 1, currentOr);
            // Return total count (including and excluding current element)
      return include + exclude;
    }
  // Step 3: Start the recursive counting from index 0 and initial OR value 0
    return countSubsets(0, 0);
  }
}


```