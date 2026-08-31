# Dart Solution with Explanation

**Author:** rayidrasal
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4660029/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4660029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int getMaximumGenerated(int n) {
       // Declare a list to store generated numbers
      List<int> nums = [];
       // Declare a variable to keep track of the maximum number
      int max = 0;
    // Iterate through numbers up to n
    for(int i = 0;i <= n;i++){
         // For the first two numbers (0 and 1), they are the same regardless of 'n'
          // Add these initial numbers to the list
        if(i == 0||i == 1){
            nums.add(i);
        }
       // For other numbers, determine whether they are even or odd
      
        else
        if(i % 2 == 0){
             // If even, add the value at half the index 'i'
            final int index = i~/2;
            nums.add(nums[index]);
        }
       // If odd, add the sum of values at half the index 'i' and half the index 'i' + 1
        else{
            final int index = i~/2;
            nums.add(nums[index]+nums[index+1]);
        }
       // Update the maximum value encountered so far
          // Update 'max' if the last element added to 'nums' is greater than the current 'max'
          max = max < nums.last ? nums.last : max;
       
    }
    return max;
  }
}
```