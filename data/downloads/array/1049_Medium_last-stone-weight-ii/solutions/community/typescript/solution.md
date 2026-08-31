# Explained: Dynamic Programming + Recursive Backtracking with Memoization

**Author:** uncoded
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/5799304/](https://leetcode.com/problems/last-stone-weight-ii/solutions/5799304/)

---

### **First Solution: Recursive with Memoization**

- **Intuition**:
  The core idea is to split the stones into two groups and minimize the absolute difference between their weights. For each stone, we can either add it to one group or the other. By recursively trying all combinations of groupings and keeping track of the current weight of both groups, we can find the optimal solution.

- **Approach**:
  1. **Recursion**: Start with the first stone and recursively decide whether to place it in group 1 or group 2.
  2. **Memoization**: To avoid recalculating results for the same group weight configurations, memoization is used to store previously computed results. The key to the memoization table is the index of the stone and the current weights of the two groups.
  3. **Base Case**: Once all stones have been considered (i.e., when the index equals the number of stones), the recursion returns the absolute difference between the two group weights.
  4. **Optimization**: At each step, the minimum difference between group weights is computed and stored in the memoization table to avoid redundant calculations.

# Code
```typescript []
function lastStoneWeightII(stones: number[]): number {
    
    // Create a memoization object to store computed results for specific states
    let memo = {};

    // Helper function to recursively explore different ways to split the stones
    const findMin = (index: number, weight1: number, weight2: number): number => {
        // Base case: If all stones have been processed, return the absolute difference between the two groups
        if (index === stones.length) return Math.abs(weight2 - weight1);

        // Generate a unique key for the current state (index, weight1, weight2)
        const key = index + ',' + weight1 + ',' + weight2;

        // If the result for this state has already been computed, return the cached result
        if (key in memo) return memo[key];

        // Recursively try to add the current stone to either group and get the minimum difference
        const result = Math.min(
            findMin(index + 1, weight1 + stones[index], weight2),  // Add the stone to group 1
            findMin(index + 1, weight1, weight2 + stones[index])   // Add the stone to group 2
        );

        // Store the result in memoization object to avoid recomputation
        memo[key] = result;

        // Return the minimum difference
        return result;
    };

    // Start the recursion from the first stone, with initial weights of both groups as 0
    return findMin(0, 0, 0);
}
```

### **Second Solution: Dynamic Programming with Set**

- **Intuition**:
  This solution is inspired by the subset-sum problem. The idea is to calculate all possible sums that can be achieved using any subset of the stones. By tracking the sums iteratively, the solution finds the combination that leads to the smallest difference between two groups of stones.

- **Approach**:
  1. **Set Tracking**: Start with an empty group (represented by the sum 0) and iteratively add each stone to all previously computed sums. This generates a new set of possible sums that include the current stone.
  2. **Dynamic Programming**: For each stone, update the possible sums by either including or excluding it, which is done iteratively using a set to store all possible sums.
  3. **Total Sum Calculation**: Once all stones are processed, the solution checks the possible sums and calculates the difference between the total sum and twice the sum of one group. The goal is to minimize this difference.
  4. **Final Step**: The minimum difference is computed from all possible groupings based on the sums stored in the set.

```
function lastStoneWeightII(stones: number[]): number {
    // Create a set to store possible sums (starting with 0)
    let memo = new Set([0]);

    // Calculate the total sum of all stones
    const total = stones.reduce((sum, val) => sum + val, 0);

    // Iterate through each stone
    for (let stone of stones) {
        let newSums = new Set<number>();  // Temporary set to store new possible sums

        // Add the current stone to all previously computed sums
        for (let sum of memo) {
            newSums.add(sum + stone);  // Add current stone to each sum
        }

        // Update the memo set with the new possible sums
        memo = new Set([...memo, ...newSums]);
    }

    // Initialize result with a large number (safe maximum integer)
    let result = Number.MAX_SAFE_INTEGER;

    // Find the minimum possible difference between two groups
    for (let sum of memo) {
        // Calculate the difference between the total sum and double the current sum
        const diff = Math.abs(total - 2 * sum);
        result = Math.min(result, diff);  // Update the result with the minimum difference
    }

    return result;  // Return the minimum difference
}
```

### **Comparison:**

| **Aspect**               | **First Solution (Recursive with Memoization)** | **Second Solution (Dynamic Programming with Set)** |
|--------------------------|-------------------------------------------------|---------------------------------------------------|
| **Intuition**             | Split stones into two groups recursively to minimize the weight difference. | Calculate all possible sums of stones and find the minimum difference between two groups. |
| **Approach**              | Recursively place each stone in one of two groups and memoize results. | Iteratively compute possible sums using a set and update for each stone. |
| **Memoization**           | Uses a memo table to store results for specific (index, weight1, weight2) states. | Uses a set to store all possible sums at each step to avoid recomputation. |
| **Efficiency**            | Relies on recursion depth, and memoization reduces redundant calculations. | Avoids recursion; uses iteration, which is generally more efficient. |
| **Time Complexity**       | O(n * total_sum) due to recursion over n stones and total sum values. | O(n * total_sum / 2) due to iteration and set operations. |
| **Space Complexity**      | O(n * total_sum) for memoization table.        | O(total_sum / 2) for storing possible sums in the set. |
| **Scalability**           | May struggle with large inputs due to recursion depth. | More scalable due to iterative approach and smaller space requirements. |
| **Readability**           | Clear and intuitive recursive approach but harder to understand at scale. | More efficient but slightly harder to grasp the subset-sum intuition initially. |
| **Best Use Case**         | Useful for small to medium inputs where recursion depth isn't a bottleneck. | Better for large inputs where efficiency is a priority. |

### **Conclusion**:
- The **first solution** is more intuitive for those familiar with recursion and memoization, but it can be less efficient for large input sizes due to its recursive nature.
- The **second solution** is more efficient and scalable, leveraging dynamic programming and a set to store possible sums, making it a better choice for large datasets.