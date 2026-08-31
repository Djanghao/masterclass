# Typescript Approach [O(n) Space/ O(nlogn) Time]

**Author:** kyratzakos
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844698/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844698/)

---

# Intuition
The problem is about maximizing the total sum of assigned heights to towers while ensuring that no two towers have the same height. The height of each tower cannot exceed its maximum allowed height (`maximumHeight[i]`), and the heights should be distinct.

# Approach
1. Sort the Heights: First, sort the `maximumHeight` array in ascending order. Sorting ensures that we can greedily assign the largest available height to the largest towers.
2. Initialize Variables: `currentHeight`: This tracks the largest possible distinct height we can assign to the current tower. Initially, it is set to the maximum height (the last element of the sorted array). `totalSum`: This will accumulate the total sum of the assigned heights.
3. Greedy Assignment of Heights: Iterate backward through the sorted array, and for each tower, assign the smallest height possible (based on the decreasing `currentHeight`). If the current tower's maximum height is smaller than `currentHeight`, update `currentHeight` to match it. This ensures we don't assign heights greater than allowed.
After assigning a height to each tower, decrement `currentHeight` to ensure the next tower gets a strictly smaller height. If at any point, `currentHeight` becomes non-positive, it means no valid assignment can be made, and we return `-1`.
4. Final Return: After iterating through all the towers, the `totalSum` will hold the maximum sum of distinct heights that can be assigned.

# Complexity
- Time complexity:
Sorting `maximumHeight` takes $O(nlogn)$, where $n$ is the length of the array.

- Space complexity:
The sorting operation requires $O(n)$ auxiliary space.

# Code
```typescript []
function maximumTotalSum(maximumHeight: number[]): number {
    maximumHeight.sort((a, b) => a - b)

    const arrayLength = maximumHeight.length
    let currentHeight = maximumHeight[arrayLength-1]
    let totalSum = 0

    for(let i = arrayLength - 1; i >= 0 ; i--) {
        if(maximumHeight[i] < currentHeight) {
            currentHeight = maximumHeight[i]
        }

        if(currentHeight <= 0) {
            return -1
        }

        totalSum += currentHeight
        currentHeight--
    }

    return totalSum
}
```