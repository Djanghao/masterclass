# Php Backtracking

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-queens/solutions/2967153/](https://leetcode.com/problems/n-queens/solutions/2967153/)

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
class Solution {

    private $sol = [];

    /**
     * @param Integer $n
     * @return String[][]
     */
    function solveNQueens($n) {
        // $board = ['....', '....', '....', '....']
        $board = array_fill(0, $n, str_pad('', $n, '.'));
        $this->backtracking($board, 0);
        return $this->sol;
    }


    function backtracking(&$board, $row){
        // is this the last row? we found a solution.
        if($row === count($board)){
            $this->sol[] = $board;
            return;
        }

        // check each column for the $row
        for($col=0; $col<count($board); $col++){
            if($this->isSafe($board, $row, $col)){
                $board[$row][$col] = 'Q';
                // check next row.
                $this->backtracking($board, $row+1);
                // backtrack to get other possible solutions.
                $board[$row][$col] = '.';
            }
        }
    }

    function isSafe(&$board, $row, $col){
        $n = count($board);

        for($i=0; $i<$n; $i++){
            // is there a queen in the same column?
            if($board[$i][$col] === 'Q'){
                return false;
            }

            // is there a queen in the same positive diagonal?
            if($row-$i >= 0 && $col-$i >= 0 && $board[$row-$i][$col-$i] === 'Q'){
return false;
            }

            // is there a queen in the same negative diagonal?   
            if($row-1 >= 0 && $col+$i < $n && $board[$row-$i][$col+$i] === 'Q'){
return false;
            }
        }

        return true;
    }
}
```