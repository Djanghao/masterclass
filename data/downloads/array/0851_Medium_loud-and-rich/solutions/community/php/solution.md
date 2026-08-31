# Solution Loud and Rich

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/4800267/](https://leetcode.com/problems/loud-and-rich/solutions/4800267/)

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
     * @param Integer[][] $richer
     * @param Integer[] $quiet
     * @return Integer[]
     */
    function loudAndRich($richer, $quiet) {
        $n = count($quiet);
        $graph = array_fill(0, $n, []);
        foreach ($richer as $edge) {
            $graph[$edge[1]][] = $edge[0];
        }
        
        $answer = array_fill(0, $n, -1);
        for ($i = 0; $i < $n; $i++) {
            $this->dfs($graph, $quiet, $answer, $i);
        }
        
        return $answer;
    }
    
    function dfs($graph, $quiet, &$answer, $node) {
        if ($answer[$node] != -1) return $answer[$node];
        
        $answer[$node] = $node;
        foreach ($graph[$node] as $neighbor) {
            $candidate = $this->dfs($graph, $quiet, $answer, $neighbor);
            if ($quiet[$candidate] < $quiet[$answer[$node]]) {
                $answer[$node] = $candidate;
            }
        }
        
        return $answer[$node];
    }
}

```