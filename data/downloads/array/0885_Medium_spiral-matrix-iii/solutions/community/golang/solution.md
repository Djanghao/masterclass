# Beats 100% Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 42
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/5600454/](https://leetcode.com/problems/spiral-matrix-iii/solutions/5600454/)

---

# Approach 1
# Intuition
We're dealing with a 2D grid and a pattern of movement that spirals outward from a given starting point. The key insight here is recognizing the regularity in this spiral pattern.

When we visualize a spiral, we can see that it consists of a series of "arms" that extend in four directions: right, down, left, and up. Each complete rotation of the spiral increases the length of these arms. This observation forms the foundation of our approach.

Another crucial insight is that even though we're spiraling outwards, we're only interested in the cells that fall within our defined grid. This means we need a way to track our position and only record valid coordinates.

Lastly, we need to consider how to efficiently generate this spiral pattern. The regularity of the pattern suggests that we could use a systematic approach, possibly involving direction changes and step counts.

# Approach


## 1. Direction Management

To manage the spiral's direction, we use a 2D array to represent the four possible movements:

```
int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
```

These correspond to moving right, down, left, and up respectively. By cycling through these directions, we can create our spiral pattern.

We use a variable `d` to keep track of our current direction:

```
int d = 0;
```

After each arm of the spiral, we update our direction:

```
d = (d + 1) % 4;
```

This clever use of modulo arithmetic ensures that we cycle through our directions array continuously.

## 2. Step Size Control

A key characteristic of a spiral is that it extends further with each rotation. We manage this with a `steps` variable:

```
int steps = 0;
```

We increment `steps` after moving east (d = 0) or west (d = 2):

```
if (d == 0 || d == 2) steps++;
```

This ensures that our spiral arms grow longer as we progress.

## 3. Grid Traversal

To traverse the grid, we use our current position (rStart, cStart) and update it based on our current direction and step size:

```
for (int i = 0; i < steps; i++) {
    rStart += directions[d][0];
    cStart += directions[d][1];
    // ... (boundary checking and result collection here)
}
```

This loop moves us along one arm of the spiral.

## 4. Boundary Checking

Not all positions in our spiral will be within the grid boundaries. We check each new position:

```
if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
    // ... (result collection here)
}
```

This ensures we only consider valid grid positions.

## 5. Result Collection

We collect our results in a 2D array:

```
int[][] result = new int[rows * cols][2];
```

Each valid position is added to this array:

```
result[count++] = new int[]{rStart, cStart};
```

We use a `count` variable to keep track of how many positions we've added, and to determine when we've filled our result array.

## Final Step

The entire process is wrapped in a while loop that continues until we've collected all the positions in our grid:

```
while (count < rows * cols) {
    // ... (direction management, step size control, grid traversal, 
    //      boundary checking, and result collection here)
}
```


# Complexity Analysis

### Time Complexity: O(max(R, C)^2)

**The time complexity of this algorithm is O(max(R, C)^2)**, where R is the number of rows and C is the number of columns in the grid.

To understand this, let's break it down:

1. The spiral pattern we generate is essentially a square with side length max(R, C) * 2. This is because in the worst case, we need to spiral out far enough to reach the farthest corner of our grid.

2. The total number of cells in this larger square is (max(R, C) * 2)^2 = 4 * max(R, C)^2.

3. Our algorithm visits each of these cells exactly once, even though we only record the ones that fall within our actual grid.

4. Therefore, the number of iterations our algorithm performs is proportional to max(R, C)^2.

Even though we're only interested in R * C cells, our algorithm may need to visit up to 4 * max(R, C)^2 positions to ensure we've covered all the cells in our grid. This is why the time complexity is quadratic in terms of the larger dimension of the grid.

### Space Complexity

**The space complexity of this algorithm is O(R * C)**, where R is the number of rows and C is the number of columns in the grid.

This space requirement comes from our result array:

```
int[][] result = new int[rows * cols][2];
```

We're storing exactly R * C positions, each represented by a pair of integers.

This space complexity is optimal for this problem, as we need to return all the positions in the grid. We couldn't solve this problem with less space, as the output itself requires O(R * C) space.

Additional space used by our algorithm (for variables like `steps`, `d`, `rStart`, `cStart`, etc.) is constant and doesn't grow with the size of the input, so it doesn't affect our space complexity analysis.

### Code
```Java []
class Solution {
    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}}; // East, South, West, North
        int[][] result = new int[rows * cols][2];
        int steps = 0, d = 0, len = 0;
        
        result[0] = new int[]{rStart, cStart};
        int count = 1;
        
        while (count < rows * cols) {
            if (d == 0 || d == 2) steps++; // Increase step size after moving East or West
            
            for (int i = 0; i < steps; i++) {
                rStart += directions[d][0];
                cStart += directions[d][1];
                
                if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                    result[count++] = new int[]{rStart, cStart};
                }
                
                if (count == rows * cols) return result;
            }
            
            d = (d + 1) % 4; // Change direction
        }
        
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        vector<vector<int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}}; // East, South, West, North
        vector<vector<int>> result = {{rStart, cStart}};
        int steps = 0, d = 0;
        
        while (result.size() < rows * cols) {
            if (d == 0 || d == 2) steps++;
            
            for (int i = 0; i < steps; i++) {
                rStart += directions[d][0];
                cStart += directions[d][1];
                
                if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                    result.push_back({rStart, cStart});
                }
                
                if (result.size() == rows * cols) return result;
            }
            
            d = (d + 1) % 4;
        }
        
        return result;
    }
};
```
```Python []
class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # East, South, West, North
        result = [[rStart, cStart]]
        steps = d = 0
        
        while len(result) < rows * cols:
            if d % 2 == 0:
                steps += 1
            
            for _ in range(steps):
                rStart += directions[d][0]
                cStart += directions[d][1]
                
                if 0 <= rStart < rows and 0 <= cStart < cols:
                    result.append([rStart, cStart])
                
                if len(result) == rows * cols:
                    return result
            
            d = (d + 1) % 4
        
        return result
```
```Go []
func spiralMatrixIII(rows int, cols int, rStart int, cStart int) [][]int {
    directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}} // East, South, West, North
    result := [][]int{{rStart, cStart}}
    steps, d := 0, 0
    
    for len(result) < rows*cols {
        if d%2 == 0 {
            steps++
        }
        
        for i := 0; i < steps; i++ {
            rStart += directions[d][0]
            cStart += directions[d][1]
            
            if rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols {
                result = append(result, []int{rStart, cStart})
            }
            
            if len(result) == rows*cols {
                return result
            }
        }
        
        d = (d + 1) % 4
    }
    
    return result
}
```
```Rust []
impl Solution {
    pub fn spiral_matrix_iii(rows: i32, cols: i32, r_start: i32, c_start: i32) -> Vec<Vec<i32>> {
        let directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]; // East, South, West, North
        let mut result = vec![vec![r_start, c_start]];
        let (mut steps, mut d) = (0, 0);
        let (mut r, mut c) = (r_start, c_start);
        
        while result.len() < (rows * cols) as usize {
            if d % 2 == 0 {
                steps += 1;
            }
            
            for _ in 0..steps {
                r += directions[d].0;
                c += directions[d].1;
                
                if r >= 0 && r < rows && c >= 0 && c < cols {
                    result.push(vec![r, c]);
                }
                
                if result.len() == (rows * cols) as usize {
                    return result;
                }
            }
            
            d = (d + 1) % 4;
        }
        
        result
    }
}
```
```JavaScript []
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // East, South, West, North
    const result = [[rStart, cStart]];
    let steps = 0, d = 0;
    
    while (result.length < rows * cols) {
        if (d % 2 === 0) steps++;
        
        for (let i = 0; i < steps; i++) {
            rStart += directions[d][0];
            cStart += directions[d][1];
            
            if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                result.push([rStart, cStart]);
            }
            
            if (result.length === rows * cols) return result;
        }
        
        d = (d + 1) % 4;
    }
    
    return result;
};
```
---
# Approach 2
# Intuition

Building upon our understanding from the previous approach, we can further refine our strategy for solving the Spiral Matrix III problem. While the core concept of generating a spiral pattern remains the same, this alternative approach takes a different perspective on managing the spiral's progression.
The key insight here is to view the spiral not as a series of directional movements, but as a set of expanding boundaries. Imagine drawing a box around our starting point and then systematically expanding this box outward. As we expand, we traverse the perimeter of this box, but only within the confines of our actual grid.
This boundary-based thinking leads to a more structured approach, where we can clearly define the limits of our spiral at each step. It also allows us to pre-calculate the valid ranges for each directional movement, potentially reducing the number of boundary checks we need to perform.

# Approach

Our approach to solving this problem involves simulating the spiral movement while efficiently tracking our position and the visited cells. Here's a detailed breakdown of the solution:

1. **Initialization:**
   We start by setting up our data structures and initial state:
   - Create a 2D array `path` to store the sequence of visited positions.
   - Initialize boundary variables (`leftBound`, `rightBound`, `topBound`, `bottomBound`) to keep track of the extent of our spiral.
   - Set a `currentIndex` to keep track of how many valid positions we've recorded.

2. **Main Loop:**
   We enter a main loop that continues until we've visited all cells in the grid. In each iteration, we perform four movements corresponding to the four directions of the spiral:

   a. Move East (Right):
      - We traverse from `leftBound + 1` to `rightBound`, staying within the grid's column bounds.
      - We add each valid position to our `path`.
      - After this movement, we expand our `bottomBound`.

   b. Move South (Down):
      - We traverse from `topBound + 1` to `bottomBound`, staying within the grid's row bounds.
      - We add each valid position to our `path`.
      - After this movement, we contract our `leftBound`.

   c. Move West (Left):
      - We traverse from `rightBound - 1` to `leftBound`, staying within the grid's column bounds.
      - We add each valid position to our `path`.
      - After this movement, we contract our `topBound`.

   d. Move North (Up):
      - We traverse from `bottomBound - 1` to `topBound`, staying within the grid's row bounds.
      - We add each valid position to our `path`.
      - After this movement, we expand our `rightBound`.

3. **Boundary Checks:**
   Before each directional movement, we check if the movement would be within or touch the grid:
   - For eastward movement: `topBound >= 0`
   - For southward movement: `rightBound < cols`
   - For westward movement: `bottomBound < rows`
   - For northward movement: `leftBound >= 0`
   These checks ensure we don't unnecessarily compute positions that are entirely outside the grid.

4. **Position Recording:**
   As we traverse in each direction, we only record positions that are within the grid boundaries. This is done efficiently in the directional traversal methods (`traverseEast`, `traverseSouth`, `traverseWest`, `traverseNorth`).

5. **Termination:**
   After each directional movement, we check if we've recorded all the required positions (`currentIndex >= totalCells`). If so, we break out of the main loop.

6. **Return Result:**
   Once we've visited all cells or completed our spiral, we return the `path` array containing all the recorded positions.

Key Aspects of the Approach:

1. Boundary Management:
   The use of `leftBound`, `rightBound`, `topBound`, and `bottomBound` variables is crucial. These variables effectively represent the "bounding box" of our spiral at any given moment. After each directional movement, we adjust these boundaries, which naturally expands our spiral.

2. Efficient Position Recording:
   By checking grid boundaries in our traversal methods, we ensure that we only record valid positions. This eliminates the need for additional checks when adding positions to our path.

3. Directional Traversal:
   The four traversal methods (`traverseEast`, `traverseSouth`, `traverseWest`, `traverseNorth`) encapsulate the logic for moving in each direction. This modular approach makes the code more readable and maintainable.

4. Early Termination:
   By checking if we've recorded all required positions after each directional movement, we can terminate the process as soon as we've visited all grid cells, avoiding unnecessary computations.

5. Flexibility:
   This approach works regardless of the starting position or grid size. It naturally handles cases where the starting position is not at the grid's corner or center.

**Implementation Details:**

1. The `initializeBounds` method sets up the initial state of our boundaries based on the starting position. We initialize `rightBound` to `cStart + 1` to prepare for the first eastward movement.

2. The `addToPath` method encapsulates the logic of adding a position to our path and incrementing the `currentIndex`. This abstraction simplifies the traversal methods and centralizes the position recording logic.

3. In each traversal method, we use a for-loop to move along the current edge of our spiral. The loop bounds are carefully chosen to respect both the spiral's current extent and the grid's boundaries.

4. The main `spiralMatrixIII` method orchestrates the entire process, calling the appropriate traversal methods and adjusting boundaries as needed.


### Complexity

- **Time Complexity: O(max(rows, cols)^2)**

  The time complexity of this solution is quadratic in terms of the larger dimension of the grid. Here's why:

  1. In the worst case, we need to visit all cells in the grid, which is rows * cols.
  2. However, our spiral pattern extends beyond the grid boundaries.
  3. The number of steps in each direction increases by 1 after every two movements (right-down or left-up).
  4. The maximum number of steps in any direction is bounded by max(rows, cols).
  5. Therefore, the total number of positions we consider (including those outside the grid) is proportional to max(rows, cols)^2.

  It's important to note that while we consider positions outside the grid, we only record positions within the grid. This means that for a very large grid with a starting position near the center, we might approach O(rows * cols) operations. However, for the general case and especially when starting near a corner, the O(max(rows, cols)^2) bound holds.

- **Space Complexity: O(rows * cols)**

  The space complexity is linear in terms of the total number of cells in the grid:

  1. We create a 2D array `path` to store all the visited positions within the grid.
  2. The size of this array is exactly rows * cols, as we need to visit every cell in the grid exactly once.
  3. Besides the `path` array, we only use a constant amount of additional space for our boundary variables and loop counters.

Note that while our spiral pattern extends beyond the grid, we only store positions that fall within the grid boundaries. This keeps our space complexity directly proportional to the size of the input grid, regardless of how far our spiral extends beyond it.


# Code
```Java []
class Solution {
    int leftBound, topBound, rightBound, bottomBound, currentIndex;
    int[][] path;

    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        int totalCells = cols * rows;
        path = new int[totalCells][];
        
        initializeBounds(rStart, cStart);
        addToPath(rStart, cStart);
        
        while (currentIndex < totalCells) {
            if (topBound >= 0) {
                traverseEast(Math.max(0, leftBound + 1), Math.min(cols - 1, rightBound));
            }
            bottomBound++;
            if (currentIndex >= totalCells) break;
            
            if (rightBound < cols) {
                traverseSouth(Math.max(0, topBound + 1), Math.min(rows - 1, bottomBound));
            }
            leftBound--;
            if (currentIndex >= totalCells) break;
            
            if (bottomBound < rows) {
                traverseWest(Math.min(cols - 1, rightBound - 1), Math.max(0, leftBound));
            }
            topBound--;
            if (currentIndex >= totalCells) break;
            
            if (leftBound >= 0) {
                traverseNorth(Math.min(rows - 1, bottomBound - 1), Math.max(0, topBound));
            }
            rightBound++;
            if (currentIndex >= totalCells) break;
        }
        
        return path;
    }

    private void initializeBounds(int rStart, int cStart) {
        leftBound = rightBound = cStart;
        topBound = bottomBound = rStart;
        currentIndex = 0;
        rightBound++;
    }

    private void addToPath(int row, int col) {
        path[currentIndex++] = new int[]{row, col};
    }

    private void traverseEast(int start, int end) {
        for (int i = start; i <= end; i++) addToPath(topBound, i);
    }

    private void traverseWest(int start, int end) {
        for (int i = start; i >= end; i--) addToPath(bottomBound, i);
    }

    private void traverseSouth(int start, int end) {
        for (int i = start; i <= end; i++) addToPath(i, rightBound);
    }

    private void traverseNorth(int start, int end) {
        for (int i = start; i >= end; i--) addToPath(i, leftBound);
    }
}
```
```C++ []
class Solution {
private:
    int rows, cols, leftBound, topBound, rightBound, bottomBound;
    vector<vector<int>> path;

    void addToPath(int row, int col) {
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
            path.push_back({row, col});
        }
    }

    void traverseEast(int start, int end) {
        for (int i = start; i <= end; ++i) addToPath(topBound, i);
    }

    void traverseWest(int start, int end) {
        for (int i = start; i >= end; --i) addToPath(bottomBound, i);
    }

    void traverseSouth(int start, int end) {
        for (int i = start; i <= end; ++i) addToPath(i, rightBound);
    }

    void traverseNorth(int start, int end) {
        for (int i = start; i >= end; --i) addToPath(i, leftBound);
    }

public:
    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        this->rows = rows;
        this->cols = cols;
        int totalCells = rows * cols;
        path.reserve(totalCells);

        leftBound = rightBound = cStart;
        topBound = bottomBound = rStart;
        ++rightBound;

        addToPath(rStart, cStart);

        while (path.size() < totalCells) {
            if (topBound >= 0) traverseEast(max(0, leftBound + 1), min(cols - 1, rightBound));
            ++bottomBound;
            if (path.size() >= totalCells) break;

            if (rightBound < cols) traverseSouth(max(0, topBound + 1), min(rows - 1, bottomBound));
            --leftBound;
            if (path.size() >= totalCells) break;

            if (bottomBound < rows) traverseWest(min(cols - 1, rightBound - 1), max(0, leftBound));
            --topBound;
            if (path.size() >= totalCells) break;

            if (leftBound >= 0) traverseNorth(min(rows - 1, bottomBound - 1), max(0, topBound));
            ++rightBound;
            if (path.size() >= totalCells) break;
        }

        return path;
    }
};
```
```Python []
class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        total_cells = rows * cols
        path = []
        left_bound = right_bound = cStart
        top_bound = bottom_bound = rStart
        right_bound += 1

        def add_to_path(row: int, col: int):
            if 0 <= row < rows and 0 <= col < cols:
                path.append([row, col])

        add_to_path(rStart, cStart)

        while len(path) < total_cells:
            if top_bound >= 0:
                for col in range(max(0, left_bound + 1), min(cols, right_bound) + 1):
                    add_to_path(top_bound, col)
            bottom_bound += 1
            if len(path) >= total_cells:
                break

            if right_bound < cols:
                for row in range(max(0, top_bound + 1), min(rows, bottom_bound) + 1):
                    add_to_path(row, right_bound)
            left_bound -= 1
            if len(path) >= total_cells:
                break

            if bottom_bound < rows:
                for col in range(min(cols - 1, right_bound - 1), max(-1, left_bound - 1), -1):
                    add_to_path(bottom_bound, col)
            top_bound -= 1
            if len(path) >= total_cells:
                break

            if left_bound >= 0:
                for row in range(min(rows - 1, bottom_bound - 1), max(-1, top_bound - 1), -1):
                    add_to_path(row, left_bound)
            right_bound += 1
            if len(path) >= total_cells:
                break

        return path
```
```Go []
func spiralMatrixIII(rows int, cols int, rStart int, cStart int) [][]int {
    totalCells := rows * cols
    path := make([][]int, 0, totalCells)
    leftBound, rightBound, topBound, bottomBound := cStart, cStart+1, rStart, rStart

    addToPath := func(row, col int) {
        if row >= 0 && row < rows && col >= 0 && col < cols {
            path = append(path, []int{row, col})
        }
    }

    traverseEast := func(start, end int) {
        for i := start; i <= end; i++ {
            addToPath(topBound, i)
        }
    }

    traverseWest := func(start, end int) {
        for i := start; i >= end; i-- {
            addToPath(bottomBound, i)
        }
    }

    traverseSouth := func(start, end int) {
        for i := start; i <= end; i++ {
            addToPath(i, rightBound)
        }
    }

    traverseNorth := func(start, end int) {
        for i := start; i >= end; i-- {
            addToPath(i, leftBound)
        }
    }

    addToPath(rStart, cStart)

    for len(path) < totalCells {
        if topBound >= 0 {
            traverseEast(max(0, leftBound+1), min(cols-1, rightBound))
        }
        bottomBound++
        if len(path) >= totalCells {
            break
        }

        if rightBound < cols {
            traverseSouth(max(0, topBound+1), min(rows-1, bottomBound))
        }
        leftBound--
        if len(path) >= totalCells {
            break
        }

        if bottomBound < rows {
            traverseWest(min(cols-1, rightBound-1), max(0, leftBound))
        }
        topBound--
        if len(path) >= totalCells {
            break
        }

        if leftBound >= 0 {
            traverseNorth(min(rows-1, bottomBound-1), max(0, topBound))
        }
        rightBound++
        if len(path) >= totalCells {
            break
        }
    }

    return path
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
```Rust []
impl Solution {
    pub fn spiral_matrix_iii(rows: i32, cols: i32, r_start: i32, c_start: i32) -> Vec<Vec<i32>> {
        let total_cells = (rows * cols) as usize;
        let mut path = Vec::with_capacity(total_cells);
        let (mut left_bound, mut right_bound, mut top_bound, mut bottom_bound) = (c_start, c_start + 1, r_start, r_start);

        let add_to_path = |row: i32, col: i32, path: &mut Vec<Vec<i32>>| {
            if row >= 0 && row < rows && col >= 0 && col < cols {
                path.push(vec![row, col]);
            }
        };

        let traverse_east = |start: i32, end: i32, top: i32, path: &mut Vec<Vec<i32>>| {
            for i in start..=end {
                add_to_path(top, i, path);
            }
        };

        let traverse_west = |start: i32, end: i32, bottom: i32, path: &mut Vec<Vec<i32>>| {
            for i in (end..=start).rev() {
                add_to_path(bottom, i, path);
            }
        };

        let traverse_south = |start: i32, end: i32, right: i32, path: &mut Vec<Vec<i32>>| {
            for i in start..=end {
                add_to_path(i, right, path);
            }
        };

        let traverse_north = |start: i32, end: i32, left: i32, path: &mut Vec<Vec<i32>>| {
            for i in (end..=start).rev() {
                add_to_path(i, left, path);
            }
        };

        add_to_path(r_start, c_start, &mut path);

        while path.len() < total_cells {
            if top_bound >= 0 {
                traverse_east(0.max(left_bound + 1), (cols - 1).min(right_bound), top_bound, &mut path);
            }
            bottom_bound += 1;
            if path.len() >= total_cells {
                break;
            }

            if right_bound < cols {
                traverse_south(0.max(top_bound + 1), (rows - 1).min(bottom_bound), right_bound, &mut path);
            }
            left_bound -= 1;
            if path.len() >= total_cells {
                break;
            }

            if bottom_bound < rows {
                traverse_west((cols - 1).min(right_bound - 1), 0.max(left_bound), bottom_bound, &mut path);
            }
            top_bound -= 1;
            if path.len() >= total_cells {
                break;
            }

            if left_bound >= 0 {
                traverse_north((rows - 1).min(bottom_bound - 1), 0.max(top_bound), left_bound, &mut path);
            }
            right_bound += 1;
            if path.len() >= total_cells {
                break;
            }
        }

        path
    }
}
```
```JavaScript []
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const totalCells = rows * cols;
    const path = [];
    let [leftBound, rightBound, topBound, bottomBound] = [cStart, cStart + 1, rStart, rStart];

    const addToPath = (row, col) => {
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
            path.push([row, col]);
        }
    };

    const traverseEast = (start, end) => {
        for (let i = start; i <= end; i++) addToPath(topBound, i);
    };

    const traverseWest = (start, end) => {
        for (let i = start; i >= end; i--) addToPath(bottomBound, i);
    };

    const traverseSouth = (start, end) => {
        for (let i = start; i <= end; i++) addToPath(i, rightBound);
    };

    const traverseNorth = (start, end) => {
        for (let i = start; i >= end; i--) addToPath(i, leftBound);
    };

    addToPath(rStart, cStart);

    while (path.length < totalCells) {
        if (topBound >= 0) traverseEast(Math.max(0, leftBound + 1), Math.min(cols - 1, rightBound));
        bottomBound++;
        if (path.length >= totalCells) break;

        if (rightBound < cols) traverseSouth(Math.max(0, topBound + 1), Math.min(rows - 1, bottomBound));
        leftBound--;
        if (path.length >= totalCells) break;

        if (bottomBound < rows) traverseWest(Math.min(cols - 1, rightBound - 1), Math.max(0, leftBound));
        topBound--;
        if (path.length >= totalCells) break;

        if (leftBound >= 0) traverseNorth(Math.min(rows - 1, bottomBound - 1), Math.max(0, topBound));
        rightBound++;
        if (path.length >= totalCells) break;
    }

    return path;
};
```

---


Hey everyone,

**PLEASE DON'T UPVOTE THIS POST AT ALL.**

Look, I write these solutions for myself. It's just easier to post 'em here than keeping them on my computer or throwing them in a GitHub repo. When I need to revise stuff, I can just come back here. Simple.

*If you've got a real question, sure, drop a comment. I'll try to help if I can. If you find the solution helpful, good for you. If you don't, I'm sorry. And if you've got something to add like advice, optimization, or anything useful just drop a comment. But for god's sake, don't upvote. People have turned LeetCode into some kinda social media, farming likes as if LeetCode's gonna pay them or companies are gonna grab them by the leg and offer them a job. I don't want any of that nonsense.
so please, DO NOT UPVOTE THIS POST. I mean it.*

Once posts hit the top 4-5 solutions, things get messy real fast. You get all this spam, bots, random unrelated comments, Fake-real and stupid upvote/downvote drama. I want none of that BS.
So if you see this post going above 2-3 upvotes, even a downvote is better than an upvote.

Thanks for getting it.
