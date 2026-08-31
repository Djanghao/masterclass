# Solution Possible Bipartition

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/4813111/](https://leetcode.com/problems/possible-bipartition/solutions/4813111/)

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
     * @param Integer[][] $dislikes
     * @return Boolean
     */
    function possibleBipartition($n, $dislikes) {
        $graph = [];
        foreach ($dislikes as $dislike) {
            $a = $dislike[0];
            $b = $dislike[1];
            $graph[$a][] = $b;
            $graph[$b][] = $a;
        }
        
        $colors = array_fill(1, $n, 0);
        
        for ($i = 1; $i <= $n; $i++) {
            if ($colors[$i] == 0 && !$this->dfs($i, 1, $graph, $colors)) {
                return false;
            }
        }
        
        return true;
    }
    
    function dfs($node, $color, &$graph, &$colors) {
        $colors[$node] = $color;
        if (!isset($graph[$node])) return true;
        
        foreach ($graph[$node] as $neighbor) {
            if ($colors[$neighbor] == $color) return false;
            if ($colors[$neighbor] == 0 && !$this->dfs($neighbor, -$color, $graph, $colors)) {
                return false;
            }
        }
        
        return true;
    }
}

```