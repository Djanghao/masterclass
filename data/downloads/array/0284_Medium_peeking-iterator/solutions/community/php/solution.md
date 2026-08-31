# Php solution

**Author:** Toxic17
**Votes:** 0
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/4004699/](https://leetcode.com/problems/peeking-iterator/solutions/4004699/)

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
```
// PHP ArrayIterator reference:
// https://www.php.net/arrayiterator

class PeekingIterator {
    private $arr;
    private $iter; 
    
    function __construct($arr) {
        $this->arr = $arr;
        $this->iter = -1;
    }
    
    /**
     * @return Integer
     */
    function next() {
        $this->iter++;
        return $this->arr[$this->iter];
    }
    
    /**
     * @return Integer
     */
    function peek() {
        return $this->arr[$this->iter+1];
    }
    
    /**
     * @return Boolean
     */
    function hasNext() {
        return isset($this->arr[$this->iter+1]);
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * $obj = PeekingIterator($arr);
 * $ret_1 = $obj->next();
 * $ret_2 = $obj->peek();
 * $ret_3 = $obj->hasNext();
 */
```