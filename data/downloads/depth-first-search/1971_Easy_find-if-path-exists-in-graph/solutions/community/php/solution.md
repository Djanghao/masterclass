# solution

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5055245/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5055245/)

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
     * @param Integer[][] $edges
     * @param Integer $source
     * @param Integer $destination
     * @return Boolean
     */
    function validPath($n, $edges, $source, $destination) {
    $graph = array_fill(0, $n, []);
    foreach ($edges as $edge) {
        $graph[$edge[0]][] = $edge[1];
        $graph[$edge[1]][] = $edge[0];
    }
    $visited = array_fill(0, $n, false);
    $queue = new SplQueue();
    $queue->enqueue($source);
    $visited[$source] = true;

    while (!$queue->isEmpty()) {
        $current = $queue->dequeue();
        if ($current == $destination) {
            return true;
        }

        foreach ($graph[$current] as $neighbor) {
            if (!$visited[$neighbor]) {
                $visited[$neighbor] = true;
                $queue->enqueue($neighbor);
            }
        }
    }

    return false;
}

function buildGraph($edges, $n) {
    $graph = array_fill(0, $n, []);
    foreach ($edges as $edge) {
        $graph[$edge[0]][] = $edge[1];
        $graph[$edge[1]][] = $edge[0];
    }
    return $graph;
}
}
```