# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/6097830/](https://leetcode.com/problems/snakes-and-ladders/solutions/6097830/)

---

```php []
class Solution {

    /**
     * @param Integer[][] $board
     * @return Integer
     */
    function snakesAndLadders($board) {
        // BFS to count the number of die rolls to reach destination.

        $n = count($board);
        $squares = $n**2;

        $queue = new SplQueue();
        $visited = [];

        $queue->enqueue(1);
        $visited[1] = true;

        $rolls = 1;
        while (!$queue->isEmpty()) {
            $options = $queue->count();
            for ($i=0; $i<$options; $i++) {
                $initial = $queue->dequeue();
                for ($target=$initial+1; $target<=min($initial+6, $squares); $target++) {
                    if (isset($visited[$target])) continue;
                    $visited[$target] = true;

                    [$r, $c] = $this->posToCoords($target, $n);
                    $finalSquare = $board[$r][$c] === -1
                        ? $target 
                        : $board[$r][$c];

                    if ($finalSquare === $squares) return $rolls;

                    $queue->enqueue($finalSquare);
                }
            }
            $rolls++;
        }

        return -1;
    }

    function posToCoords($pos, $n): array {
        $row = ($n-1) - (int)(($pos-1)/$n);

        $col = (($n-1)%2 === $row%2)    // Diferences if the row goes fw or bw.
        /*FW*/  ? ($pos-1)%$n
        /*BW*/  : ($n-1) - ($pos-1)%$n;

        return [$row, $col];
    }
}
```