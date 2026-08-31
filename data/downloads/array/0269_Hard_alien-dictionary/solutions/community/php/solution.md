# Simple well not simple PHP solution with comments

**Author:** bobo_repay
**Votes:** 1
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/5374257/](https://leetcode.com/problems/alien-dictionary/solutions/5374257/)

---

# Intuition
Form graph then apply topological sort

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {

    /**
     * @param String[] $words
     * @return String
     */
    function alienOrder($words) {
        $adj = [];
        $indegree = [];
        //initialize graph and indegree count
        foreach($words as $word){
            foreach(str_split($word) as $c){
                $indegree[$c] = 0;
                $adj[$c] = [];
            }
        }

        //form graph
        for($i = 0; $i < count($words) - 1; $i ++){
            $j = 0;
            $get = false;
            while($words[$i][$j] && $words[$i+1][$j]){
                $cur_chr = $words[$i][$j];
                $nxt_chr = $words[$i+1][$j];
                if($cur_chr !== $nxt_chr){
                    $get = true;
                    if(!in_array($nxt_chr,$adj[$cur_chr])){
                        $adj[$cur_chr][] = $nxt_chr;
                        $indegree[$nxt_chr] += 1;
                    }
                    //only first pair of letter doesn't match count
                    break;
                }
                $j ++;
            }
            //invalid when all letters match but current word is longer 
            if(!$get && strlen($words[$i]) > strlen($words[$i+1])){
                return '';
            } 
        }

        //topological sort starts here
        $q = [];
        foreach($indegree as $key => $val){
            if($val === 0) $q[] = $key;
        }

        $seq = [];
        
        while(!empty($q)){
            $chr = array_shift($q);
            $seq[] = $chr;
            foreach($adj[$chr] as $neighbour){
                $indegree[$neighbour] -= 1;
                if($indegree[$neighbour] === 0) $q[] = $neighbour;
            }
        }

        //return sequence if valid
        return count($seq)  === count($indegree) ?  implode($seq) : '';

    
    }
}
```