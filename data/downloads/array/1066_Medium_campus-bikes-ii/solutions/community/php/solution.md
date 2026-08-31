# PHP DP solution with mask

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4491384/](https://leetcode.com/problems/campus-bikes-ii/solutions/4491384/)

---

# Code
```
class Solution {
    private $bikes;
    private $workers;
    private $cache;
    function assignBikes($workers, $bikes) {
        $this->workers = $workers;
        $this->bikes = $bikes;
        // Creating a bitmask to keep track of which bikes have been assigned
        $bmask = str_repeat("0",count($bikes));
        return $this->dp(0,$bmask);
    }


    function dp($i, $bmask){
        // Base case: all workers are considered
        if ($i>=count($this->workers)){
            return 0;
        }
        if(isset($this->cache[$bmask])){
            return $this->cache[$bmask];
        }
        $min = PHP_INT_MAX;
        // Try assigning each unassigned bike to the current worker 
        for($bikeIndex = 0; $bikeIndex < count($this->bikes); $bikeIndex++){
            if($bmask[$bikeIndex] == '0'){
                $newBmask = $bmask;
                // Mark the bike as assigned
                $newBmask[$bikeIndex]='1';
                // Calculate the distance for this assignment
                $currDistance = $this->findManhattanDistance($i, $bikeIndex);
                // Recursive call for the next worker
                $dp = $this->dp($i+1, $newBmask);
                // Update the minimum distance
                $min = min($min, $currDistance +  $dp);
            }
        }
        $this->cache[$bmask] = $min;
        return $min;

    }
    // Manhattan distance formula
    function findManhattanDistance($p1, $p2){
        return abs($this->workers[$p1][0]-$this->bikes[$p2][0]) + abs($this->workers[$p1][1]-$this->bikes[$p2][1]);
    }
}
```