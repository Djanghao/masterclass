# 🟢🔴🟢 Most Efficient Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5857590/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5857590/)

---

# Intuition
We are tasked with counting the number of "hills" and "valleys" in a list of integers. A "hill" occurs when a number is greater than both its adjacent numbers, and a "valley" occurs when a number is smaller than both its adjacent numbers. Additionally, we need to handle consecutive duplicate numbers by removing them, as they don't contribute to forming a hill or valley.

# Approach
1. Iterate through the list `nums` starting from the second element (index 1) to the second-to-last element (index `nums.length - 2`).
2. If consecutive elements are the same, remove duplicates to ensure comparisons happen between distinct values.
3. For each valid element:
   - Check if it forms a hill (if it is greater than both its neighbors).
   - Check if it forms a valley (if it is smaller than both its neighbors).
4. Count each hill or valley encountered.
5. Return the total count.

### Example Walkthrough:
**Input**:  
`nums = [2, 4, 4, 6, 3, 3, 1]`

1. Remove consecutive duplicates:  
   `nums = [2, 4, 6, 3, 1]`
   
2. Traverse the list:  
   - At index 1 (`4`): it forms no hill/valley.
   - At index 2 (`6`): it's a hill (greater than `4` and `3`).
   - At index 3 (`3`): it's a valley (smaller than `6` and `1`).

**Output**:  
There are 1 hill and 1 valley, so the result is `2`.

# Complexity
- **Time complexity**:  
  $$O(n)$$ where $$n$$ is the length of the list `nums`. We traverse the list once, and removing duplicates is also linear in complexity.
  
- **Space complexity**:  
  $$O(1)$$ if we modify the list `nums` in place, as no additional data structures are used that scale with the input size.

# Code
```dart
class Solution {
  int countHillValley(List<int> nums) {
    int hillsValleys = 0;
    
    // Iterate through the list and handle consecutive duplicates
    for (int i = 1; i < nums.length - 1; i++) {
      if (nums[i] == nums[i + 1]) {
        nums.removeAt(i + 1);
        i--;
        continue;
      }
      
      // Check for hill or valley
      if ((nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) || 
          (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])) {
        hillsValleys++;
      }
    }
    
    return hillsValleys;
  }
}
