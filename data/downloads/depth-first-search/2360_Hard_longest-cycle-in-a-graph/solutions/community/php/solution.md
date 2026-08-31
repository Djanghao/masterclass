# PHP Solution

**Author:** dev3k
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3344089/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3344089/)

---

# Code
```
class Solution {
    function longestCycle($edges) {
        $longestCycle = -1;
        $timeStep = 1;
        $vistedList = array_fill(0, count($edges), 0);

        for ($currentNode = 0; $currentNode < count($edges); $currentNode++) {
            if ($vistedList[$currentNode] > 0){
                continue;
            }
            $startTime = $timeStep;
            $traversedNode = $currentNode;
            while ($traversedNode !== -1 && $vistedList[$traversedNode] === 0) {
                $vistedList[$traversedNode] = $timeStep++;
                $traversedNode = $edges[$traversedNode];
            }
            if ($traversedNode !== -1 && $vistedList[$traversedNode] >= $startTime){
                $longestCycle = max($longestCycle, $timeStep - $vistedList[$traversedNode]);
            }
        }
        unset($vistedList);
        return $longestCycle;
    }
}
```