# PHP, 25 ms, faster than 100.00%

**Author:** vvk2001leetcode
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/2802999/](https://leetcode.com/problems/minimum-path-sum/solutions/2802999/)

---

```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minPathSum($grid) {
        $m = count($grid);
        $n = count($grid[0]);
        $result[0][0] = $grid[0][0];

        for($i = 1; $i < $m; $i++) {
            $result[$i][0] = $grid[$i][0] + $result[$i - 1][0];
        }

        for($j = 1; $j < $n; $j++) {
            $result[0][$j] = $grid[0][$j] + $result[0][$j - 1];
        }

        for($i = 1; $i < $m; $i++) {
            for($j = 1; $j < $n; $j++) {
                
                if($result[$i - 1][$j] < $result[$i][$j - 1]) {
                    $result[$i][$j] = $grid[$i][$j] + $result[$i - 1][$j]; 
                } else {
                    $result[$i][$j] = $grid[$i][$j] + $result[$i][$j - 1];
                }
                
            }
        }

        return $result[$m - 1][$n - 1];
    }
}
```