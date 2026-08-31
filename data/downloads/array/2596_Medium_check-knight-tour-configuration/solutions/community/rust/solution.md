# C, C++, C#, Python, Rust, Go, Ruby, Java, Kotlin, Scala, JS, TS, Dart and PHP Solution | Recursive

**Author:** HitenTandon
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3315360/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3315360/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a very easy graph path finding problem, all you need to do is treat the matrix like a graph, where each node is connected to eight nodes, the position of nodes in the matrix is 2 forward/backward and one over(Knight movement pattern), making an 'L' shape. Once you realise this, you can calculate the next possible nodes easily by adding or subtracting 2 or 1 to the x and y indicies on the board, quite easily. 
# Approach
<!-- Describe your approach to solving the problem. -->
We can use recursive DFS to traverse and check wether we can find a possible way to traverse the matrix such that the value of node is the step, on which knight lands on the tile.

To do so, you can very easily, just keep the track of the step you're on, and try and equate it to the value of tile, if it matches then the tile you're on is the next tile in path , otherwise it isn't. If it is then you can repeat the same process for it's neighbors and check if any of the neighbors can form a next tile, till you reach the last tile, where the expected value will be r*c - 1. If some tile exists such that none of the neighbor tiles(in the graph representation) can be next tile, we return false.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(N)$$, where $$N$$ is the number of tiles in the matrix, or, 
$$O(R\xD7C)$$, where $$R$$ is  the number of rows in the matrix and $$C$$ is the number of columns

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(N)$$, where $$N$$ is the number of tiles in the matrix, or, 
$$O(R\xD7C)$$, where $$R$$ is  the number of rows in the matrix and $$C$$ is the number of columns,
or, if you ignore the recursive stack $$O(1)$$


