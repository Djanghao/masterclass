# Faster than 100% - DFS

**Author:** afnanmezied
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/2416588/](https://leetcode.com/problems/course-schedule-iv/solutions/2416588/)

---

class Solution {

    /**
     * @param Integer $numCourses
     * @param Integer[][] $prerequisites
     * @param Integer[][] $queries
     * @return Boolean[]
     */
    function checkIfPrerequisite($numCourses, $prerequisites, $queries){   

        if(count($prerequisites) == 0) return array_fill(0,$numCourses,false);
        
        $graph = array_fill(0,$numCourses,[]);
        $result = [];
        
        foreach ($prerequisites as $value) {
            $graph[$value[0]][] = $value[1];
        }

         foreach ($queries as  [$start,$end]) {
            $this->dfs($graph, $start, $end, $result);
        }
        
       return $result;
    }
    
    function dfs($graph, $start, $end, &$result){
        $stack = [$start];
        $visited = [];
        
        while($stack){
           $node = array_pop($stack);

            if($node == $end){
                $result[] = true;
                return;
            }
            
            if(!in_array($node,$visited)){
                $visited[] = $node;
                foreach($graph[$node] as $child){
                    $stack[] = $child;
                }
            }
        }
        
        $result[] = false;
    }
}