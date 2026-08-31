# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/ - Simulation- Explained in Detail

**Author:** lancertech6
**Votes:** 134
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5758107/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5758107/)

---

![Screenshot 2024-09-09 061035.png](./images/0.png)


# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->


https://youtu.be/hb3pAbTJ0zY


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2900 Subscribers*
*Current Subscribers: 2809*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of filling an m x n matrix with values from a linked list in a spiral order, we need to simulate the process of filling the matrix in a spiral manner starting from the top-left corner and moving clockwise. The remaining cells that are not filled with values from the linked list should be filled with -1.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Matrix Initialization:**
   - Create a 2D matrix of size `m x n` and initialize all elements to -1, which will be used to fill any remaining spaces after placing values from the linked list.

2. **Spiral Filling Logic:**
   - Define boundaries for the spiral traversal: `topRow`, `bottomRow`, `leftColumn`, and `rightColumn`.
   - Use a `while` loop to traverse and fill the matrix in a spiral order as long as there are still values left in the linked list.
   - Within the loop:
     - **Fill Top Row:** Traverse from `leftColumn` to `rightColumn` in the current `topRow` and place the linked list values.
     - **Fill Right Column:** Traverse from `topRow` to `bottomRow` in the current `rightColumn` and place the linked list values.
     - **Fill Bottom Row:** Traverse from `rightColumn` to `leftColumn` in the current `bottomRow` and place the linked list values.
     - **Fill Left Column:** Traverse from `bottomRow` to `topRow` in the current `leftColumn` and place the linked list values.
   - Update the boundaries after each traversal: increment `topRow` and `leftColumn`, and decrement `bottomRow` and `rightColumn`.

3. **Edge Handling:**
   - Continue this process until either the matrix is completely filled or there are no more values left in the linked list.

# Complexity
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time complexity:
   - The time complexity is `(O(m x n))`. This is because every cell in the matrix is processed exactly once, either by filling it with a value from the linked list or leaving it as -1 if the linked list runs out of values.

- Space complexity:
   - The space complexity is also `(O(m x n))`. This includes the space required for the output matrix, which is of size `m x n`.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Step By STep Explanation

### Example

Let's say we have a linked list with the following values: `[1, 2, 3, 4, 5, 6, 7, 8, 9]`, and we want to fill a `3 x 3` matrix in a spiral order.

### Initial Setup

- **Matrix Size:** 3 rows x 3 columns
- **Linked List Values:** `[1, 2, 3, 4, 5, 6, 7, 8, 9]`

### Step-by-Step Spiral Filling

1. **Initialize the Matrix:**

   ```
   -1 -1 -1
   -1 -1 -1
   -1 -1 -1
   ```

   - **Boundaries:** `topRow = 0`, `bottomRow = 2`, `leftColumn = 0`, `rightColumn = 2`

2. **Fill Top Row:**

   - Traverse from `leftColumn` to `rightColumn` in the `topRow`.

   ```
   1 2 3
   -1 -1 -1
   -1 -1 -1
   ```

   - **Update Boundaries:** `topRow = 1`

3. **Fill Right Column:**

   - Traverse from `topRow` to `bottomRow` in the `rightColumn`.

   ```
   1 2 3
   -1 -1 4
   -1 -1 5
   ```

   - **Update Boundaries:** `rightColumn = 1`

4. **Fill Bottom Row:**

   - Traverse from `rightColumn` to `leftColumn` in the `bottomRow`.

   ```
   1 2 3
   -1 -1 4
   7 8 9
   ```

   - **Update Boundaries:** `bottomRow = 1`

5. **Fill Left Column:**

   - Traverse from `bottomRow` to `topRow` in the `leftColumn`.

   ```
   1 2 3
   6 -1 4
   7 8 9
   ```

   - **Update Boundaries:** `leftColumn = 1`

6. **Next Iteration:**

   - **Top Row:** Only one position (`matrix[1][1]`) left to fill.

   ```
   1 2 3
   6 5 4
   7 8 9
   ```

   - **Boundaries:** `topRow = 2`, `bottomRow = 1`, `leftColumn = 2`, `rightColumn = 1`

### Final Matrix

After the above steps, the matrix filled in spiral order looks like this:

```
1 2 3
6 5 4
7 8 9
```

### Explanation

1. **Initialize the Matrix:** Start by creating a matrix filled with a default value (e.g., `-1`).

2. **Define Boundaries:** Keep track of the boundaries for the spiral filling:
   - `topRow`: the current top boundary
   - `bottomRow`: the current bottom boundary
   - `leftColumn`: the current left boundary
   - `rightColumn`: the current right boundary

3. **Fill the Matrix in Spiral Order:**
   - **Top Row:** Fill from left to right along the top boundary.
   - **Right Column:** Fill from top to bottom along the right boundary.
   - **Bottom Row:** Fill from right to left along the bottom boundary.
   - **Left Column:** Fill from bottom to top along the left boundary.

