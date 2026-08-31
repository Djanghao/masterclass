# Deep First Search with convient acces to nodes data

**Author:** DemetriSam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/4654629/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/4654629/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $values
     * @param Integer[][] $edges
     * @param Integer $maxTime
     * @return Integer
     */
    function maximalPathQuality($values, $edges, $maxTime) {
        $hash = [];

        foreach($edges as $edge) {
            [$a, $b, $cost] = $edge;
            if(!isset($hash[$a])) $hash[$a] = [];
            if(!isset($hash[$b])) $hash[$b] = [];

            $hash[$a][$b] = $cost;
            $hash[$b][$a] = $cost;
        }

        $checked = array_map(fn($val) => false, $values);

        $dfs = function($node, $maxTime, $max, $checked) use ($hash, $values, &$dfs) {
            if($maxTime < 0) return 0;

            if(!$checked[$node]) {
                $checked[$node] = true;
                $max += $values[$node];
            }
            
            $maxes = $node === 0 ? [$max] : [];
            foreach($hash[$node] as $nbr => $cost) {
                $maxes[] = $dfs($nbr, $maxTime - $cost, $max, $checked);
            }
            return max($maxes);
        };

        return $dfs(0, $maxTime, 0, $checked);
    }
}
```