# PHP solution without using Queue

**Author:** trimal
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/4847247/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/4847247/)

---

# Approach
This approach assumes you are not allowed to use Queue (also it would constantly allocate and deallocate memory, which could be concern if this function is being run at high scale).
Since your window is fixed, you can use the same array to store both old and new value. 

All you need to do is keep track of last old value.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MovingAverage {
    /**
     * Size of the storage
     */
    protected int $size;

    /**
     * to store data
     */
    protected array $storage;

    /**
     * tells how many entries are there in the storage
     */
    protected int $dataSize;

    /**
     * points to current number
     */
     protected int $current;

    /**
     * holds total sum of the storage
     */
     protected int $sum;

    /**
     * @param Integer $size
     */
    function __construct($size) {
        $this->size = $size;
        $this->storage = array_fill(0, $size, null);
        $this->dataSize = 0;
        $this->current = 0;
        $this->sum = 0;
    }
  
    /**
     * @param Integer $val
     * @return Float
     */
    function next($val) {
        if ($this->current == $this->size) {
            $this->current = 0;
        }

        $this->dataSize = min($this->size, $this->dataSize + 1);

        // this is the old value
        if ($this->storage[$this->current] !== null) {
            $this->sum -= $this->storage[$this->current];   
        }
        $this->storage[$this->current] = $val;
        $this->sum += $val;
        $this->current++;

        return $this->sum / $this->dataSize;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * $obj = MovingAverage($size);
 * $ret_1 = $obj->next($val);
 */
```