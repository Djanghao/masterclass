# Solution RLE Iterator

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/4816913/](https://leetcode.com/problems/rle-iterator/solutions/4816913/)

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
class RLEIterator {
    private $encoding;
    private $index;
    
    function __construct($encoding) {
        $this->encoding = $encoding;
        $this->index = 0;
    }
  
    function next($n) {
        while ($n > 0 && $this->index < count($this->encoding)) {
            if ($this->encoding[$this->index] >= $n) {
                $this->encoding[$this->index] -= $n;
                return $this->encoding[$this->index + 1];
            } else {
                $n -= $this->encoding[$this->index];
                $this->index += 2;
            }
        }
        return -1;
    }
}

```