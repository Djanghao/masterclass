# PHP - BFS

**Author:** kshukla37
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/3562662/](https://leetcode.com/problems/graph-valid-tree/solutions/3562662/)

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
     * @return Boolean
     */
    function validTree($n, $edges) {
        
        //adjecncy matrix
        $adj = [];
        foreach($edges as $edge) {
            $adj[$edge[0]][] = $edge[1]; 
            $adj[$edge[1]][] = $edge[0]; 
        }
        
        $parent = [];
        $queue = new splqueue();
         $queue->enqueue(0);
         $parent[0] = -1; 
         while(!$queue->IsEmpty()) {
             $node  = $queue->dequeue();
           
             foreach($adj[$node] as $next) {
                 if($parent[$node] == $next) {
                      continue;
                 }
                if(isset($parent[$next])) {
                    return false;
                }
                $queue->enqueue($next);
                $parent[$next] = $node; 
               
             }
         }
         //print_r($parent);
         return count($parent) == $n;
    }
}
```