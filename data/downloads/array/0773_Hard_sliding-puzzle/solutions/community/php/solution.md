# PHP, BFS 100%

**Author:** rroma
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/6083397/](https://leetcode.com/problems/sliding-puzzle/solutions/6083397/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[][] $board
     * @return Integer
     */
    function slidingPuzzle($board) 
    {
        $board = array_merge($board[0], $board[1]);
        
        $target = [1,2,3,4,5,0];
        $trans = [
            [1, 3],
            [0, 2, 4],
            [1, 5],
            [0, 4],
            [1, 3, 5],
            [2, 4]
        ];

        $mem = [];

        $queue = new SplQueue();
        $queue->enqueue($board);

        $moves = 0;
        while ($queue->count() > 0) {
            $size = $queue->count();

            for ($i = 0; $i < $size; $i++) {
                $curr = $queue->dequeue();

                if ($curr == $target) {
                    return $moves;
                }

                $idx = array_search(0, $curr);

                foreach ($trans[$idx] as $toIdx) {
                    $cand = $this->swap($curr, $idx, $toIdx);

                    $str = implode('', $cand);

                    if (isset($mem[$str])) {
                        continue;
                    }

                    $mem[$str] = 1;

                    $queue->enqueue($cand);
                }
            }

            $moves++;
        }

        return -1;
    }

    function swap(array $cand, int $i, int $j): array
    {
        $n = $cand[$i];
        $cand[$i] = $cand[$j];
        $cand[$j] = $n;

        return $cand;
    }
}
```