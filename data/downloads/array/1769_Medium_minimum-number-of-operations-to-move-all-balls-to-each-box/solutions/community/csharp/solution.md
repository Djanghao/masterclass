# O(n) Solution

**Author:** BharatVaishnavM
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5957404/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5957404/)

---

# Intuition
The problem requires us to determine how many moves are needed to move balls from other boxes into each box. A move consists of transferring a ball from one box to another, and the number of moves is determined by the distance between the boxes. 

To solve this efficiently, we can utilize a two-pass approach, where we first calculate moves based on the left side of each box and then based on the right side. This way, we can accumulate the total moves required for each box in linear time.

# Approach
1. **Initialization**: Start by initializing an array `result` to hold the number of moves for each box, and variables to keep track of the total moves and the number of balls encountered.
   
2. **First Pass (Left to Right)**:
   - Iterate through the `boxes` string from left to right.
   - For each box, add the current total moves to the result for that box.
   - If the current box contains a ball (`'1'`), increment the ball count.
   - Update the total moves for the next box by adding the current ball count.

3. **Second Pass (Right to Left)**:
   - Reset the total moves and ball count.
   - Iterate through the `boxes` string from right to left using similar logic to accumulate moves based on balls on the right.

4. **Return Result**: Finally, return the `result` array containing the total moves required for each box.

# Complexity
- Time complexity: 
  - The solution involves two passes through the boxes, resulting in a total time complexity of $$O(n)$$, where $$n$$ is the length of the `boxes` string.
  
- Space complexity: 
  - The space complexity is $$O(n)$$ due to the storage of the result array which holds the number of moves for each box.

# Code
```csharp
public class Solution {
    public int[] MinOperations(string boxes) {
        int n = boxes.Length;
        int[] result = new int[n];

        // First pass: calculate moves from the left
        int moves = 0; // Total moves for current box
        int balls = 0; // Number of balls seen so far
        for (int i = 0; i < n; i++) {
            result[i] += moves; // Store the current total moves for box i
            if (boxes[i] == '1') {
                balls++; // Count the ball in the current box
            }
            moves += balls; // Update moves for the next box
        }

        // Second pass: calculate moves from the right
        moves = 0; // Reset moves for the second pass
        balls = 0; // Reset balls for the right pass
        for (int i = n - 1; i >= 0; i--) {
            result[i] += moves; // Add moves calculated from the right
            if (boxes[i] == '1') {
                balls++; // Count the ball in the current box
            }
            moves += balls; // Update moves for the next box
        }

        return result;
    }
}
