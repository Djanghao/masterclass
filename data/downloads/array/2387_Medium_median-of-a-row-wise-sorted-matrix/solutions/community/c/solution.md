# Efficient Median Finding in a Sorted Matrix

**Author:** imamhosen0
**Votes:** 0
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/5382081/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/5382081/)

---

# Intuition

Since the matrix has each row sorted in non-decreasing order, and we need to find the median, a brute force approach would involve flattening the matrix into a single list, sorting it, and then finding the middle element. However, this is not optimal in terms of time complexity. Instead, we can leverage the sorted property of each row and use a binary search approach to efficiently find the median.

# Approach

1. **Binary Search on the Value Range:**
- Determine the minimum and maximum possible values in the matrix, left and right.

- Use binary search to find the median value in this range.

2. **Count Elements Less Than or Equal to mid:**
- For each middle value (mid) in the binary search, count how many elements in the matrix are less than or equal to "mid".

- This counting is efficiently done using binary search within each row.

3.**Adjust Search Range:**

- Based on the count of elements less than or equal to mid, adjust the search range.

- If the count is less than the target position of the median, adjust the search range upwards. Otherwise, adjust it downwards.

4.**Converge to Median:**

The value at which the binary search converges is the median.

# Complexity
- The binary search on the value range takes 
\uD835\uDC42(log(max\u2212min)) steps.

- Counting elements less than or equal to mid for each middle value takes O(m\u22C5log(n)) where m is the number of rows and n is the number of columns.

- Hence, the overall time complexity is O(m\u22C5log(n)\u22C5log(max\u2212min)

# Space complexity:
- The space complexity is \uD835\uDC42(1) since we are only using a constant amount of additional space.


# Code
```
// Function to find the number of elements less than or equal to mid in a row
int countLessEqual(int* row, int rowSize, int mid) {
    int left = 0, right = rowSize - 1;
    // Perform binary search in the row
    while (left <= right) {
        int midIndex = left + (right - left) / 2;
        if (row[midIndex] <= mid) {
            left = midIndex + 1;  // Move to the right half
        } else {
            right = midIndex - 1; // Move to the left half
        }
    }
    return left; // Number of elements <= mid
}

// Function to find the median of the matrix
int matrixMedian(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize;  // Number of rows
    int n = gridColSize[0]; // Number of columns, assuming all rows have the same number of columns

    // Initialize left and right with the first element of the grid
    int left = grid[0][0];
    int right = grid[0][0];

    // Find the overall minimum and maximum elements in the matrix
    for (int i = 0; i < m; ++i) {
        if (grid[i][0] < left) {
            left = grid[i][0];
        }
        if (grid[i][n - 1] > right) {
            right = grid[i][n - 1];
        }
    }

    // The target position of the median element
    int targetCount = (m * n + 1) / 2;

    // Perform binary search on the value range
    while (left < right) {
        int mid = left + (right - left) / 2;
        int count = 0; // Number of elements <= mid

        // Count the number of elements <= mid in each row
        for (int i = 0; i < m; ++i) {
            count += countLessEqual(grid[i], n, mid);
        }

        // Adjust the search range based on the count
        if (count < targetCount) {
            left = mid + 1; // Move the search range up
        } else {
            right = mid; // Move the search range down
        }
    }

    return left; // The median value
}

```