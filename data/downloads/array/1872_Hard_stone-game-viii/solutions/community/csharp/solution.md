# beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/5929905/](https://leetcode.com/problems/stone-game-viii/solutions/5929905/)

---

# Intuition
Each player can only remove stones from the left, and after their turn, they create a new stone that represents the sum of the removed stones. This means the game is about making choices that affect future outcomes, so players need to consider both their immediate score and what their opponent can do next.

# Approach
Calculate the total sum of stones, then iterate from the second last stone backward, updating the prefix sum and finding the maximum score difference.

# Complexity
- Time complexity:
O(n) because we loop through the stones a couple of times, where n is the number of stones.

- Space complexity:
O(1) since we only use a few extra variables, regardless of the input size.

# Code
```csharp []
public class Solution {
    public int StoneGameVIII(int[] stones) {
        // Calculate the total sum of all stones (prefix sum)
        int totalSum = 0;
        foreach (var stone in stones) {
            totalSum += stone;
        }

        // Initialize the maximum score difference with the total sum
        int maxDifference = totalSum;

        // Iterate from the second last stone to the second stone
        for (int i = stones.Length - 1; i >= 2; i--) {
            // Update the prefix sum by removing the value of the current stone
            totalSum -= stones[i];
            
            // Calculate the maximum score difference
            maxDifference = Math.Max(maxDifference, totalSum - maxDifference);
        }

        // Return the maximum score difference
        return maxDifference;
    }
}

```