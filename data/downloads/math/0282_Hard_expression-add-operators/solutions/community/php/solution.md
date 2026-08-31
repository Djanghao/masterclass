# Solution Expression Add Operators

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/4697501/](https://leetcode.com/problems/expression-add-operators/solutions/4697501/)

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
     * @param String $num
     * @param Integer $target
     * @return String[]
     */
    function addOperators($num, $target) {
        $result = [];
        $this->dfs($num, $target, 0, "", 0, 0, $result);
        return $result;
    }
    
    function dfs($num, $target, $start, $path, $eval, $multed, &$result) {
        if ($start == strlen($num)) {
            if ($eval == $target) {
                $result[] = $path;
            }
            return;
        }
        
        for ($i = $start; $i < strlen($num); $i++) {
            if ($i != $start && $num[$start] == '0') break;
            
            $curr = substr($num, $start, $i - $start + 1);
            $currVal = intval($curr);
            
            if ($start == 0) {
                $this->dfs($num, $target, $i + 1, $path . $curr, $currVal, $currVal, $result);
            } else {
                $this->dfs($num, $target, $i + 1, $path . '+' . $curr, $eval + $currVal, $currVal, $result);
                $this->dfs($num, $target, $i + 1, $path . '-' . $curr, $eval - $currVal, -$currVal, $result);
                $this->dfs($num, $target, $i + 1, $path . '*' . $curr, $eval - $multed + $multed * $currVal, $multed * $currVal, $result);
            }
        }
    }
}

```