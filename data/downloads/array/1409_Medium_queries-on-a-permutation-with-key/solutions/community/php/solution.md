# PHP Solution

**Author:** mmabdelgawad
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/2295196/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/2295196/)

---

class Solution {

    /**
     * @param Integer[] $queries
     * @param Integer $m
     * @return Integer[]
     */
    function processQueries($queries, $m) {
        $p = range(1, $m);
        
        for($i = 0; $i < count($queries); $i++) {
            $key = array_search($queries[$i], $p);
            array_splice($p, $key, 1);
            array_unshift($p, $queries[$i]);
            $queries[$i] = $key; 
        }
        
        return $queries;
    }
}