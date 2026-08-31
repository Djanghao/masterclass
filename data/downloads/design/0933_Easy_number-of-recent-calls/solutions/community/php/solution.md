# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/6037672/](https://leetcode.com/problems/number-of-recent-calls/solutions/6037672/)

---

```php []
class RecentCounter {
    /**
     */
    function __construct(
        protected SplQueue $queue = new SplQueue()
    ) {
        
    }
  
    /**
     * @param Integer $t
     * @return Integer
     */
    function ping($t) {
        $this->queue->enqueue($t);
        $oldT = $t - 3000;
        while ($this->queue->bottom() < $oldT) {
            $this->queue->dequeue();
        }
        return $this->queue->count();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * $obj = RecentCounter();
 * $ret_1 = $obj->ping($t);
 */
```