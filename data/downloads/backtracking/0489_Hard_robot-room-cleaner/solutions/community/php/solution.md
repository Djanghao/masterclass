# Spiral Backtracking - going clockwise

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/5672987/](https://leetcode.com/problems/robot-room-cleaner/solutions/5672987/)

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
```php []
/**
 * // This is the Robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * class Robot {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     function move() {}
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     function turnLeft() {}
 *     function turnRight() {}
 *
 *     // Clean the current cell.
 *     function clean() {}
 * }
 */

class Solution {
    /**
     * @param Robot $robot
     * @return 
     */

    private $directions = [];    
    private $robot;
    
    function cleanRoom($robot) {
        $this->robot = $robot;

        // Going 12'0 clock, then 3, 6 and 9
        // actually going 9, 12, 3, 6
        $this->directions = [[-1,0],[0,1],[1,0],[0,-1]];
        $visited = [];
        $this->dfs(0,0,0,$visited);
    }

    function dfs($row, $col, $d,&$visited){
        $visited[$row][$col]=1;
        $this->robot->clean();

        // going clockwise : 0: 'up', 1: 'right', 2: 'down', 3: 'left'
        for($i=0; $i<4; $i++){
            $newD = (($d + $i) % 4);

            $newRow = $row + $this->directions[$newD][0];
            $newCol = $col + $this->directions[$newD][1];

            if(!($visited[$newRow][$newCol]) && $this->robot->move()){
                $this->dfs($newRow, $newCol, $newD, $visited);
                $this->goBack();
            }
            // turn the robot following chosen direction : clockwise
            $this->robot->turnRight();
        }
    }

    function goBack(){
        $this->robot->turnRight();
        $this->robot->turnRight();
        $this->robot->move();
        $this->robot->turnRight();
        $this->robot->turnRight();
    }
}
```