# Two pointers, beats 100%

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/4828009/](https://leetcode.com/problems/watering-plants-ii/solutions/4828009/)

---

### Intuition

This problem involves two people, A and B, watering plants from opposite ends of a row until they meet. Each has a watering can with a certain capacity, and the task is to minimize the number of refills needed while ensuring all plants get watered. The key intuition behind this solution is to simulate the watering process, tracking the capacity left in each person's can, and incrementing the refill count whenever a can's capacity is insufficient to water a plant.

### Approach

The approach is straightforward:

1. Initialize pointers at both ends of the array (`left` for A and `right` for B) to simulate the two people moving towards each other.
2. Keep track of the remaining water in A's and B's cans (`restA` and `restB`) and the number of refills (`refillTimes`).
3. Loop through the plants array until `left` and `right` meet.
   - For each plant at the `left`, if A's remaining capacity (`restA`) is enough, water the plant and decrease `restA` by the plant's requirement. Otherwise, refill A's can, reset `restA` to its capacity minus the current plant's requirement, and increment `refillTimes`.
   - Similarly, for each plant at the `right`, follow the same process for B with `restB`.
   - Move `left` and `right` pointers inward after watering.
4. Check if there is one plant left (when `left == right`). If neither A nor B has enough capacity to water this plant, increment `refillTimes` by one.
5. Return the total number of refills needed.

### Complexity

- **Time Complexity:** `O(n)` - The function iterates through the plants array once, with `n` being the number of plants.
- **Space Complexity:** `O(1)` - Uses a constant amount of extra space regardless of the input size.


# Code
```
function minimumRefill(
    plants: number[],
    capacityA: number,
    capacityB: number
): number {
    let left = 0;
    let right = plants.length - 1;
    let refillTimes = 0;
    let restA = capacityA;
    let restB = capacityB;
    while (left < right) {
        if (restA >= plants[left]) {
            restA -= plants[left];
        } else {
            refillTimes++;
            restA = capacityA - plants[left];
        }
        left++;

        if (restB >= plants[right]) {
            restB -= plants[right];
        } else {
            refillTimes++;
            restB = capacityB - plants[right];
        }
        right--;
    }

    if (left === right && Math.max(restA, restB) < plants[left]) {
        refillTimes++;
    }

    return refillTimes;
}
```