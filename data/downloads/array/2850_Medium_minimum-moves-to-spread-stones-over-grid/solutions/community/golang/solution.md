# Go | Recursion+Backtracking

**Author:** b3k3r
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4046003/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4046003/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Only factor in what it takes to move stones from a cell for the grid with > 1 stones to one with 0 stones. Dont have to bother with any other cells. Distance can be calculated using equation for Manhattan distance from one cell to another.

# Approach
<!-- Describe your approach to solving the problem. -->
Create a collection of cells with 0 stones and cells with more than 1 stone. For every empty cell iterate through possible cells to take from. Account for taking from that cell and recurse. Maintain a min for empty cell and return it.

Initially I tried to simply iterate through all empty cells and calculate the min manhattan distance for each stone cell. The problem is in some instances, a stone would have to be taken from a cell that is not the min of that empty to allow for more other cells to take from their min, resulting in a smaller global min.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^m) (i think?) where n is the number of empty cells and m is the number of stone cells. While this is not good n and m will never exceed 4.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n+m) where n is the number of empty cells and m is the number of stone cells.

# Code
```
var emptyCells [][2]int
var stoneCells [][2]int

func minimumMoves(grid [][]int) int {
    emptyCells = [][2]int{}
    stoneCells = [][2]int{}
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if grid[i][j] == 0 {
                emptyCells = append(emptyCells, [2]int{i, j})
            } else if grid[i][j] > 1 {
                stoneCells = append(stoneCells, [2]int{i, j})
            }
        }
    }
    return solve(grid, 0)
}

func solve(grid [][]int, emptyCellIdx int) int {
    if emptyCellIdx == len(emptyCells) { return 0 }
    curEmpty := emptyCells[emptyCellIdx]
    dist, ans := 0, math.MaxInt
    for i := 0; i < len(stoneCells); i++ {
        take := stoneCells[i]
        // Only take if the grid allows it
        if grid[take[0]][take[1]] == 1 { continue }
        // Calculate manhattan distance
        d := abs(curEmpty[0]-take[0]) + abs(curEmpty[1]-take[1])
        // Accout for taking this stone
        grid[take[0]][take[1]]--
        // Recurse
        dist = d + solve(grid, emptyCellIdx+1)
        // Backtrack
        grid[take[0]][take[1]]++
        ans = min(dist, ans)
    }
    return ans
}

func min(x, y int) int { if x < y { return x }; return y }
func abs(x int) int { if x < 0 { return -x }; return x }
```