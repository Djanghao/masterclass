# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/5988626/](https://leetcode.com/problems/count-houses-in-a-circular-street/solutions/5988626/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int houseCount(Street street, int k) {
    // Prepare a consistent state by closing doors and moving k steps
    for (int i = 0; i < k; i++) {
        if (street.isDoorOpen()) {
            street.closeDoor();
        }
        street.moveRight();
    }

    // Mark the starting point by opening the current door and moving to the next house
    street.openDoor();
    street.moveRight();

    int houseCount = 0;

    // Count houses until we encounter the open door again
    while (!street.isDoorOpen()) {
        houseCount += 1;
        street.moveRight();
    }

    // Include the starting house in the count
    return houseCount + 1;
}
```
```javascript []
var houseCount = function(street, k) {
    // Close all doors within the first k moves to prepare a consistent state
    for (let i = 0; i < k; i++) {
        if (street.isDoorOpen()) {
            street.closeDoor();
        }
        street.moveRight();
    }

    // Mark the starting point by opening the current door and moving to the next house
    street.openDoor();
    street.moveRight();

    let count = 0;

    // Count houses until we encounter the open door again
    while (!street.isDoorOpen()) {
        count += 1;
        street.moveRight();
    }

    // Include the starting house in the count
    return count + 1;
};
```
```typescript []
/**
 * Definition for a street.
 * class Street {
 *     constructor(doors: number[]);
 *     public openDoor(): void;
 *     public closeDoor(): void;
 *     public isDoorOpen(): boolean;
 *     public moveRight(): void;
 *     public moveLeft(): void;
 * }
 */
function houseCount(street: Street | null, k: number): number {
    // Close all doors within the first k moves to prepare a consistent state
    for (let i = 0; i < k; i++) {
        if (street.isDoorOpen()) {
            street.closeDoor();
        }
        street.moveRight();
    }

    // Mark the starting point by opening the current door and moving to the next house
    street.openDoor();
    street.moveRight();

    let count = 0;

    // Count houses until we encounter the open door again
    while (!street.isDoorOpen()) {
        count += 1;
        street.moveRight();
    }

    // Include the starting house in the count
    return count + 1;
};
```