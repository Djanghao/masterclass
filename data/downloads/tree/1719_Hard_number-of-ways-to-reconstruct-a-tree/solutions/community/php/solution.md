# Solution Number Of Ways To Reconstruct A Tree

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/5370875/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/5370875/)

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
    private $graph = [];

    private function buildGraph($pairs) {
        foreach ($pairs as $pair) {
            $this->graph[$pair[0]][] = $pair[1];
            $this->graph[$pair[1]][] = $pair[0];
        }
    }

    private function solve($nodes) {
        if (count($nodes) == 0) {
            return 1;
        }
        $n = count($nodes);
        $possibleRoots = [];
        foreach ($nodes as $node) {
            if (count($this->graph[$node]) == $n - 1) {
                $possibleRoots[] = $node;
            }
        }

        if (count($possibleRoots) == 0) {
            return 0;
        }
        $root = $possibleRoots[0];
        foreach ($this->graph[$root] as $neighbor) {
            $this->graph[$neighbor] = array_diff($this->graph[$neighbor], [$root]);
        }

        $seen = [];
        $components = [];
        $mark = 0;

        $dfs = function($node, $mark) use (&$dfs, &$seen, &$components, $root) {
            $components[$mark][] = $node;
            $seen[$node] = true;
            foreach ($this->graph[$node] as $neighbor) {
                if ($node != $root && !isset($seen[$neighbor])) {
                    $dfs($neighbor, $mark);
                }
            }
        };

        foreach ($nodes as $node) {
            if (!isset($seen[$node]) && $node != $root) {
                $dfs($node, $mark);
                $mark++;
            }
        }

        if (count($components) == 0) {
            return 1;
        }

        $numWays = [];
        foreach ($components as $component) {
            $numWays[] = $this->solve($component);
        }

        $ans = 1;
        foreach ($numWays as $way) {
            if ($way == 0) {
                return 0;
            }
            if ($way == 2) {
                $ans = 2;
            }
        }

        if ($ans == 2) {
            return 2;
        }
        if (count($possibleRoots) > 1) {
            return 2;
        }
        return 1;
    }

    public function checkWays($pairs) {
        $this->buildGraph($pairs);
        $nodes = array_keys($this->graph);
        return $this->solve($nodes);
    }
}

```