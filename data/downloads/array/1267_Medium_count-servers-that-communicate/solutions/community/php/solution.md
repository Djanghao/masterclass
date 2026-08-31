# Php solution with 2 matrix

**Author:** savvalaptev3
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/4735625/](https://leetcode.com/problems/count-servers-that-communicate/solutions/4735625/)

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
     * @param Integer[][] $grid
     * @return Integer
     */
    function countServers($grid) {
        $countX = count($grid);
        $countY = count($grid[0]);

        $horizontal = [$countX][$countY];
        $res = 0;
        for($x=0;$x<$countX;$x++){
            $firstCoordinate = [];
            $count = 0;
            for($y=0;$y<$countY;$y++){
                if($grid[$x][$y] === 1){
                    if($count === 0){
                        $firstCoordinate[0] = $x;
                        $firstCoordinate[1] = $y;
                        $count += 1;
                    }else{
                        $count += 1;
                        $horizontal[$firstCoordinate[0]][$firstCoordinate[1]] = 1;
                        $horizontal[$x][$y] = 1;
                    }
                }
            }
            if($count > 1) $res += $count;
        }

        for($y=0;$y<$countY;$y++){
            $count = 0;
            $countable = 0;
            for($x=0;$x<$countX;$x++){
                if($horizontal[$x][$y] === 1) $countable++;
                if($grid[$x][$y] === 1) $count ++;
            }
            if($count > 1) $res += $count - $countable;
        }
        
        return $res;
    }
}
```