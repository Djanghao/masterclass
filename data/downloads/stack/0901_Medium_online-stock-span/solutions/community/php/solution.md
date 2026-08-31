# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/6068910/](https://leetcode.com/problems/online-stock-span/solutions/6068910/)

---

```php []
class StockSpanner {
    /** Reference: https://www.youtube.com/watch?v=slYh0ZNEqSw */
    function __construct() {
        $this->stack = new SplStack();
        $this->spans = [];
    }
  
    /**
     * @param Integer $price
     * @return Integer
     */
    function next($price) {
        $cumulatedSpan = 1;
        while (!$this->stack->isEmpty() && $this->stack->top()[0] <= $price) {
            $cumulatedSpan += $this->stack->pop()[1];
        }
        $this->spans[] = $cumulatedSpan;
        $this->stack->push([$price, $cumulatedSpan]);
        return $cumulatedSpan;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * $obj = StockSpanner();
 * $ret_1 = $obj->next($price);
 */
```