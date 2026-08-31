# PHP BFS Solution

**Author:** TasneemWahdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/3331491/](https://leetcode.com/problems/is-graph-bipartite/solutions/3331491/)

---

I struggled to find the solution to pass all test cases. 
My previous code was working, and it passed all test cases except 3 or 4

The first function I implemented works for connected graphs only,
but the second works for all graphs. The idea is to do a for loop from the beginning to check every single node and apply the queue part inside the for loop.

Time Complexity: O(V+E)
Space Complexity: O(V)

# Code
```

// missed some test cases
function isBipartite($graph) {
        if(sizeof($graph) == 1)
            return true;
        $color = 1;
        $q = new SplQueue();
        $visited = [];
        $colors = [];
        $src = 0;
        for($i =0; $i < sizeof($graph); $i++){
            if($graph[$i] != []){
                $src = $i;
                break;
            }
        } 
        $visited[$src] = 1;
        $colors[$src] = 1;
        $q->enqueue([$src, $color]); // src =0; color = 1
        while(! $q->isEmpty() ){
            $first = $q->dequeue();
            $color = ! $first[1]; // 0
            $neighbors = $graph[$first[0]];
            // if($neighbors == [])
            //     return false;
            foreach($neighbors as $neighbor){
                if(! $visited[$neighbor] ){
                    $q->enqueue([$neighbor, $color]);
                    $visited[$neighbor] = 1;
                    $colors[$neighbor] = $color;
                }
                if($colors[$first[0]] == $colors[$neighbor])
                    return false;
            }
        }

        return true;
    }


//passses all test cases

    function isBipartite($graph) {
        if(sizeof($graph) == 1)
            return true;
        // 0 unvisited, 1 red , 2 green    
        $visited = [];
        for($i =0; $i < sizeof($graph); $i++){
            if( $visited[$i] == 0 && sizeof($graph) != 0 ){
                $visisted[$i] = 1;
                $q = new SplQueue();
                $q->enqueue($i);
                while(! $q->isEmpty()){
                    $curr = $q->dequeue();
                    $neighbors = $graph[$curr];
                    foreach($neighbors as $neighbor){
                        if($visited[$neighbor] == 0){
                            $visited[$neighbor] = ($visited[$curr] == 1) ? 2:1;
                            $q->enqueue($neighbor);
                        }
                        else{
                            if($visited[$curr] == $visited[$neighbor])
                                return false;
                        }
                    }
                }
            }   
        }
        return true;
    }

```