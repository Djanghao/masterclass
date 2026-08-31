# Using DFS

**Author:** rukasufigueiredo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5990213/](https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5990213/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    public $counter = 0;
    public $arrCounter = [];
    public $arrResult = [];
    public $memoization;
    public $numRows = 0;
    public $numCols = 0;
   

    public function maxMoves($grid) {
        $this->numRows = count($grid); // count rows
        $this->numCols = count($grid[0]); // count columns
        $this->memoization = array_fill(0, $this->numRows, array_fill(0, $this->numCols, -1));
     
        // Try DFS from every cell in the first column
        for ($row = 0; $row < $this->numRows; $row++) {
            $counter = 0;
            $col = 0;
            $this->dfs($grid, $row, $col, $row, $counter, null);
        }
       
        rsort($this->arrCounter);

        return $this->arrCounter[0];
    }



    public function dfs($grid, $i, $j, $ref, $counter, $prevCell = null) {   
      
        if (
            $i < 0 || $i > $this->numRows || $j > $this->numCols            
        || $this->memoization[$i][$j] != -1 
        || (!is_null($prevCell) && $grid[$i][$j] <= $prevCell)
        ) {     
            return false;
        }
      

        if (!is_null($prevCell)) {
            $counter++;
        }
        $this->memoization[$i][$j] = $counter;
        $prevCell = $grid[$i][$j];
        $this->dfs($grid, $i -1, $j + 1, $ref, $this->memoization[$i][$j], $prevCell); // up right
        $this->dfs($grid, $i, $j + 1, $ref, $this->memoization[$i][$j], $prevCell); // right
        $this->dfs($grid, $i + 1, $j + 1, $ref, $this->memoization[$i][$j], $prevCell); // down right
       
        $this->arrCounter[] = $counter; 
        $counter = 0;        
    }
}
```