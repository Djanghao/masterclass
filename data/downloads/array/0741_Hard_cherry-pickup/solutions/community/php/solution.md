# PHP DP solution

**Author:** GVA-ranepa
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/4715609/](https://leetcode.com/problems/cherry-pickup/solutions/4715609/)

---

# Approach
As in [Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/description/), use two robots, starting from [0,0] and moving simultaneously. 
A great [idea](https://leetcode.com/problems/cherry-pickup/description/comments/1571818) from discussion - if robots' coordinates are [i,j] and [p,q] - at any moment i+j == p+q, because they start from one point and move only down and right. That's why we can keep only 3 coordinates: dp[i][j][p] and calculate q as this: q = i+j-p.

![2024-02-12_15-38-47.png](./images/0.png)



# Code
```
function cherryPickup($grid) {
    $n = count($grid);

    if ($n == 1) return $grid[0][0];
    if ($grid[0][1] == -1 && $grid[1][0] == -1) return 0;

    $dp = array_fill(0,$n,array_fill(0,$n,array_fill(0,$n,0))); 
// init dp array. Current state dp[i][j][p] is max number of cherries robots can calculate on the routes from [0,0] to [i,j] and [p,i+j-p]

    $dp[0][0][0] = $grid[0][0]; // first elem equals first cell of the grid

    $i = $j = $p = 0; 
    $tmp = array(array($i,$j,$p)); // set of start coordinates
    $curr = array();   // init array for current set of coordinates
    $in = true;        // check if we're inside the grid

    for ($m=0; $m<2*($n-1); $m++){ // any route from top left to down right corner takes 2 x ($n-1) steps
        foreach($tmp as $set){
            $currtmp = array();
            for ($k=0; $k<=1; $k++){ // every step increase i or j by one
                if ($set[0]+$k < $n) {
                    $i\u0441 = $set[0]+$k; 
                    $in = true;
                }
                else {
                    $in = false;
                    continue;
                }
                if ($set[1] + (1-$k) < $n)  {
                    $j\u0441 = $set[1] + (1-$k);
                    $in = true;
                }
                else {
                    $in = false;
                    continue;
                }
                    
                for($l=0;$l<=1; $l++){ // for every pair [i,j+1] and [i+1,j] step increase p or q by one
                    if ($set[2] + $l < $n){
                        $p\u0441 = $set[2] + $l;
                        $q\u0441 = $i\u0441+$j\u0441-$p\u0441;
                        $in = true;
                    } else {
                        $in = false;
                        continue;
                    }
                    if ($in && $i\u0441+$j\u0441-$p\u0441 < $n){
                        $q\u0441 = $i\u0441+$j\u0441-$p\u0441;
                    } else {
                        $in = false;
                        continue;
                    }

                    if ($in){ // if we are still inside the grid
                        $val = 0;  
                        if (!in_array([$i\u0441,$j\u0441,$p\u0441],$currtmp)){ // check if haven't already calculated value for this set of coordinates
                            if ($grid[$i\u0441][$j\u0441] != -1 && $grid[$p\u0441][$q\u0441] != -1){ // check if we haven't walked into a thorn
                                $currtmp[] = [$i\u0441,$j\u0441,$p\u0441];
                                if ([$i\u0441,$j\u0441] == [$p\u0441,$q\u0441]){
                                    $val = $grid[$i\u0441][$j\u0441]; // if robots are in one cell - add one cherry (or zero, if cell is empty)
                                } else {
                                    $val = $grid[$i\u0441][$j\u0441] + $grid[$p\u0441][$q\u0441];  // if robots are in different cells - add values from grid
                                }
                                $dp[$i\u0441][$j\u0441][$p\u0441] = max($dp[$i\u0441][$j\u0441][$p\u0441],$dp[$set[0]][$set[1]][$set[2]] + $val); // set dp value to max possible

                            } else {
                                $dp[$i\u0441][$j\u0441][$p\u0441] = PHP_INT_MIN;
                            }
                        }
                    }
                }
            }
            foreach($currtmp as $ct){ // form array of possible  starting points for next step
                if (!in_array($ct,$curr)){
                    array_push($curr,$ct);
                }
            }
        }
        $tmp = $curr;
        $curr = array();
    }
    return $dp[$n-1][$n-1][$n-1];
}

```