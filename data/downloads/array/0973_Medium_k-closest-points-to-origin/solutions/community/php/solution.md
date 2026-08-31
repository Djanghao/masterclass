# PHP solution with SplPriorityQueue O(n log(k)), not O(n log(n))

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/4537661/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/4537661/)

---

# Code
```
class Solution {
    function kClosest($points, $k) {

        $heap = new SplPriorityQueue();

        foreach($points as $p){
            $d = sqrt(pow(0-$p[0],2) + pow(0-$p[1],2));
            if($heap->count() < $k){
                $heap->insert($p,$d);
            }else{
                $heap->insert($p,$d);
                $heap->extract();
            }
        }

        $r=[];
        //You may return the answer in any order. 
        while(!$heap->isEmpty()){
            $r[] = $heap->extract();
        }

        return $r;
    }
}
```