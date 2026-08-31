# Solution Beautiful Arrangement

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/4739795/](https://leetcode.com/problems/beautiful-arrangement/solutions/4739795/)

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

    /**
     * @param Integer $n
     * @return Integer
     */
    function countArrangement($n) {
        $count = 0;
        $visited = array_fill(1, $n, false);
        $this->backtrack($n, 1, $visited, $count);
        return $count;
    }
    
    function backtrack($n, $pos, &$visited, &$count) {
        if ($pos > $n) {
            $count++;
            return;
        }
        
        for ($i = 1; $i <= $n; $i++) {
            if (!$visited[$i] && ($i % $pos == 0 || $pos % $i == 0)) {
                $visited[$i] = true;
                $this->backtrack($n, $pos + 1, $visited, $count);
                $visited[$i] = false;
            }
        }
    }
}

```