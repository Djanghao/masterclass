# ✅☑[C++/C/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4414913/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4414913/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
*(Also explained in the code)*

1. he algorithm uses a `count` vector to keep track of the count of each number in the grid.
1. It initializes `repeated` and `missing` variables to 0.
1. It iterates through each element in the grid:
    - Increments the count of each number and identifies the repeated value when its count reaches 2.
1. Then, it scans the count vector to identify the missing value by finding the count of 0.
1. Finally, it returns a vector with two values: the repeated number and the missing number.


# Complexity
- Time complexity:
   $$O(n^2)$$
    

- Space complexity:
   $$O(n^2)$$
    


# Code
```C++ []
class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<int> count(n * n + 1, 0); // To store the count of each number
        
        int repeated = 0, missing = 0;
        
        // Count occurrences of each number in the grid
        for (const auto& row : grid) {
            for (int num : row) {
                count[num]++;
                if (count[num] == 2) { // Identify the repeated value
                    repeated = num;
                }
            }
        }
        
        // Find the missing value
        for (int i = 1; i <= n * n; ++i) {
            if (count[i] == 0) { // Identify the missing value
                missing = i;
                break;
            }
        }
        
        return {repeated, missing};
    }
};



```
```C []
#include <stdio.h>
#include <stdlib.h>

int* findMissingAndRepeatedValues(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int* count = (int*)calloc((n * n + 1), sizeof(int));
    int repeated = 0, missing = 0;
    
    // Count occurrences of each number in the grid
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < gridColSize[i]; ++j) {
            int num = grid[i][j];
            count[num]++;
            if (count[num] == 2) { // Identify the repeated value
                repeated = num;
            }
        }
    }
    
    // Find the missing value
    for (int i = 1; i <= n * n; ++i) {
        if (count[i] == 0) { // Identify the missing value
            missing = i;
            break;
        }
    }
    
    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = repeated;
    result[1] = missing;
    
    return result;
}




```
```Java []
public class Solution {
    public int[] findMissingAndRepeatedValues(int[][] grid) {
        int n = grid.length;
        int[] count = new int[n * n + 1];
        int repeated = 0, missing = 0;
        
        // Count occurrences of each number in the grid
        for (int[] row : grid) {
            for (int num : row) {
                count[num]++;
                if (count[num] == 2) { // Identify the repeated value
                    repeated = num;
                }
            }
        }
        
        // Find the missing value
        for (int i = 1; i <= n * n; ++i) {
            if (count[i] == 0) { // Identify the missing value
                missing = i;
                break;
            }
        }
        
        return new int[] { repeated, missing };
    }
}



```
```python3 []
def find_missing_and_repeated_values(grid):
    n = len(grid)
    count = [0] * (n * n + 1)  # To store the count of each number
    
    repeated = 0
    missing = 0
    
    # Count occurrences of each number in the grid
    for row in grid:
        for num in row:
            count[num] += 1
            if count[num] == 2:  # Identify the repeated value
                repeated = num
    
    # Find the missing value
    for i in range(1, n * n + 1):
        if count[i] == 0:  # Identify the missing value
            missing = i
            break
    
    return [repeated, missing]



```
```javascript []
function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const count = Array(n * n + 1).fill(0); // To store the count of each number
    
    let repeated = 0;
    let missing = 0;
    
    // Count occurrences of each number in the grid
    for (const row of grid) {
        for (const num of row) {
            count[num]++;
            if (count[num] === 2) { // Identify the repeated value
                repeated = num;
            }
        }
    }
    
    // Find the missing value
    for (let i = 1; i <= n * n; ++i) {
        if (count[i] === 0) { // Identify the missing value
            missing = i;
            break;
        }
    }
    
    return [repeated, missing];
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---