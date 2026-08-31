# PHP solution beat 100% Time and Storage Using BFS

**Author:** kimduong322
**Votes:** 0
**Link:** [https://leetcode.com/problems/race-car/solutions/5914433/](https://leetcode.com/problems/race-car/solutions/5914433/)

---



# Code
```php []
class Solution {

    /**
     * @param Integer $target
     * @return Integer
     */

    public function racecar($target) {
        $queue = new SplQueue();
        $queue->enqueue([0, 1]); // starts from position 0 with speed 1
        
        $visited = [];
        $visited[$this->key(0, 1)] = true;
        
        for ($level = 0; !$queue->isEmpty(); $level++) {
            for ($k = $queue->count(); $k > 0; $k--) {
                $cur = $queue->dequeue(); // cur[0] is position; cur[1] is speed
                
                if ($cur[0] === $target) {
                    return $level;
                }
                
                // Accelerate instruction
                $nxt = [$cur[0] + $cur[1], $cur[1] << 1]; // speed doubled
                $key = $this->key($nxt[0], $nxt[1]);
                
                if (!isset($visited[$key]) && $nxt[0] > 0 && $nxt[0] < ($target << 1)) {
                    $queue->enqueue($nxt);
                    $visited[$key] = true;
                }
                
                // Reverse instruction
                $nxt = [$cur[0], $cur[1] > 0 ? -1 : 1]; // reverse speed
                $key = $this->key($nxt[0], $nxt[1]);
                
                if (!isset($visited[$key]) && $nxt[0] > 0 && $nxt[0] < ($target << 1)) {
                    $queue->enqueue($nxt);
                    $visited[$key] = true;
                }
            }
        }
        
        return -1; // This should never be reached
    }

    private function key($position, $speed) {
        return $position . ' ' . $speed; // Create a unique key for position and speed
    }

}
```