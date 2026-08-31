# PHP - beats 100%

**Author:** tinghaolai
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337904/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337904/)

---

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer
     */
    function countPairs($n, $edges) {
        $originN = $n;
        $roads = [];
        $nCheck = [];
        foreach ($edges as $edge) {
            if (empty($roads[$edge[0]])) {
                $roads[$edge[0]] = [];
            }

            if (empty($roads[$edge[1]])) {
                $roads[$edge[1]] = [];
            }

            $roads[$edge[0]][] = $edge[1];
            $roads[$edge[1]][] = $edge[0];
            $nCheck[$edge[0]] = true;
            $nCheck[$edge[1]] = true;
        }

        $queue = new \\SplQueue();
        $groups = [];
        $haveRun = [];
        $n = count($nCheck);
        $zeroCount = $originN - $n;
        while ($n) {
            $currentGroupCount = 0;
            $queue->push(array_key_first($nCheck));
            while (!$queue->isEmpty()) {
                $run = $queue->pop();
                if (!empty($nCheck[$run])) {
                    $currentGroupCount++;
                    unset($nCheck[$run]);
                    $n--;
                }

                if (!empty($haveRun[$run])) {
                    continue;
                }

                $haveRun[$run] = true;
                if (!empty($roads[$run])) {
                    foreach ($roads[$run] as $next) {
                        $queue->push($next);
                    }
                }
            }

            $groups[] = $currentGroupCount;
        }

        $result = 0;
        $acc = 0;
        foreach ($groups as $groupCount) {
            $result += $acc * $groupCount;
            $acc += $groupCount;
        }

        for ($i = 0; $i < $zeroCount; $i++) {
            $result += $acc;
            $acc += 1;
        }

        return $result;
    }
}
```