# optimize by checking only positive

**Author:** DrVector
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/1573837/](https://leetcode.com/problems/minimum-knight-moves/solutions/1573837/)

---

```class Solution {
    
    private $result = 0;
    /**
     * @param Integer $x
     * @param Integer $y
     * @return Integer
     */
    function minKnightMoves($x, $y) {
        $moves = [[2,1], [1,2], [-2,1],[-1,2], [-2,-1],[-1,-2], [1,-2],[2,-1]];
        
        $currentX = 0;
        $currentY = 0;
        
        return $this->bfs($moves, 0, 0, abs($x), abs($y), [[0,0]], ['0_0' => true]);
    }
                   
   function bfs($moves, $currentX, $currentY, $x, $y, $queue, $visited) {
       
       while(!empty($queue)) {
           $currentLevel = count($queue);
     
           
           for($i=0; $i<$currentLevel; $i++) {
               $curr = array_shift($queue);
               if($curr[0] === $x && $curr[1] === $y) {
                   return $this->result;
               }
               
               //go over all choices
               foreach($moves as $move) {
                   $newX = abs($curr[0] + $move[0]);
                   $newY = abs($curr[1] + $move[1]);
                   $key = $newX . '_' . $newY;
              
                   if(!array_key_exists($key, $visited) && $newX >= -2 && $newY >= -2) {
                       $visited[$key] = true;
                       $queue[] = [$newX, $newY];
                   }
               }
           }
           
           $this->result++;
       }
   }
}
```