# Code
```C [C]
const size_t VALID_MOVES[8][2] = {
        {-1, -2},                   {1, -2},
    {-2, -1},                           {2, -1},
    
    {-2, 1},                            {2, 1},
        {-1, 2},                    {1, 2}
};
const size_t MOVE_COUNT = 8;

bool is_valid(
    const int** grid, 
    const size_t x,
    const size_t row_count,
    const size_t y,
    const size_t col_count,
    const int expected_pos
) {
    if(x >= row_count || y >= col_count || grid[x][y] != expected_pos) {
        return false;
    }

    if(expected_pos == row_count * col_count - 1) {
        return true;
    }

    for(size_t i = 0; i < MOVE_COUNT; ++i) {
        if(is_valid(grid, x + VALID_MOVES[i][0], row_count, y + VALID_MOVES[i][1], col_count, expected_pos + 1)) {
            return true;
        }
    }

    return false;
}
bool checkValidGrid(
    const int** grid, 
    const size_t row_count, 
    const int* col_counts
) {
    bool ret_val = is_valid(grid, 0, row_count, 0, col_counts[0], 0);

    for(size_t i = 0; i < row_count; ++i) {
        free(grid[i]);
    }
    free(grid);
    free(col_counts);

    return ret_val;
}
```
```C++ [C]
static const vector<pair<size_t, size_t>> VALID_MOVES = {
        {-1, -2},                   {1, -2},
    {-2, -1},                           {2, -1},
    
    {-2, 1},                            {2, 1},
        {-1, 2},                    {1, 2}
};
class Solution {
private:

    static bool is_valid(
        const vector<vector<int>> &grid, 
        const size_t x, 
        const size_t y, 
        const int expected_pos
    ) {
        if(x >= grid.size() || y >= grid[0].size() || grid[x][y] != expected_pos) {
            return false;
        }

        if(expected_pos == grid.size() * grid[0].size() - 1) {
            return true;
        }

        for(const pair<size_t, size_t> &deltas: VALID_MOVES) {
            if(is_valid(grid, x + deltas.first, y + deltas.second, expected_pos + 1)) {
                return true;
            }
        }

        return false;
    }
public:
    bool checkValidGrid(const vector<vector<int>> &grid) {
        return is_valid(grid, 0, 0, 0);
    }
};
```
```C# [C]
public class Solution {
    private static readonly int[,] VALID_MOVES = {
            {-1, -2},                   {1, -2},
        {-2, -1},                           {2, -1},

        {-2, 1},                            {2, 1},
            {-1, 2},                    {1, 2}
    };
    private static readonly int MOVE_COUNT = 8;

    private static bool IsValid(int[][] grid, int x, int y, int expectedPos) {
        if(x >= grid.Length || x < 0 || y >= grid[0].Length || y < 0 || grid[x][y] != expectedPos) {
            return false;
        }

        if(expectedPos == grid.Length * grid[0].Length - 1) {
            return true;
        }

        for(int i = 0; i < MOVE_COUNT; ++i) {
            if(Solution.IsValid(grid, x + VALID_MOVES[i, 0], y + VALID_MOVES[i, 1], expectedPos + 1)) { 
                return true;
            }
        }

        return false;
    }

    public bool CheckValidGrid(int[][] grid) {
        return Solution.IsValid(grid, 0, 0, 0);
    }
}
```
```Python [Py]
_VALID_MOVES = [
        (-1, -2),                     (1, -2),
    (-2, -1),                             (2, -1),
    
    (-2, 1),                                (2, 1),
        (-1, 2),                        (1, 2)
]

class Solution(object):
    def is_valid(self, grid, x, y, expected_pos):
        if x >= len(grid) or y >= len(grid[0]) or x < 0 or y < 0 or grid[x][y] != expected_pos:
            return False
        
        if expected_pos == len(grid) * len(grid[0]) - 1:
            return True
        
        return any(self.is_valid(grid, x + dx, y + dy, expected_pos + 1) for dx, dy in _VALID_MOVES)
    
    def checkValidGrid(self, grid):
        return self.is_valid(grid, 0, 0, 0)
```
```Python3 [Py]
_VALID_MOVES: List[Tuple[int, int]] = [
        (-1, -2),                     (1, -2),
    (-2, -1),                             (2, -1),
    
    (-2, 1),                                (2, 1),
        (-1, 2),                        (1, 2)
]

class Solution:    
    def is_valid(self, grid: List[List[int]], x: int, y: int, expected_pos: int) -> bool:
        if x >= len(grid) or y >= len(grid[0]) or x < 0 or y < 0 or grid[x][y] != expected_pos:
            return False
        
        if expected_pos == len(grid) * len(grid[0]) - 1:
            return True
        
        return any(self.is_valid(grid, x + dx, y + dy, expected_pos + 1) for dx, dy in _VALID_MOVES)

    def checkValidGrid(self, grid: List[List[int]]) -> bool:
        return self.is_valid(grid, 0, 0, 0)
```
```Rust [Rust]
//usize::MAX == -1 or one back
//usize::MAX - 1 == -2 or two back

const VALID_MOVES: [(usize, usize); 8] = [
        (usize::MAX, usize::MAX - 1),                     (1, usize::MAX - 1),
    (usize::MAX - 1, usize::MAX),                             (2, usize::MAX),
    
    (usize::MAX - 1, 1),                                      (2, 1),
        (usize::MAX, 2),                                   (1, 2)
];

impl Solution {
    pub fn is_valid(grid: &[Vec<i32>], x: usize, y: usize, expected_pos: i32) -> bool {
        if x >= grid.len() || y >= grid[0].len() || grid[x][y] != expected_pos {
            return false;
        }
        
        if expected_pos as usize == grid.len() * grid[0].len() - 1 {
            return true;
        }
        
        VALID_MOVES
            .iter()
            .any(|&(dx, dy)| Self::is_valid(grid, x + dx, y + dy, expected_pos + 1))
    }
    pub fn check_valid_grid(grid: Vec<Vec<i32>>) -> bool {
        Self::is_valid(&grid, 0, 0, 0)
    }
}
```
```Go [Go]
//const arrays are not a thing in Go, otherwise would've used them :(
var VALID_MOVES [8][2]int = [8][2]int{
        {-1, -2},                   {1, -2},
    {-2, -1},                           {2, -1},
    
    {-2, 1},                            {2, 1},
        {-1, 2},                    {1, 2},
}

func isValid(grid [][]int, x int, y int, expectedPos int) bool {
    if x >= len(grid) || y >= len(grid) || x < 0 || y < 0 || grid[x][y] != expectedPos {
        return false
    }

    if expectedPos == len(grid) * len(grid[0]) - 1 {
        return true
    }

    for _, delta := range VALID_MOVES {
        if isValid(grid, x + delta[0], y + delta[1], expectedPos + 1) {
            return true
        }
    }

    return false
}

func checkValidGrid(grid [][]int) bool {
    return isValid(grid, 0, 0, 0)
}
```
```Ruby [Ruby]
VALID_MOVES = [
        [-1, -2],                     [1, -2],
    [-2, -1],                             [2, -1],
    
    [-2, 1],                                [2, 1],
        [-1, 2],                        [1, 2]
]

# @param {Integer[][]} grid
# @return {Boolean}
def check_valid_grid(grid)
   return is_valid(grid, 0, 0, 0) 
end

def is_valid(grid, x, y, expectedPos)
    if x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || grid[x][y] != expectedPos 
        return false
    end

    if expectedPos == grid.length * grid[0].length - 1
        return true
    end

    return VALID_MOVES
            .map {|delta| is_valid(grid, x + delta[0], y + delta[1], expectedPos + 1)}.any?

end
```
```Java [Java]
class Solution {
    private static final int[][] VALID_MOVES = {
            {-1, -2},                   {1, -2},
        {-2, -1},                           {2, -1},
        
        {-2, 1},                            {2, 1},
            {-1, 2},                    {1, 2}
    };

    private static boolean isValid(
        final int[][] grid, 
        final int x, 
        final int y, 
        final int expectedPos
    ) {
        if(x >= grid.length || x < 0 || y >= grid[0].length || y < 0 || grid[x][y] != expectedPos) {
            return false;
        }

        if(expectedPos == grid.length * grid[0].length - 1) {
            return true;
        }

        return Arrays
                .stream(VALID_MOVES)
                .anyMatch(deltas -> Solution.isValid(grid, x + deltas[0], y + deltas[1], expectedPos + 1));
    }

    public static boolean checkValidGrid(final int[][] grid) {
        return Solution.isValid(grid, 0, 0, 0);
    }
}
```
```Kotlin [Java]
class Solution {
    private val VALID_MOVES: Array<IntArray> = arrayOf(
            intArrayOf(-1, -2),                 intArrayOf(1, -2),
        intArrayOf(-2, -1),                           intArrayOf(2, -1),
        
        intArrayOf(-2, 1),                            intArrayOf(2, 1),
            intArrayOf(-1, 2),                    intArrayOf(1, 2)
    );
    private fun isValid(grid: Array<IntArray>, x: Int, y: Int, expectedPos: Int): Boolean {
        if (x >= grid.size || y >= grid[0].size || x < 0 || y < 0 || grid[x][y] != expectedPos) {
            return false;
        }

        if (expectedPos == grid.size * grid[0].size - 1) {
            return true;
        }

        return VALID_MOVES.filter {delta -> this.isValid(grid, x + delta[0], y + delta[1], expectedPos + 1)}.any();
    }
    public fun checkValidGrid(grid: Array<IntArray>): Boolean {
        return this.isValid(grid, 0, 0, 0);
    }
}
```
```Scala [Java]
object Solution {
    private final val VALID_MOVES: Seq[Seq[Int]] = Seq(
            Seq(-1, -2),                 Seq(1, -2),
        Seq(-2, -1),                           Seq(2, -1),
        
        Seq(-2, 1),                            Seq(2, 1),
            Seq(-1, 2),                    Seq(1, 2)
    );
    def isValid(
        grid: Array[Array[Int]], 
        x: Int, y: Int, 
        expectedPos: Int
    ): Boolean = {
        if (x >= grid.length || y >= grid(0).length || x < 0 || y < 0 || grid(x)(y) != expectedPos) {
            return false;
        }

        if (expectedPos == grid.length * grid(0).length - 1) {
            return true;
        }

        VALID_MOVES.exists(delta => isValid(grid, x + delta(0), y + delta(1), expectedPos + 1));

    }
    def checkValidGrid(grid: Array[Array[Int]]): Boolean = {
        return isValid(grid, 0, 0, 0);
    }
}
```
```JS [JS]
const VALID_MOVES = [
        [-1, -2],                     [1, -2],
    [-2, -1],                             [2, -1],
    
    [-2, 1],                                [2, 1],
        [-1, 2],                        [1, 2]
]
const isValid = (grid, x, y, expectedPos) => {
    if (x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || grid[x][y] !== expectedPos) {
        return false;
    }

    if(expectedPos == grid.length * grid[0].length - 1) {
        return true;
    }

    return VALID_MOVES.some(delta => isValid(grid, x + delta[0], y + delta[1], expectedPos + 1));
}

const checkValidGrid = grid => isValid(grid, 0, 0, 0)
```
```TS [JS]
const VALID_MOVES: readonly number[][] = [
        [-1, -2],                     [1, -2],
    [-2, -1],                             [2, -1],
    
    [-2, 1],                                [2, 1],
        [-1, 2],                        [1, 2]
]
const isValid = (
    grid: readonly number[][], 
    x: number, 
    y: number, 
    expectedPos: number
) => {
    if (x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || grid[x][y] !== expectedPos) {
        return false;
    }

    if(expectedPos == grid.length * grid[0].length - 1) {
        return true;
    }

    return VALID_MOVES.some(delta => isValid(grid, x + delta[0], y + delta[1], expectedPos + 1));
}

const checkValidGrid = (grid : readonly number[][]) => isValid(grid, 0, 0, 0)
```
```Dart [JS]
class Solution {
    static const List<List<int>> VALID_MOVES = [
            [-1, -2],                     [1, -2],
        [-2, -1],                             [2, -1],
        
        [-2, 1],                                [2, 1],
            [-1, 2],                        [1, 2]
    ];
    static bool isValid(
        final List<List<int>> grid, 
        final int x, final int y, 
        final int expectedPos
    ) {
        if(x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || grid[x][y] != expectedPos) {
            return false;
        }

        if(expectedPos == grid.length * grid[0].length - 1) {
            return true;
        }

        return VALID_MOVES
                .any((delta) => Solution.isValid(grid, x + delta[0], y + delta[1], expectedPos + 1));
    }
    bool checkValidGrid(final List<List<int>> grid) {
        return Solution.isValid(grid, 0, 0, 0);
    }
}
```
```PHP [PHP]
class Solution {
    const VALID_MOVES = [
            [-1, -2],                   [1, -2],
        [-2, -1],                           [2, -1],
        
        [-2, 1],                            [2, 1],
            [-1, 2],                    [1, 2]
    ];
    function isValid($grid, $x, $y, $expectedPos) {
        if($x >= count($grid) || $y >= count($grid[0]) || $x < 0 || $y < 0 || $grid[$x][$y] != $expectedPos) {
            return false;
        }

        if($expectedPos == count($grid) * count($grid[0]) - 1) {
            return true;
        }

        foreach(self::VALID_MOVES as $delta) {
            if($this->isValid($grid, $x + $delta[0], $y + $delta[1], $expectedPos + 1)) {
                return true;
            }
        }

        return false;
    }
    function checkValidGrid($grid) {
        return $this->isValid($grid, 0, 0, 0);
    }
}
```
