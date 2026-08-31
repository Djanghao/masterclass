# PHP solution

**Author:** bhargavrangani00
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5850756/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5850756/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class CustomStack {
    private $stack;
    private $maxSize;

    /**
     * @param Integer $maxSize
     */
    function __construct($maxSize) {
        $this->maxSize = $maxSize;
        $this->stack = [];
    }

    /**
     * @param Integer $x
     * @return NULL
     */
    function push($x) {
        if (count($this->stack) < $this->maxSize) {
            array_push($this->stack, $x);
        }
    }

    /**
     * @return Integer
     */
    function pop() {
        if (empty($this->stack)) {
            return -1;
        }
        return array_pop($this->stack);
    }

    /**
     * @param Integer $k
     * @param Integer $val
     * @return NULL
     */
    function increment($k, $val) {
        $limit = min($k, count($this->stack));  // We only increment up to the number of elements in the stack
        for ($i = 0; $i < $limit; $i++) {
            $this->stack[$i] += $val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * $obj = new CustomStack($maxSize);
 * $obj->push($x);
 * $ret_2 = $obj->pop();
 * $obj->increment($k, $val);
 */
```