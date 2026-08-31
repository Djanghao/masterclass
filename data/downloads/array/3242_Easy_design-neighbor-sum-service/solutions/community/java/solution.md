# Simple Java Code ☠️

**Author:** abhinandannaik1717
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5584708/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5584708/)

---



# Code
```
class neighborSum {
    int[][] grid = new int[10][10];
    int i=0,j=0;
    public neighborSum(int[][] grid) {
        this.grid=grid;
        return ;
    }
    public void  help(int value){
        for(i=0;i<grid.length;i++){
            for(j=0;j<grid[i].length;j++){
                if(grid[i][j]==value){
                    this.i=i;
                    this.j=j;
                    return;
                }
            }
        }
    }
    public int adjacentSum(int value) {
        int sum=0;
        help(value);
        if(i!=0){
            sum+=grid[i-1][j];
        }
        if(j!=0){
            sum+=grid[i][j-1];
        }
        if(i!=grid.length-1){
            sum+=grid[i+1][j];
        }
        if(j!=grid[i].length-1){
            sum+=grid[i][j+1];
        }
        return sum;
    }
    
    public int diagonalSum(int value) {
        int sum=0;
        help(value);
        if(i!=0 &&  j!=0){
            sum+=grid[i-1][j-1];
        }
        if(i!=0 && j!=grid[i].length-1){
            sum+=grid[i-1][j+1];
        }
        if(i!=grid.length-1 &&  j!=0){
            sum+=grid[i+1][j-1];
        }
        if(i!=grid.length-1 && j!=grid[i].length-1){
            sum+=grid[i+1][j+1];
        }
        return sum;
    }
}

/**
 * Your neighborSum object will be instantiated and called as such:
 * neighborSum obj = new neighborSum(grid);
 * int param_1 = obj.adjacentSum(value);
 * int param_2 = obj.diagonalSum(value);
 */
```




### Code Explanation

#### Class Initialization

```java
class neighborSum {
    int[][] grid = new int[10][10]; // This will hold the grid
    int i = 0, j = 0; // To store the indices of the value

    public neighborSum(int[][] grid) {
        this.grid = grid; // Initialize the grid
        return;
    }
}
```

- The `grid` array is initialized to hold the input grid.
- The `neighborSum` constructor takes a 2D array as input and initializes the class variable `grid` with this array.

#### Helper Method: `help(int value)`

```java
public void help(int value) {
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == value) {
                this.i = i;
                this.j = j;
                return;
            }
        }
    }
}
```

- This method finds the indices `(i, j)` of the specified `value` in the grid.
- It iterates over each element of the grid. When it finds the `value`, it stores the indices in the instance variables `i` and `j`.
- The method stops searching once the value is found.

#### Method: `adjacentSum(int value)`

```java
public int adjacentSum(int value) {
    int sum = 0;
    help(value); // Find the position of the value

    if (i != 0) {
        sum += grid[i - 1][j]; // Top neighbor
    }
    if (j != 0) {
        sum += grid[i][j - 1]; // Left neighbor
    }
    if (i != grid.length - 1) {
        sum += grid[i + 1][j]; // Bottom neighbor
    }
    if (j != grid[i].length - 1) {
        sum += grid[i][j + 1]; // Right neighbor
    }
    return sum;
}
```

- This method calculates the sum of adjacent neighbors of the specified `value`.
- After finding the position of `value` using the `help` method, it checks and sums the values of the top, bottom, left, and right neighbors if they exist.
  - `if (i != 0)` checks if the top neighbor exists.
  - `if (j != 0)` checks if the left neighbor exists.
  - `if (i != grid.length - 1)` checks if the bottom neighbor exists.
  - `if (j != grid[i].length - 1)` checks if the right neighbor exists.

#### Method: `diagonalSum(int value)`

```java
public int diagonalSum(int value) {
    int sum = 0;
    help(value); // Find the position of the value

    if (i != 0 && j != 0) {
        sum += grid[i - 1][j - 1]; // Top-left neighbor
    }
    if (i != 0 && j != grid[i].length - 1) {
        sum += grid[i - 1][j + 1]; // Top-right neighbor
    }
    if (i != grid.length - 1 && j != 0) {
        sum += grid[i + 1][j - 1]; // Bottom-left neighbor
    }
    if (i != grid.length - 1 && j != grid[i].length - 1) {
        sum += grid[i + 1][j + 1]; // Bottom-right neighbor
    }
    return sum;
}
```

- This method calculates the sum of diagonal neighbors of the specified `value`.
- After finding the position of `value` using the `help` method, it checks and sums the values of the top-left, top-right, bottom-left, and bottom-right neighbors if they exist.
  - `if (i != 0 && j != 0)` checks if the top-left neighbor exists.
  - `if (i != 0 && j != grid[i].length - 1)` checks if the top-right neighbor exists.
  - `if (i != grid.length - 1 && j != 0)` checks if the bottom-left neighbor exists.
  - `if (i != grid.length - 1 && j != grid[i].length - 1)` checks if the bottom-right neighbor exists.

### Example

Let's take a grid and see how the methods work:

```java
int[][] grid = {
    {0, 1, 2},
    {3, 4, 5},
    {6, 7, 8}
};
neighborSum obj = new neighborSum(grid);
int adjSum = obj.adjacentSum(4);  // Expected: 1 (top) + 3 (left) + 5 (right) + 7 (bottom) = 16
int diagSum = obj.diagonalSum(4); // Expected: 0 (top-left) + 2 (top-right) + 6 (bottom-left) + 8 (bottom-right) = 16
```

### Complexity Analysis

#### Time Complexity
- **Initialization**: \\(O(1)\\)
- **Finding the Position (help method)**: \\(O(n^2)\\) 
- **Sum Calculations**: \\(O(1)\\) 

#### Space Complexity  \\(O(1)\\) 

