# PHP solution uses the concept of median O(nm) without sorting

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/4407591/](https://leetcode.com/problems/best-meeting-point/solutions/4407591/)

---

Solution uses the concept of median to find the optimal meeting point, as the median minimizes the sum of absolute deviations. The method separately finds the median of the x-coordinates and y-coordinates of all points, and then calculates the total Manhattan distance (sum of absolute differences) from all points to this median point.

# Code
```
class Solution {
    function minTotalDistance($grid) {
        $fx = [];
        $fy = [];
        // Collect x-coordinates of all points in the grid 
        for($i=0;$i<count($grid);$i++){
            for($j=0;$j<count($grid[0]);$j++){
                if($grid[$i][$j]){
                   $fx[] = $i;
                }
            }
        }
        // Collect y-coordinates of all points 
        // in increase order to avoid sorting
        for($j=0;$j<count($grid[0]);$j++){
            for($i=0;$i<count($grid);$i++){          
                if($grid[$i][$j]){
                   $fy[] = $j;
                }
            }
        }
        // Compute the median index for both x and y coordinates
        $mx = $fx[floor(count($fx)/2)];
        $my = $fy[floor(count($fy)/2)];

        $distance = 0;
        foreach($fx as $x){
            $distance += abs($x-$mx);
        }
        foreach($fy as $y){
            $distance += abs($y-$my);
        }
        return  $distance;
    }
}
```

# Complexity
- Time complexity: $$O(nm)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(nm)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
