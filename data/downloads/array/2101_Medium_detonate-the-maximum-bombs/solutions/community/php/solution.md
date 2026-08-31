# DFS approach (PHP)

**Author:** lotysh_vm
**Votes:** 1
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3588637/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3588637/)

---

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
class Solution {
    public function dfs($node, $graph, &$visited = []) {
        if ($visited[$node]) {
            return $result;
        }

        $visited[$node] = 1;
        $neighbors = $graph[$node] ?? [];
        foreach($neighbors as $neighbor) {
            $this->dfs($neighbor, $graph, $visited);
        }
        
        return count($visited);
    }

    public function isBombInRadius($bomb1, $bomb2) {
        return pow($bomb2[0] - $bomb1[0], 2) + pow($bomb2[1] - $bomb1[1], 2) <= pow($bomb1[2], 2);
    }

    /**
     * @param Integer[][] $bombs
     * @return Integer
     */
    function maximumDetonation($bombs, $result = 0) {
        if (empty($bombs)) {
            return $result;
        }

        $graph = [];
        $visited = [];

        foreach($bombs as $index => $bomb1) {
            $nodes = [];

            for ($i = 0; $i < count($bombs); $i++) {
                $isBombInRadius = $this->isBombInRadius($bomb1, $bombs[$i]);

                if ($isBombInRadius && $i !== $index) {
                    $nodes[] = $i;
                }
            }

            if (count($nodes)) {
                $graph[$index] = $nodes ;
            }   
        }

        if (count($graph) === 0) {
            return $result + 1;
        }

        foreach($graph as $node => $neighbors) {
            $result = max($result, $this->dfs($node, $graph));
        }

        return $result;
    }
}
```