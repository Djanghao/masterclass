# PHP solution with two BFS

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/4765805/](https://leetcode.com/problems/tree-diameter/solutions/4765805/)

---

# Code
```
class Solution {
    function treeDiameter($edges) {
        $conn = [];
        $map = []; // Used to track visited nodes during BFS
        foreach($edges as $e){
            $conn[$e[0]][$e[1]] = 1;
            $conn[$e[1]][$e[0]] = 1;
            $map[$e[0]] = 0;
            $map[$e[1]] = 0;
        }

        // First BFS to find the farthest node from an arbitrary starting node       
        $q = [[$edges[0][0],0]];
        $max_val = PHP_INT_MIN;
        $max_index = -1;
        while($q){
            list($node,$step) = array_shift($q);
            $map[$node] = 1;
            if($step >  $max_val) {
                $max_val = $step;
                $max_index = $node;
            }
            foreach($conn[$node] as $n => $key){
                if($map[$n] == 0){
                    $q[] = [$n,$step+1];    
                }
            }
        }
        // Second BFS from the farthest node found in the first BFS to find the diameter
        $q = [[$max_index, 0]];
        $max_val = 0;
        while($q){
            list($node,$step) = array_shift($q);
            if($step > $max_val) {
                $max_val = $step;
            }
            $map[$node] = -1;
            foreach($conn[$node] as $n => $key){
                if($map[$n] != -1){
                    $q[] = [$n,$step+1];
                }
            }
        }
        return $max_val;
    }
}
```