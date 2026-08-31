# Solution Random Flip Matrix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/4739267/](https://leetcode.com/problems/random-flip-matrix/solutions/4739267/)

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
class Solution {
    private $rows;
    private $cols;
    private $total;
    private $flipped;
    
    /**
     * @param Integer $m
     * @param Integer $n
     */
    function __construct($m, $n) {
        $this->rows = $m;
        $this->cols = $n;
        $this->total = $m * $n;
        $this->flipped = [];
    }
  
    /**
     * @return Integer[]
     */
    function flip() {
        $randIndex = rand(0, --$this->total);
        $index = $this->flipped[$randIndex] ?? $randIndex;
        $this->flipped[$randIndex] = $this->flipped[$this->total] ?? $this->total;
        unset($this->flipped[$this->total]);
        
        return [intval($index / $this->cols), $index % $this->cols];
    }
  
    /**
     * @return NULL
     */
    function reset() {
        $this->total = $this->rows * $this->cols;
        $this->flipped = [];
    }
}

```