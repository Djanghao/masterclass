# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/building-boxes/solutions/5884350/](https://leetcode.com/problems/building-boxes/solutions/5884350/)

---

# Intuition
Find the minimum number of boxes touching the floor while stacking a given number of unit boxes in a cubic storeroom, following the stacking rules. The approach involves calculating how many boxes can be stacked in layers until the total reaches the target, adjusting for any remaining boxes by adding them one by one.

# Approach
Start stacking boxes in layers until adding another full layer would exceed the target; then, add boxes incrementally until you reach the total.

# Complexity
- Time complexity:
O(\u221An) because the number of layers grows as the square root of the total boxes due to the triangular stacking structure.

- Space complexity:
 O(1) since only a constant amount of extra space is used for variables.

# Code
```typescript []
function minimumBoxes(n: number): number {
    let totalBoxes = 1; // Total number of boxes placed
    let countTouchingFloor = 1; // Count of boxes touching the floor
    let nextBase = 2; // Next base size for stacking boxes

    // Function to calculate the number of boxes in a stack of a given base size
    const numberOfBoxesInStack = (baseSize: number): number => {
        return (baseSize * (baseSize + 1)) / 2; // Formula for the sum of the first 'baseSize' natural numbers
    };
  
    // Add a new stack under the current stack while total boxes are less than n
    // For n = 1,000,000,000, the bottom stack will need a base size of approximately 850 boxes
    while (totalBoxes + numberOfBoxesInStack(nextBase) < n) {
        totalBoxes += numberOfBoxesInStack(nextBase); // Add the number of boxes in the next stack to the total
        countTouchingFloor += nextBase; // Update count of boxes touching the floor
        nextBase += 1; // Move to the next base size
    }

    // For each additional box we add to the floor,
    // we're adding 1 + 2 + 3 + ... boxes above it
    let increment = 1;
  
    // Add boxes until we reach the desired number of total boxes
    while (totalBoxes < n) {
        totalBoxes += increment; // Increment the total boxes by the current increment value
        increment += 1; // Increase the increment for the next box
        countTouchingFloor += 1; // Increment the count of boxes touching the floor
    }

    return countTouchingFloor; // Return the total count of boxes touching the floor
}



```