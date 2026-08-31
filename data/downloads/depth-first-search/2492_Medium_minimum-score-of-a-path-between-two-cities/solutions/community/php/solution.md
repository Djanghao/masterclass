# PHP solution with SplQueue

**Author:** dev3k
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3328062/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3328062/)

---

# Code
```
class Solution {
    /**
     * @param Integer $n
     * @param Integer[][] $roads
     * @return Integer
     */
   function minScore($n, $roads) {
        $minScore = PHP_INT_MAX;

        $adjList = array_fill(0, $n+1, array());
        foreach ($roads as $road) {
            $adjList[$road[0]][] = array($road[1], $road[2]); 
            $adjList[$road[1]][] = array($road[0], $road[2]);
        }

        $visited = array_fill(0, $n+1, 0);
        $queue = new SplQueue();
        $queue->enqueue(1);

        $visited[1] = 1;
        while(!$queue->isEmpty()){
            $node = $queue->dequeue();
            foreach ($adjList[$node] as list($visitingNode, $distance)) {
                $minScore = min($minScore, $distance);
                if($visited[$visitingNode] == 0){
                    $visited[$visitingNode] = 1;
                    $queue->enqueue($visitingNode);
                }
            }
        }

        return $minScore;
   }
}
```