# Efficient and readable

**Author:** aqeelvp
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/4043006/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/4043006/)

---


# Approach
<!-- Describe your approach to solving the problem. -->

1. Find the smallest and largest out of order number
2. Find the positions where they can be placed

# Code
```
class Solution {
  int findUnsortedSubarray(List<int> nums) {
    
  int smallest = 0;
  int largest = 0;
  
  /// return the number at index if it's out of order other wise 
  /// return's null
  int? outOforder(int index) {
    if (index == 0) {
      if (nums.length > 1 && nums[index] > nums[index + 1]) {
        return nums[index];
      }
      return null;
    }

    if (index == nums.length - 1) {
      if (nums.length > 1 && nums[index - 1] > nums[index]) {
        return nums[index];
      }
      return null;
    }

    if (nums[index] > nums[index + 1] || nums[index - 1] > nums[index]) {
      return nums[index];
    }

    return null;
  }
  
  /// Update the smallest and largest out of order number
  void assign(int number) {
    if (smallest == 0 && largest == 0) {
      smallest = number;
      largest = number;
      return;
    }

    if (number < smallest) {
      smallest = number;
    }

    if (number > largest) {
      largest = number;
    }
  }

  for (int i = 0; i < nums.length; i++) {
    int? number = outOforder(i);
    if (number != null) {
      assign(number);
    }
  }
  
  /// Checks if there is no out of order numbers
  if(smallest == 0 && largest == 0) {
    return 0;
  }
  
  /// Find the position where smallest number can be placed
  int j = 0;
  int k = 0;
  for (int i = 0; i < nums.length; i++) {
    int n = nums[i];
    if (smallest < n) {
      j = i;
      break;
    }
  }
  /// Find the position where the largest number can be placed 
  for (int i = nums.length - 1; i >= 0; i--) {
    int n = nums[i];
    if (largest > n) {
      k = i;
      break;
    }
  }
  // calculate the length of sub array
  if (j < k) {
    return ((k - j) + 1);
  } else {
    return 0;
  }

  }
}
```