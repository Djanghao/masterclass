# ✨ Easy Solution With Explanation | PHP 🐘

**Author:** mohamed_amin_hajbi
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5758296/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5758296/)

---

# Intuition
The problem requires us to fill a matrix with the values from a linked list in a spiral order. The main idea is to traverse the matrix in four possible directions: right, down, left, and up, while placing values from the linked list into the matrix.


# Approach
1. **Matrix Initialization:** We start by initializing the matrix with dimensions m x n, filling it with a default value of -1 to identify unvisited cells.
2. **Direction Management:** We maintain a direction variable (dir) that controls the current direction of traversal. It starts as 'right' and cycles through 'bottom', 'left', and 'up'.
3. **Traversal:** We traverse the matrix by moving in the current direction until we hit a boundary or a previously filled cell. When this happens, we change direction.
4. **Matrix Filling:** For each valid cell, we place the value from the current linked list node into the matrix, then move to the next node.
5. **Termination:** The process continues until all nodes in the linked list are placed into the matrix or all possible cells are filled.
# Complexity
- Time complexity: **O(m\xD7n)**
We traverse the entire matrix of size m x n once, filling each cell with a value from the linked list.
- Space complexity: **O(1)**
The additional space used is constant since we only use a fixed number of variables for direction and indexing, not counting the space used by the matrix itself.
# Code
```php []
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param Integer $m   Number of rows in the matrix
     * @param Integer $n   Number of columns in the matrix
     * @param ListNode $head   Head of the singly-linked list
     * @return Integer[][]   2D matrix filled in a spiral order
     */
    function spiralMatrix($m, $n, $head) {
        // Initialize the matrix with -1, indicating unvisited cells
        $matrix = array_fill(0, $m, array_fill(0, $n, -1));
        
        // Set the initial direction to 'right'
        $dir = 'right';
        
        // Initialize the starting point at the top-left corner of the matrix
        $current = $head;
        $i = 0;
        $j = 0;
        
        // Traverse the matrix and fill it with values from the linked list
        while ($current) {
            $matrix[$i][$j] = $current->val;  // Place the current node's value in the matrix
            $current = $current->next;  // Move to the next node in the linked list
            
            // Determine the next cell based on the current direction
            if ($dir == 'right') {
                // Check if the next cell to the right is valid
                if ($j + 1 >= $n || $matrix[$i][$j + 1] !== -1) {
                    $dir = 'bottom';  // Change direction to 'bottom'
                    $i++;  // Move downwards
                } else {
                    $j++;  // Continue moving right
                }
                
            } elseif ($dir == 'bottom') {
                // Check if the next cell downward is valid
                if ($i + 1 >= $m || $matrix[$i + 1][$j] !== -1) {
                    $dir = 'left';  // Change direction to 'left'
                    $j--;  // Move leftwards
                } else {
                    $i++;  // Continue moving downwards
                }
                
            } elseif ($dir == 'left') {
                // Check if the next cell to the left is valid
                if ($j - 1 < 0 || $matrix[$i][$j - 1] !== -1) {
                    $dir = 'up';  // Change direction to 'up'
                    $i--;  // Move upwards
                } else {
                    $j--;  // Continue moving leftwards
                }
                
            } elseif ($dir == 'up') {
                // Check if the next cell upwards is valid
                if ($i - 1 < 0 || $matrix[$i - 1][$j] !== -1) {
                    $dir = 'right';  // Change direction to 'right'
                    $j++;  // Move rightwards
                } else {
                    $i--;  // Continue moving upwards
                }
            }
        }
        
        // Return the filled matrix
        return $matrix;
    }
}
```