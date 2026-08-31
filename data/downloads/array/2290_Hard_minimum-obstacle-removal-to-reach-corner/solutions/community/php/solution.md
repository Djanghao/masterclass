# PHP Solution | Beats 100%

**Author:** garimarajput748
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090619/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090619/)

---

# Complexity
- Time complexity: $$O(R\u2217C)$$

- Space complexity: $$O(R\u2217C)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minimumObstacles($grid) {
        $r = count($grid);
        $c = count($grid[0]);
        $dq = new SplQueue(); // Efficient deque implementation
        $dq->push([0, 0]); // Start from the top-left corner

        $dist = array_fill(0, $r, array_fill(0, $c, PHP_INT_MAX));
        $dist[0][0] = 0;

        $dx = [1, -1, 0, 0];
        $dy = [0, 0, 1, -1];

        while (!$dq->isEmpty()) {
            [$x, $y] = $dq->shift(); // Dequeue the first element

            for ($k = 0; $k < 4; $k++) {
                $nx = $x + $dx[$k];
                $ny = $y + $dy[$k];

                if ($nx >= 0 && $ny >= 0 && $nx < $r && $ny < $c) {
                    $d = $dist[$x][$y] + $grid[$nx][$ny];
                    if ($d < $dist[$nx][$ny]) {
                        $dist[$nx][$ny] = $d;

                        if ($grid[$nx][$ny] == 0) {
                            $dq->unshift([$nx, $ny]); // Add to the front for zero-cost cells
                        } else {
                            $dq->push([$nx, $ny]); // Add to the back for higher-cost cells
                        }
                    }
                }
            }
        }

        return $dist[$r - 1][$c - 1];
    }

}
```