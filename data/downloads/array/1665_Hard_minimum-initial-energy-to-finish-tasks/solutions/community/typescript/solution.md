# 💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/5857891/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/5857891/)

---

# Intuition
The problem revolves around managing energy effectively while completing tasks. Each task requires a minimum energy to start and consumes a certain amount of energy. If your current energy is insufficient for a task, you need to ensure you start with enough energy to complete all tasks without running out.

# Approach
Sort the tasks based on the difference between minimum and actual energy needed, then iterate through them, adjusting the initial energy required if your current energy falls below the minimum needed for each task.

# Complexity
- Time complexity:
O(n log n) due to sorting the tasks.

- Space complexity:
O(n) because sorting can use additional space for temporary storage.

# Code
```typescript []
/**
 * @param {number[][]} tasks - A 2D array where each sub-array contains the actual energy spent and the minimum energy required for each task.
 * @return {number} - The minimum initial energy required to finish all tasks.
 */
function minimumEffort(tasks: number[][]): number {
    // Sort tasks primarily by the difference (minimum - actual) in descending order
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));

    let minimumEnergy = 0; // Minimum energy needed to start
    let currentEnergy = 0; // Current energy level after completing tasks

    for (const [actual, minimum] of tasks) {
        // If current energy is insufficient for the next task
        if (currentEnergy < minimum) {
            // Calculate how much more energy is needed
            const energyNeeded = minimum - currentEnergy;
            minimumEnergy += energyNeeded; // Increase the minimum energy required
            currentEnergy += energyNeeded; // Simulate starting with that much energy
        }
        // After the task, decrease the current energy
        currentEnergy -= actual; 
    }

    return minimumEnergy; // Return the total minimum energy needed
}

// Example test cases
console.log(minimumEffort([[1, 2], [2, 4], [4, 8]]));  // Expected output: 8
console.log(minimumEffort([[1, 3], [2, 4], [10, 11], [10, 12], [8, 9]]));  // Expected output: 32
console.log(minimumEffort([[1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12]]));  // Expected output: 27

```