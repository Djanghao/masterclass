# 🔥 Dynamic Programming - JavaScript / TypeScript - code explained 🔥

**Author:** m12s44
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/5158809/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/5158809/)

---

```
function maxStudents(seats: string[][]): number {
    const m = seats.length; // Number of rows
    const n = seats[0].length; // Number of columns
    const BROKEN = '#'; // Symbol for a broken seat

    // Map to store the maximum number of students seated with each possible mask in the previous row
    let prevRow = new Map([[0, 0]]); // Initial configuration: no students seated

    // Function to check if the current mask can be placed on the row without any cheating
    const checkMask = (row: number, mask: number): boolean => {
        // Check for broken seats
        for (let j = 0; j < n; j++) {
            if (seats[row][j] === BROKEN && mask & 1 << j) {
                return false; // If there's a broken seat where a student should sit, return false
            }
        }
        // Check that there are no adjacent students
        return mask.toString(2).indexOf('11') === -1; // Convert mask to binary string and check for adjacent 1's
    };

    // Function to check if there are no students seated upper left or upper right
    const checkWithPreviousRow = (k: number, m: number): boolean => {
        return (k | m).toString(2).indexOf('11') === -1; // Convert the union of masks to binary string and check for adjacent 1's
    };

    // Loop through each row
    for (let i = 0; i < m; i++) {
        const newRow = new Map(); // Map to store the maximum number of students seated with each possible mask in the current row
        // Loop through all possible masks for the current row
        for (let mask = 0; mask < 2 ** n; mask++) {
            if (checkMask(i, mask)) { // Check if the mask is valid
                // Loop through all masks in the previous row
                for (const [k, v] of prevRow) {
                    if (checkWithPreviousRow(k, mask)) { // Check if the current mask is compatible with the previous row
                        const cnt = mask.toString(2).split("").reduce((a, c) => a + +c, 0); // Count the number of students seated in the current mask
                        const curr = newRow.get(mask) || 0; // Get the current maximum number of students seated with the current mask
                        newRow.set(mask, Math.max(curr, v + cnt)); // Update the maximum number of students seated with the current mask
                    }
                }
            }
        }
        prevRow = newRow; // Update the previous row with the current row
    }
    return Math.max(...prevRow.values()); // Return the maximum number of students seated
};
```