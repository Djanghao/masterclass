# 100% runtime 100% memory with js

**Author:** nghiadq
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5951568/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5951568/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First you need to check do we start at "grid[0][0] == 0"

# Approach
<!-- Describe your approach to solving the problem. -->

After that the way to reslove it is:
1. Loop all grid and set key=Step -- value=Position
1. And than we check knight-like moves between consecutive steps.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. The function iterates through all cells in the grid twice:
     1. First, to populate the db map, which takes O(n^2) time where n is the size of the grid.
    1. Second, to check all moves between consecutive steps, which also takes O(n^2) time.
1. Overall, the time complexity is O(n^2), where n is the size of the grid (i.e., for an n x n grid, the complexity is quadratic).
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1. The function uses a Map to store the positions of all numbers in the grid, which takes up O(n^2) space.
1. There are no other significant data structures used that grow with input size.
Thus, the space complexity is O(n^2).
# Code
```typescript []
function checkValidGrid(grid: number[][]): boolean {
    let db = new Map<number, number[]>()
    let result = true
    if (grid[0][0] != 0)
        return false
    
    //loop to set {index: position}
    /** [
            {0: [0,0]},
            {1: [2,1]}, 
            {2: [4,2]...}
        ]
     */
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            db.set(grid[i][j], [i, j])
        }
    }

    // check next position is valid
    const checkStep = (currentStep: number[], nextStep: number[]) => {
        let ci = currentStep[0]
        let cj = currentStep[1]
        let ni = nextStep[0]
        let nj = nextStep[1]
        if (ci == ni + 2 || ci == ni - 2) {
            return cj == nj - 1 || cj == nj + 1
        } else if (ci == ni + 1 || ci == ni - 1) {
            return cj == nj - 2 || cj == nj + 2
        } else {
            result = false
            return false
        }
    }

    let oldStep: number[] = db.get(0)
    //loop 0 -> grid Length to check valid
    for (let i = 1; i < db.size; i++) {
        let temp = checkStep(oldStep, db.get(i))
        if (!temp) {
            result = false
            return false
        }
        oldStep = db.get(i)
    }
    return result

};

```