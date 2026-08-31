# Easiest Solution || Beats 80% || Beginner Friendly

**Author:** Taief_Siddique
**Votes:** 3
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/5608872/](https://leetcode.com/problems/spiral-matrix-iii/solutions/5608872/)

---

# Intuition
To tackle this problem, you need to visit every cell in a grid in a spiral order. Starting from a specific cell, you'll move in a spiral pattern: right, down, left, and up, repeating this pattern while covering all cells in the grid. Even if you move outside the grid boundary, you should ensure all cells are visited.

# Approach
1. **Initialization** \uD83D\uDCCD:
   - Set the directions for movement: right (\u2192), down (\u2193), left (\u2190), and up (\u2191).
   - Create an array to store the coordinates of each cell you visit in the order you visit them.
   - Begin at the given starting cell `(rStart, cStart)`.

2. **Spiral Movement** \uD83D\uDD04:
   - Use a loop to simulate moving in a spiral. 
   - Move in each direction (right, down, left, up) and adjust the number of steps you take in each direction.
   - After moving in two directions, increase the number of steps to expand the spiral.
   - Ensure that each cell is within the grid boundaries before adding it to your list.

3. **Completion** \uD83C\uDFAF:
   - Continue this process until you have visited every cell in the grid.

# Complexity
- Time complexity: \\( O(m \	imes n) \\) \uD83D\uDCC8
  - This is because each cell in the grid is visited exactly once.
- Space complexity: \\( O(m \	imes n) \\) \uD83D\uDCBE
  - This is due to the space needed to store the coordinates of all cells in the result array.
# Code
```Java []
class Solution {
    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        int[][] result = new int[rows * cols][2];
        int[] directions = {0, 1, 0, -1, 0};
        int r = rStart, c = cStart;
        int step = 1;
        int index = 0;

        result[index++] = new int[]{r, c};
        
        while (index < rows * cols) {
            for (int i = 0; i < 4; i++) {
                int dir = i % 4;
                int dr = directions[dir];
                int dc = directions[dir + 1];
                
                for (int j = 0; j < step; j++) {
                    r += dr;
                    c += dc;
                    
                    if (r >= 0 && r < rows && c >= 0 && c < cols) {
                        result[index++] = new int[]{r, c};
                    }
                }
                
                if (i % 2 == 1) {
                    step++;
                }
            }
        }
        
        return result;
    }
}

```
```python []
class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        result = []
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        r, c = rStart, cStart
        step = 1
        index = 0
        
        result.append([r, c])
        
        while len(result) < rows * cols:
            for i in range(4):
                dr, dc = directions[i]
                
                for _ in range(step):
                    r += dr
                    c += dc
                    
                    if 0 <= r < rows and 0 <= c < cols:
                        result.append([r, c])
                        
                if i % 2 == 1:
                    step += 1
        
        return result

```
```C++ []
#include <vector>

class Solution {
public:
    std::vector<std::vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        std::vector<std::vector<int>> result;
        std::vector<std::vector<int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int r = rStart, c = cStart, step = 1;
        
        result.push_back({r, c});
        
        while (result.size() < rows * cols) {
            for (int i = 0; i < 4; i++) {
                int dr = directions[i][0];
                int dc = directions[i][1];
                
                for (int j = 0; j < step; j++) {
                    r += dr;
                    c += dc;
                    
                    if (r >= 0 && r < rows && c >= 0 && c < cols) {
                        result.push_back({r, c});
                    }
                }
                
                if (i % 2 == 1) {
                    step++;
                }
            }
        }
        
        return result;
    }
};

```
```Javascript []
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const result = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let r = rStart, c = cStart, step = 1;
    
    result.push([r, c]);
    
    while (result.length < rows * cols) {
        for (let i = 0; i < 4; i++) {
            const [dr, dc] = directions[i];
            
            for (let j = 0; j < step; j++) {
                r += dr;
                c += dc;
                
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }
            
            if (i % 2 === 1) {
                step++;
            }
        }
    }
    
    return result;
};

```
```ruby []
def spiral_matrix_iii(rows, cols, r_start, c_start)
  result = []
  directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  r, c = r_start, c_start
  step = 1
  
  result << [r, c]
  
  while result.size < rows * cols
    directions.each_with_index do |(dr, dc), i|
      step.times do
        r += dr
        c += dc
        
        if r >= 0 && r < rows && c >= 0 && c < cols
          result << [r, c]
        end
      end
      
      step += 1 if i % 2 == 1
    end
  end
  
  result
end
![main-qimg-dd19ad82f9afcc414cdfc8ded048648e-lq.jpeg](./images/0.jpeg)

```
```C []
#include <stdlib.h>

int** spiralMatrixIII(int rows, int cols, int rStart, int cStart, int* returnSize, int** returnColumnSizes) {
    int** result = (int**)malloc(rows * cols * sizeof(int*));
    *returnColumnSizes = (int*)malloc(rows * cols * sizeof(int));
    int directions[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    int r = rStart, c = cStart, step = 1, index = 0;
    
    result[index] = (int*)malloc(2 * sizeof(int));
    result[index][0] = r;
    result[index][1] = c;
    (*returnColumnSizes)[index] = 2;
    index++;
    
    while (index < rows * cols) {
        for (int i = 0; i < 4; i++) {
            int dr = directions[i][0];
            int dc = directions[i][1];
            
            for (int j = 0; j < step; j++) {
                r += dr;
                c += dc;
                
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result[index] = (int*)malloc(2 * sizeof(int));
                    result[index][0] = r;
                    result[index][1] = c;
                    (*returnColumnSizes)[index] = 2;
                    index++;
                }
            }
            
            if (i % 2 == 1) {
                step++;
            }
        }
    }
    
    *returnSize = rows * cols;
    return result;
}

```


![e78e83d2-3828-4681-96d5-40e225e1d8b0_1699854685.5280945.jpeg](./images/1.jpeg)

