# 204 ms Beats 100.00% TypeScript

**Author:** ShirinMjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/6072122/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/6072122/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Step-by-Step Explanation:
Check for a single row:

If there is only 1 row (rows === 1), the encoded text doesn't need any transformation, so it is returned as is.
Calculate columns:

The number of columns (cols) is calculated based on the length of encodedText divided by the number of rows, rounded up (Math.ceil). This ensures that the matrix is large enough to fit all characters.
Matrix initialization:

A matrix of strings is initialized to hold the encoded characters, row by row. The matrix will have rows number of rows and cols number of columns.
Populating the matrix:

A nested loop is used to fill the matrix with characters from encodedText. For each row, it collects characters from the encoded text and adds them to the row. If there are fewer characters than the total cells in the matrix, it fills the remaining cells with spaces (' ').
Decoding the ciphertext:

The matrix is read column by column, top to bottom. Each column's characters are appended to the result string. The inner loop ensures that characters are picked from each row in the current column (matrix[row][temp]).
Trimming trailing spaces:

The trimRight() function removes any extra spaces from the decoded string at the end, giving the final result.
Optional Debugging:
The console.log(matrix) is included for debugging purposes to see how the matrix looks after it's populated.

# Complexity
**Time Complexity: O(n)
Space Complexity: O(n)**

# Code
```typescript []
function decodeCiphertext(encodedText: string, rows: number): string {
    // Check if there's only one row, in which case no decoding is necessary. Return the encoded text as is.
    if (rows === 1) return encodedText;

    // Calculate the number of columns needed to fit the text in a matrix of 'rows' rows.
    // The number of columns is the ceiling of the total length of encodedText divided by the number of rows.
    let cols = Math.ceil(encodedText.length / rows)

    // Initialize an empty matrix, which will store the characters row by row.
    const matrix: string[][] = [];

    // Initialize an empty string to store the final decoded result.
    let result = "";

    // Variable to keep track of the index as we go through the encoded text.
    let index = 0;

    // Loop through each row to populate the matrix.
    for (let i = 0; i < rows; i++) {
        // Initialize an empty array for the current row.
        const row: string[] = [];

        // Loop through each column in the current row.
        for (let j = 0; j < cols; j++) {
            // Push the character at the current index into the row.
            // If index exceeds the length of encodedText, push a space (' ') instead.
            row.push(encodedText.charAt(index) || ' ');

            // Increment the index to point to the next character in encodedText.
            index++;
        }

        // Push the populated row into the matrix.
        matrix.push(row);
    }

    // Optionally log the matrix for debugging purposes.
    console.log(matrix);

    // Now, loop through each column of the matrix and read characters top-to-bottom, column by column.
    // This forms the decoded message.
    for (let col = 0; col < cols; col++) {
        // Initialize a temporary variable `temp` that keeps track of the column index.
        let temp = col;

        // Loop through each row to extract characters in the current column.
        // Stop if we reach the end of the column.
        for (let row = 0; row < rows && temp < cols; row++) {

            // Add the character from the current position in the matrix to the result string.
            // The commented-out check (`matrix[row][temp] !== ' '`) can be used to skip spaces if desired.
            result += matrix[row][temp];

            // Increment the column index (`temp`) for the next row.
            temp++;
        }
    }

    // Return the result string with trailing spaces removed.
    return result.trimRight();
};

```