# Simple solution O(1)

**Author:** anestorov
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-stack/solutions/4150756/](https://leetcode.com/problems/min-stack/solutions/4150756/)

---

# Intuition
 We need to store the state of that data structure. Its state has 2 values last pushed value and the global min value after adding something to the heap. We can wrap that state into a state object and push it to the heap.

# Approach
 We need a heap or array in my case where we push our state. The state is an object with 2 properties - pushed value and latest min value. When pushing something we know the current state so we can easily calculate the new state based on the comparison between pushed value and latest min value. When we pop we get back to the previous state of the structure naturally.

# Complexity
- Push: $$O(1)$$
- Pop:  $$O(1)$$
- Top:  $$O(1)$$
- getMin:  $$O(1)$$


- Space complexity: $$O(n)$$

# Code
```
class MinStack {
    /**
     */
    private $stack = [];

    function __construct() {
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function push($val) {
        $toInsert = [$val, $val];
        $prev = end($this->stack);
        if($prev && $val > $prev[1]) {
            $toInsert[1] = $prev[1];
        }
        
        $this->stack[] = $toInsert;
    }
  
    /**
     * @return NULL
     */
    function pop() {
        array_pop($this->stack);
    }
  
    /**
     * @return Integer
     */
    function top() {
        return end($this->stack)[0];
    }
  
    /**
     * @return Integer
     */
    function getMin() {
        return end($this->stack)[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * $obj = MinStack();
 * $obj->push($val);
 * $obj->pop();
 * $ret_3 = $obj->top();
 * $ret_4 = $obj->getMin();
 */
```