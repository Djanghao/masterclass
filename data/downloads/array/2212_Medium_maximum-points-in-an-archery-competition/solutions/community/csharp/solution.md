# C# Brute Force with Bitmasking

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/5917369/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/5917369/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Small problem size: The small number of sections (12) suggests that exploring all subsets is feasible.
- Subset optimization: Each subset corresponds to a choice of sections Bob wants to win.
- Constraint satisfaction: For each subset, check if Bob can outscore Alice given the available arrows.
- Track the optimal solution: Find the subset with the maximum score while using at most numArrows arrows.
___
# Approach
- <!-- Describe your approach to solving the problem. -->Bitmasking:
*We generate all possible subsets of sections Bob can target using bitmasking (mask ranges from 
0 to 2^12 - 1).
*Each bit in the mask indicates whether Bob is targeting a particular section.
- Calculate Arrows Used and Score: For each section in the subset (where the bit is set), we calculate the arrows needed (aliceArrows[i] + 1) and the score.
- Check Validity: If the total arrows used are within the limit, we update the result if this subset gives a better score.
- Distribute remaining Arrows: After finding the best subset, any remaining arrows are added to section 0 (or any section).
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(2^n * n), where 'n' = 12.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
We use an array size of 12 to store Bob's arrows, so the space complexity is O(n).
No additional large data structures are needed beyond a few arrays and variables.
___

# Code
```csharp []
using System;

public class Solution {
    public int[] MaximumBobPoints(int numArrows, int[] aliceArrows) {
        int maxScore = 0;
        int[] result = new int[12];
        
        // Iterate through all possible subsets using bitmasking
        for (int mask = 0; mask < (1 << 12); mask++) {
            int arrowsUsed = 0;
            int score = 0;
            int[] bobArrows = new int[12];

            // Calculate the number of arrows used and the score for this subset
            for (int i = 0; i < 12; i++) {
                if ((mask & (1 << i)) != 0) { // If Bob targets this section
                    bobArrows[i] = aliceArrows[i] + 1; // Bob needs one more arrow than Alice
                    arrowsUsed += bobArrows[i];
                    score += i; // Add the score for this section
                }
            }

            // If the arrows used are within the limit, check if this is the best score
            if (arrowsUsed <= numArrows && score > maxScore) {
                maxScore = score;
                result = (int[])bobArrows.Clone(); // Update the result with this subset
            }
        }

        // Distribute any remaining arrows to section 0 (or any section)
        int remainingArrows = numArrows - Sum(result);
        if (remainingArrows > 0) {
            result[0] += remainingArrows;
        }

        return result;
    }

    // Helper method to calculate the sum of an array
    private int Sum(int[] arr) {
        int sum = 0;
        foreach (int val in arr) {
            sum += val;
        }
        return sum;
    }
}
```