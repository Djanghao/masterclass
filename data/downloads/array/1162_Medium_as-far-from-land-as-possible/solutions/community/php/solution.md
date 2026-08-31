# PHP | Crazy Solution Beats 100% (LMAO)

**Author:** billy_homeless
**Votes:** 0
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3169074/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3169074/)

---


# Complexity
- Time complexity: $$O(n ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function maxDistance($grid) {
        $res = -1;
        $stack = $visited = [];
        $size = count($grid[0]);
        $ones = 0;

        for ($y = 0; $y < $size; $y++) {
            for($x = 0; $x < $size; $x++) {
                if ($grid[$y][$x] === 1) {
                    $queue[] = [$y, $x];
                    $ones++;
                }
            }
        }

        if ($ones == $size ** 2) return $res;
        else $ones = 0;

        if (empty($queue)) return $res;

        while ($queue) {
            $queueElem = [];
            $res++;

            foreach ($queue as $vertexNei => $yxCoor) { 

                $vertexNeighbours = [
                    [$yxCoor[0] + 1, $yxCoor[1]],
                    [$yxCoor[0] - 1, $yxCoor[1]],
                    [$yxCoor[0], $yxCoor[1] + 1],
                    [$yxCoor[0], $yxCoor[1] - 1]
                ];

                foreach ($vertexNeighbours as $yxNCoor) {
                    if ($yxNCoor[0] < 0 || $size < $yxNCoor[0]) continue;
                    if ($yxNCoor[1] < 0 || $size < $yxNCoor[1]) continue;

                    if ($grid[$yxNCoor[0]][$yxNCoor[1]] === 0) {
                        $grid[$yxNCoor[0]][$yxNCoor[1]] = 1;
                        $queueElem[] = [$yxNCoor[0], $yxNCoor[1]];
                    }
                }    
            }
            
            $queue = $queueElem;
        }

        return $res;
    }
}
```