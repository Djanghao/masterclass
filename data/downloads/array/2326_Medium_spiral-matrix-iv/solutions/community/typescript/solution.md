# 💥 Runtime, beats 94.44%, Memory beats 83.33%

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5762514/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5762514/)

---

# Intuition
I imagined filling a grid in a spiral pattern. Starting at the top-left, I follow a path moving right, down, left, and up, repeating this cycle. The challenge is to know when to change direction\u2014either when I hit a boundary or a previously filled spot.

# Approach
Create the Matrix: I initialize an m x n matrix filled with -1.

Move in Spiral: I define four directions (right, down, left, up). Starting at the top-left, I place numbers from the linked list into the matrix, switching direction when hitting a boundary or filled cell.

Fill Remaining Spaces: If the list runs out, the remaining spaces stay as -1.

# Complexity
- Time complexity:
O(m * n), since I fill every cell once.

- Space complexity:
O(m * n), due to the matrix storage.

# Code
```typescript []
function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    // Initialize the matrix with -1
    const matrix: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));

    // Directions for right, down, left, up
    const dirX = [0, 1, 0, -1];
    const dirY = [1, 0, -1, 0];

    let x = 0, y = 0, dir = 0;
    let curr = head;

    while (curr) {
        // Fill the current position
        matrix[x][y] = curr.val;
        curr = curr.next;

        // Calculate the next position
        let newX = x + dirX[dir];
        let newY = y + dirY[dir];

        // If the new position is out of bounds or already filled, change direction
        if (newX < 0 || newX >= m || newY < 0 || newY >= n || matrix[newX][newY] !== -1) {
            dir = (dir + 1) % 4;
            newX = x + dirX[dir];
            newY = y + dirY[dir];
        }

        // Move to the next position
        x = newX;
        y = newY;
    }

    return matrix;
}

```