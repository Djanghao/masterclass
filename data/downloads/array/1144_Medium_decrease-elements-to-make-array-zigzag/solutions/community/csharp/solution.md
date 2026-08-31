# C# Greedy Algorithm. Again.

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/5501669/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/5501669/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of transforming the given array into a zigzag array with the minimum number of moves, we need to consider both possible zigzag patterns and calculate the required moves for each pattern. Then, we will return the minimum of the two.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initalize Move Counters:
//  *movesForEven: Counter for the number of moves needed if we want the even-indexed elements to be 
//  peaks.
//  *movesForOdd: Counter for the number of moves needed if we want the odd-indexed elements to be peaks.
//  Calculate Moves for Even-Indexed Peaks:
//  *Iterate through the array considering only even indices.
//  *For each even-indexed element, determine the minimum value it needs to be to form a peak, which is 
//  Math.Min(left, right) - 1.
//  *If the current element is greater than or equal to this target value, add the difference to 
//  movesForEven.
//  Calculate Moves for Odd-Indexed Peaks:
//  *Similarly, iterate through the array considering only odd indices.
//  *For each odd-indexed element, determine the minimum value it needs to be to form a peak.
//  *If the current element is greater than or equal to this target value, add the difference to movesForOdd.
//  Return the Minimum Moves:
//  *Return the minimum of movesForEven and movesForOdd.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where n is the length of the input array 'nums'.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1), meaning it uses constant space.
___

# Code
```
public class Solution {
    public int MovesToMakeZigzag(int[] nums) {
        int n = nums.Length;
        if (n == 1) return 0;

        int movesForEven = 0;
        int movesForOdd = 0;

        // Check for even-indexed parts
        for (int i = 0; i < n; i += 2) {
            int left = (i > 0) ? nums[i - 1] : int.MaxValue;
            int right = (i < n - 1) ? nums[i + 1] : int.MaxValue;
            int target = Math.Min(left, right) - 1;
            if (nums[i] >= target) {
                movesForEven += nums[i] - target;
            }
        }

        // Check for odd-indexed peaks
        for (int i = 1; i < n; i += 2) {
            int left = nums[i - 1];
            int right = (i < n - 1) ? nums[i + 1] : int.MaxValue;
            int target = Math.Min(left, right) - 1;
            if (nums[i] >= target) {
                movesForOdd += nums[i] - target;
            }
        }

        // Return the minimum moves required for either pattern
        return Math.Min(movesForEven, movesForOdd);
    }
}

```