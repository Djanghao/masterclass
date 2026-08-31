# php: in-place obstacles transformation + straightforward emulation

**Author:** V-Isa
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5738096/](https://leetcode.com/problems/walking-robot-simulation/solutions/5738096/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $commands
     * @param Integer[][] $obstacles
     * @return Integer
     */
    function robotSim($commands, $obstacles) {
        foreach($obstacles as $index => $obstacle) {
            $obstacles[-1][$obstacle[0]][$obstacle[1]] = $index;
            unset($obstacles[$index]);
        }
        $x = 0;
        $y = 0;
        $dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        $dirsCount = 4;
        $dir = 0;
        $max = 0;
        foreach($commands as $command) {
            if (-1 === $command) {
                $dir++;
                if ($dirsCount <= $dir) {
                    $dir = 0;
                }
            } elseif (-2 === $command) {
                $dir--;
                if (0 > $dir) {
                    $dir = $dirsCount - 1;
                }
            } else {
                $xInc = $dirs[$dir][0];
                $yInc = $dirs[$dir][1];
                for ($i = 0; $i < $command; $i++) {
                    $nx = $x + $xInc;
                    $ny = $y + $yInc;
                    if (isset($obstacles[-1][$nx][$ny])) {
                        continue 2;
                    }
                    $x = $nx;
                    $y = $ny;
                    $max = max($max, $x * $x + $y * $y);
                }
            }
        }
        return $max;
    }
}
```