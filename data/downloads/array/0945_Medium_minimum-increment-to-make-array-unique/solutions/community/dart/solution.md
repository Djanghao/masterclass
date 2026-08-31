# Dart solution | Sorting | Easy.

**Author:** mohamedsameh92
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5313459/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5313459/)

---

# Intuition
To make all elements in the array unique with the minimum number of moves, we can leverage the property of sorting. By sorting the array, we can easily identify duplicates and ensure the elements are in non-decreasing order. Once the array is sorted, we can iterate through it and make the necessary increments to ensure each element is greater than the previous one.

# Approach
1. Sort the Array: Sorting the array will bring all duplicates next to each other, making it easier to manage them.
2. Iterate Through the Sorted Array: For each element, check if it is less than or equal to the previous element. If it is, increment it to be one more than the previous element.
3. Count the Moves: Keep a count of all the increments made to get the minimum number of moves.

# Complexity
- Time complexity: O(nlogn).

- Space complexity: O(n).


# Code
```
class Solution {
  int minIncrementForUnique(List<int> nums) 
  {   
    if (nums.isEmpty) return 0;

    // Step 1: Sort the array
    nums.sort();

    int movesNum = 0;

    // Step 2: Iterate through the sorted list and ensure uniqueness
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            // Calculate how much we need to increment the current number
            int increment = nums[i - 1] - nums[i] + 1;
            nums[i] += increment;
            movesNum += increment;
        }
    }
    return movesNum;
   }
}
```