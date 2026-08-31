# PHP DFS Solution

**Author:** mohammed_aladham
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/3406814/](https://leetcode.com/problems/number-of-islands/solutions/3406814/)

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

    /**
     * @param String[][] $grid
     * @return Integer
     */
    function numIslands($grid) {
       // loop through the grid to start from new island.
       // mark each node as visited.
       // dfs each start go to its 4 directions.
       // if all directions are 0s, increase islands counter

       $total = 0;

        for($i=0; $i<count($grid); $i++){
            for($j=0; $j<count($grid[0]); $j++){
                if($grid[$i][$j] == 1){
                    $this->DFS($grid, $i, $j, $total);
                    $total++;
                }
            }

        }

       return $total;
    }


    function DFS(&$grid, $i, $j, &$total){
        if(!isset($grid[$i][$j]) || $grid[$i][$j] == 0){
            return;
        }

        $grid[$i][$j] = 0;
        
        $this->DFS($grid, $i, $j+1, $total);
        $this->DFS($grid, $i+1, $j, $total);
        $this->DFS($grid, $i, $j-1, $total);
        $this->DFS($grid, $i-1, $j, $total);
    }
}
```