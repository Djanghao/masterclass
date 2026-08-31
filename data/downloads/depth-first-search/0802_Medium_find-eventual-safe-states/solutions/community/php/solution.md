# Solution Find Eventual Safe States

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/4789559/](https://leetcode.com/problems/find-eventual-safe-states/solutions/4789559/)

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
     * @param Integer[][] $graph
     * @return Integer[]
     */
    function eventualSafeNodes($graph) {
        $n = count($graph);
        $color = array_fill(0, $n, 0);
        $result = array();
        
        for ($i = 0; $i < $n; $i++) {
            if ($this->dfs($graph, $color, $i))
                $result[] = $i;
        }
        
        return $result;
    }
    
    function dfs($graph, &$color, $node) {
        if ($color[$node] > 0)
            return $color[$node] == 2;
        
        $color[$node] = 1;
        
        foreach ($graph[$node] as $neighbor) {
            if ($color[$neighbor] == 2)
                continue;
            if ($color[$neighbor] == 1 || !$this->dfs($graph, $color, $neighbor))
                return false;
        }
        
        $color[$node] = 2;
        return true;
    }
}

```