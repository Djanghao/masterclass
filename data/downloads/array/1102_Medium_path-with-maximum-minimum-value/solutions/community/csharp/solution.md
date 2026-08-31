# C# - Clearly explained - Binary Search + BFS - [5.88%, 17.65%] (Not the best but honest brain grind)

**Author:** PREngineer
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/3312830/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/3312830/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {

    // To make our life easier
    int rows;
    int cols;
    // To calculate neighbors
    int[][] directions = new int[4][] { new int[] {-1, 0},
                                        new int[] {1, 0},
                                        new int[] {0, -1},
                                        new int[] {0, 1}
                                      };

    public int MaximumMinimumPath(int[][] grid) {
        // Set our dimensions
        rows = grid.Length;
        cols = grid[0].Length;

        // Call to find our path
        int answer = findGreatestPath(0, 0, grid);

        // Return the answer
        return answer;
    }

    // This function does Binary Search for the highest target we can use to successfully traverse the matrix
    public int findGreatestPath(int row, int col, int[][] grid){
        // Base case, if our first number is 0, no point in looking, it's the min possible value
        if(grid[row][col] == 0){
            return 0;
        }
        
        // Pointers for binary search
        int left = 0;
        int right = int.MaxValue;
        
        // Do a binary search for the greatest number we can use
        while(left <= right){
            // Blank visited array
            bool[,] visited = new bool[rows,cols];

            // Determine our mid
            int mid = left + (right-left) / 2;
            
            // See if mid finds a path
            bool result = validatePath(0, 0, mid, grid, visited);
            
            // If successful, increase left
            if(result){
                left = mid + 1;
            }
            // If unsuccessful, reduce right
            else{
                right = mid - 1;
            }
        }

        // Return the value found - right is max
        return right;
    }

    // This function will validate whether we can find a path with the given target value
    public bool validatePath(int row, int col, int target, int[][] grid, bool[,] visited){
        // Mark current node as visited
        visited[row,col] = true;

        // Base: if our target starts larger than our first number
        if(grid[row][col] < target){
            return false;
        }

        // Base case: We reached the end
        if(row == rows-1 && col == cols-1){
            // Return success
            return true;
        }

        // We want to visit the neighbors with the highest value first, to maximize the search efficiency
        // We will add them all in a maxHeap and go from there exhausting options
        // It contains: <coords, value * -1>
        PriorityQueue<int[],int> neighbors = new PriorityQueue<int[],int>();
        
        // Put all of the neighbors that satisfy our target in the maxHeap
        foreach(int[] coords in directions){
            // Calculate neighbor coords
            int nextRow = row + coords[0];
            int nextCol = col + coords[1];

            // If valid coords   &&   NOT visited
            if( isValidNeighbor(nextRow,nextCol) && !visited[nextRow,nextCol]){
                // Get the neighbor value
                int value = grid[nextRow][nextCol];
                // Satisfies our target
                if(value >= target){
                    // Add to maxHeap
                    neighbors.Enqueue(new int[]{nextRow,nextCol}, value * -1);
                }
            }            
        }

        // If we don't have neighbors to visit
        if(neighbors.Count == 0){
            // Path lead us nowhere, we'll return false
            return false;
        }
        // There are more nodes to try
        else{
            // Start processing the maxHeap of neighbors
            while(neighbors.Count > 0){
                // Get the neighbor and its coords
                int[] neighbor = neighbors.Dequeue();
                int nextRow = neighbor[0];
                int nextCol = neighbor[1];

                // Go to node
                bool result = validatePath( nextRow, nextCol, target, grid, visited );
                
                // Return true if sucess
                if(result)
                {
                    return true;
                }
            }
        }

        // We didn't find a path
        return false;
    }

    // Check if the coordinates are valid
    public bool isValidNeighbor(int row, int col){
        return row >= 0 && row < rows &&
               col >= 0 && col < cols;
    }
}
```