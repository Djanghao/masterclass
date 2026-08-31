# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/6042457/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/6042457/)

---

# Intuition
This problem focuses on managing seats in rows efficiently, so we can quickly find and reserve seats in a contiguous block or scattered across multiple rows. To achieve this, we use a segment tree, a data structure that lets us track and update seat availability efficiently.

# Approach
Use a segment tree to store each row\u2019s max available seats and cumulative seat totals, allowing quick checks for contiguous or scattered seats and updates to remaining seat counts per row as bookings are made.

# Complexity
- Time complexity:
Each booking operation is O(log n), where n is the number of rows, since the segment tree allows efficient querying and updates.

- Space complexity:
The space is O(n) for storing the segment tree\u2019s seat data across rows.

# Code
```typescript []
// Constants
const MAX_CAPACITY = 1e9; 
const EMPTY_RESULT: number[] = [];
const DEFAULT_RESULT: [number, number] = [0, 0];

// Variables
let maxFilledRow = -1;
let targetIndex = 0;
let remainingSeats = 0;
let numRows = 0;
let seatsPerRow = 0;

// Segment Tree for storing max seats and cumulative sum of seats
const maxSeats = new Uint32Array(200000);
const cumulativeSeats = Array<number>(200000).fill(0);

/**
 * Initializes the segment tree by setting each node's max and sum values.
 * @param initialVal - Initial value for each seat.
 * @param node - Current segment tree node.
 * @param left - Left boundary of segment.
 * @param right - Right boundary of segment.
 */
function initializeSeats(initialVal: number, node: number, left: number, right: number): void {
    maxSeats[node] = initialVal;
    cumulativeSeats[node] = initialVal * (right - left + 1);

    if (left !== right) {
        const mid = (left + right) >> 1;
        const leftChild = node * 2 + 1;
        const rightChild = node * 2 + 2;
        initializeSeats(initialVal, leftChild, left, mid);
        initializeSeats(initialVal, rightChild, mid + 1, right);
    }
}

/**
 * Updates the segment tree to reflect a change at a specific index.
 * @param newVal - New value to set.
 * @param index - Target index for the update.
 * @param node - Current segment tree node.
 * @param left - Left boundary of segment.
 * @param right - Right boundary of segment.
 */
function updateSeat(newVal: number, index: number, node: number, left: number, right: number): void {
    if (index < left || index > right) return;

    if (left === right) {
        maxSeats[node] = newVal;
        cumulativeSeats[node] = newVal;
    } else {
        const mid = (left + right) >> 1;
        const leftChild = node * 2 + 1;
        const rightChild = node * 2 + 2;

        if (index <= mid) {
            updateSeat(newVal, index, leftChild, left, mid);
        } else {
            updateSeat(newVal, index, rightChild, mid + 1, right);
        }

        maxSeats[node] = Math.max(maxSeats[leftChild], maxSeats[rightChild]);
        cumulativeSeats[node] = cumulativeSeats[leftChild] + cumulativeSeats[rightChild];
    }
}

/**
 * Marks rows as fully filled up to a certain row index.
 * @param node - Current segment tree node.
 * @param left - Left boundary of segment.
 * @param right - Right boundary of segment.
 */
function markFilledRows(node: number, left: number, right: number): void {
    if (left > maxFilledRow) return;

    if (right <= maxFilledRow) {
        maxSeats[node] = 0;
        cumulativeSeats[node] = 0;
        return;
    }

    const mid = (left + right) >> 1;
    const leftChild = node * 2 + 1;
    const rightChild = node * 2 + 2;
    markFilledRows(leftChild, left, mid);
    markFilledRows(rightChild, mid + 1, right);

    maxSeats[node] = Math.max(maxSeats[leftChild], maxSeats[rightChild]);
    cumulativeSeats[node] = cumulativeSeats[leftChild] + cumulativeSeats[rightChild];
}

/**
 * Searches for a row with enough seats for a single booking, gathering adjacent seats.
 * @param seatsNeeded - Number of seats required.
 * @param maxRow - Maximum row to search within.
 * @param node - Current segment tree node.
 * @param left - Left boundary of segment.
 * @param right - Right boundary of segment.
 */
function searchForSeats(seatsNeeded: number, maxRow: number, node: number, left: number, right: number): void {
    if (left > maxRow || maxSeats[node] < seatsNeeded) return;

    if (left === right) {
        targetIndex = left;
        remainingSeats = cumulativeSeats[node] - seatsNeeded;
    } else {
        const mid = (left + right) >> 1;
        searchForSeats(seatsNeeded, maxRow, node * 2 + 1, left, mid);
        if (targetIndex === MAX_CAPACITY) {
            searchForSeats(seatsNeeded, maxRow, node * 2 + 2, mid + 1, right);
        }
    }
}

/**
 * Scans rows to accumulate enough scattered seats across multiple rows.
 * @param seatsNeeded - Number of seats required.
 * @param maxRow - Maximum row to search within.
 * @param node - Current segment tree node.
 * @param left - Left boundary of segment.
 * @param right - Right boundary of segment.
 */
function searchForScatteredSeats(seatsNeeded: number, maxRow: number, node: number, left: number, right: number): void {
    if (left > maxRow || cumulativeSeats[node] < seatsNeeded) return;

    if (left === right) {
        targetIndex = left;
        remainingSeats = cumulativeSeats[node] - seatsNeeded;
    } else {
        const mid = (left + right) >> 1;
        const leftChild = node * 2 + 1;
        const rightChild = node * 2 + 2;

        if (cumulativeSeats[leftChild] >= seatsNeeded) {
            searchForScatteredSeats(seatsNeeded, maxRow, leftChild, left, mid);
        } else {
            searchForScatteredSeats(seatsNeeded - cumulativeSeats[leftChild], maxRow, rightChild, mid + 1, right);
        }
    }
}

/**
 * Initializes the `BookMyShow` system.
 * @param totalRows - Total number of rows in the venue.
 * @param seatsPerRowVal - Number of seats per row.
 */
class BookMyShow {
    constructor(totalRows: number, seatsPerRowVal: number) {
        maxFilledRow = -1;
        numRows = totalRows - 1;
        seatsPerRow = seatsPerRowVal;
        initializeSeats(seatsPerRow, 0, 0, numRows);
    }

    /**
     * Finds a contiguous block of seats for a group in a single row.
     * @param k - Number of seats requested.
     * @param maxRow - Maximum row to search within.
     * @returns An array with the row and seat start index or an empty array if unavailable.
     */
    gather(k: number, maxRow: number): number[] {
        targetIndex = MAX_CAPACITY;
        searchForSeats(k, maxRow, 0, 0, numRows);

        if (targetIndex === MAX_CAPACITY) return EMPTY_RESULT;

        updateSeat(remainingSeats, targetIndex, 0, 0, numRows);
        return [targetIndex, seatsPerRow - remainingSeats - k];
    }

    /**
     * Checks if it's possible to scatter seats across rows.
     * @param k - Total number of seats requested.
     * @param maxRow - Maximum row to search within.
     * @returns `true` if seats can be scattered across rows, otherwise `false`.
     */
    scatter(k: number, maxRow: number): boolean {
        targetIndex = MAX_CAPACITY;
        searchForScatteredSeats(k, maxRow, 0, 0, numRows);

        if (targetIndex === MAX_CAPACITY) return false;

        updateSeat(remainingSeats, targetIndex, 0, 0, numRows);
        maxFilledRow = targetIndex - 1;
        markFilledRows(0, 0, numRows);
        return true;
    }
}

```