4. **Update Boundaries:** After filling each part of the matrix, adjust the boundaries to move inward.

5. **Repeat:** Continue filling in the spiral order until all values from the linked list are used or the matrix is completely filled.

This approach ensures that all values are placed in the matrix in a spiral order, and any remaining cells are filled with the default value (`-1`).


# Code
```java []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int[][] spiralMatrix(int rows, int columns, ListNode head) {
        int[][] matrix = new int[rows][];
        for (int i = 0; i < rows; i++) {
            matrix[i] = new int [columns];
            Arrays.fill(matrix[i], -1);
        }

        int topRow = 0, bottomRow = rows - 1, leftColumn = 0, rightColumn = columns - 1;
        while (head != null) {
        
            for (int col = leftColumn; col <= rightColumn && head != null; col++) {
                matrix[topRow][col] = head.val;
                head = head.next;
            }
            topRow++;

        
            for (int row = topRow; row <= bottomRow && head != null; row++) {
                matrix[row][rightColumn] = head.val;
                head = head.next;
            }
            rightColumn--;

 
            for (int col = rightColumn; col >= leftColumn && head != null; col--) {
                matrix[bottomRow][col] = head.val;
                head = head.next;
            }
            bottomRow--;

       
            for (int row = bottomRow; row >= topRow && head != null; row--) {
                matrix[row][leftColumn] = head.val;
                head = head.next;
            }
            leftColumn++;
        }

        return matrix;
    }
}
```
```C++ []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> spiralMatrix(int m, int n, ListNode* head) {
        vector<vector<int>> matrix(m, vector<int>(n, -1));
        
        int topRow = 0, bottomRow = m - 1, leftColumn = 0, rightColumn = n - 1;
        
        while (head) {
            // Fill top row
            for (int col = leftColumn; col <= rightColumn && head; ++col) {
                matrix[topRow][col] = head->val;
                head = head->next;
            }
            topRow++;
            
            // Fill right column
            for (int row = topRow; row <= bottomRow && head; ++row) {
                matrix[row][rightColumn] = head->val;
                head = head->next;
            }
            rightColumn--;
            
            // Fill bottom row
            for (int col = rightColumn; col >= leftColumn && head; --col) {
                matrix[bottomRow][col] = head->val;
                head = head->next;
            }
            bottomRow--;
            
            // Fill left column
            for (int row = bottomRow; row >= topRow && head; --row) {
                matrix[row][leftColumn] = head->val;
                head = head->next;
            }
            leftColumn++;
        }
        
        return matrix;
    }
};
```
```Python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def spiralMatrix(self, m, n, head):
        matrix = [[-1] * n for _ in range(m)]
        
        topRow, bottomRow = 0, m - 1
        leftColumn, rightColumn = 0, n - 1
        
        while head:
            # Fill top row
            for col in range(leftColumn, rightColumn + 1):
                if not head:
                    break
                matrix[topRow][col] = head.val
                head = head.next
            topRow += 1
            
            # Fill right column
            for row in range(topRow, bottomRow + 1):
                if not head:
                    break
                matrix[row][rightColumn] = head.val
                head = head.next
            rightColumn -= 1
            
            # Fill bottom row
            for col in range(rightColumn, leftColumn - 1, -1):
                if not head:
                    break
                matrix[bottomRow][col] = head.val
                head = head.next
            bottomRow -= 1
            
            # Fill left column
            for row in range(bottomRow, topRow - 1, -1):
                if not head:
                    break
                matrix[row][leftColumn] = head.val
                head = head.next
            leftColumn += 1
        
        return matrix
```
```JavaScript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const matrix = Array.from({ length: m }, () => Array(n).fill(-1));
        
        let topRow = 0, bottomRow = m - 1, leftColumn = 0, rightColumn = n - 1;
        
        while (head) {
            // Fill top row
            for (let col = leftColumn; col <= rightColumn && head; ++col) {
                matrix[topRow][col] = head.val;
                head = head.next;
            }
            topRow++;
            
            // Fill right column
            for (let row = topRow; row <= bottomRow && head; ++row) {
                matrix[row][rightColumn] = head.val;
                head = head.next;
            }
            rightColumn--;
            
            // Fill bottom row
            for (let col = rightColumn; col >= leftColumn && head; --col) {
                matrix[bottomRow][col] = head.val;
                head = head.next;
            }
            bottomRow--;
            
            // Fill left column
            for (let row = bottomRow; row >= topRow && head; --row) {
                matrix[row][leftColumn] = head.val;
                head = head.next;
            }
            leftColumn++;
        }
        
        return matrix;
};
```
![upvote.png](./images/1.png)
