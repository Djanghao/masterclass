# Maximizing Box Storage in a Constrained Warehouse (Type Script)

**Author:** andygr1n1
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5319056/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5319056/)

---

# Intuition
The main challenge is to fit as many boxes as possible into the warehouse rooms while respecting the height constraints of each room. By preprocessing the warehouse heights from both ends, we can create an array of effective heights that each room can accommodate. This simplifies the placement of the boxes.

# Approach
1.	Sort the Boxes: Start by sorting the boxes in ascending order to prioritize placing smaller boxes first.
2.	Preprocess Warehouse Heights:
        - Left-to-Right Pass: Calculate the minimum height up to each room from the left.
        - Right-to-Left Pass: Update these heights by considering the minimum height up to each room from the right.
3.	Sort Effective Heights: Sort the effective heights to facilitate placing boxes in the most constrained spaces first.
4.	Place Boxes: Use a greedy approach to place each box in the smallest possible effective height room.

# Complexity
- Time complexity:
$$O(n \\log n + m \\log m)$$, where n is the number of warehouse rooms and m is the number of boxes. This comes from sorting the effective heights and the boxes.

- Space complexity:
$$O(n)$$ for storing the effective heights array.

# Code
```
function maxBoxesInWarehouse(boxes: number[], warehouse: number[]): number {
    const n = warehouse.length;
    let minHeight = Infinity;
    const effectiveHeights = new Array(n);

    // Preprocess the height of the warehouse rooms to get usable heights from the left end
    for (let i = 0; i < n; i++) {
        minHeight = Math.min(minHeight, warehouse[i]);
        effectiveHeights[i] = minHeight;
    }

    minHeight = Infinity;
    // Update the effective heights considering the right end
    for (let i = n - 1; i >= 0; i--) {
        minHeight = Math.min(minHeight, warehouse[i]);
        effectiveHeights[i] = Math.max(effectiveHeights[i], minHeight);
    }

    // Sort the effective heights of the warehouse rooms
    effectiveHeights.sort((a, b) => a - b);

    // Sort the boxes by height
    boxes.sort((a, b) => a - b);

    let count = 0;
    let boxIndex = 0;
    // Try to place each box in the warehouse from the smallest room to the largest
    for (let i = 0; i < n; i++) {
        if (boxIndex < boxes.length && boxes[boxIndex] <= effectiveHeights[i]) {
            // Place the box and move to the next one
            count += 1;
            boxIndex += 1;
        }
    }

    return count;
}
```