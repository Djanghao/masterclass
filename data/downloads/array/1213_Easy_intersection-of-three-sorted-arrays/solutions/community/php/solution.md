# [PHP] Map(array) & Tree Pointers Solutions

**Author:** casshsu
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/1616539/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/1616539/)

---

Map
```
class Solution {
    var $m = array();
    
    function arraysIntersection($arr1, $arr2, $arr3) {
        $ans = array();
        
        foreach ($arr1 as $n) { $this->countIt($n); }
        foreach ($arr2 as $n) { $this->countIt($n); }
        foreach ($arr3 as $n) { $this->countIt($n); }
        
        foreach ($this->m as $k => $v) {
            if ($v === 3) array_push($ans, $k);
        }
        
        return $ans;
    }
    
    function countIt($n) {
        if ($this->m[$n]) $this->m[$n]++;
        else $this->m[$n] = 1;
    }
}
```

Tree Pointers
```
class Solution {
    function arraysIntersection($arr1, $arr2, $arr3) {
        $p1 = $p2 = $p3 = 0;
        $ans = array();
        
        while ($p1 < count($arr1) && $p2 < count($arr2) && $p3 < count($arr3)) {
            if ($arr1[$p1] === $arr2[$p2] && $arr2[$p2] === $arr3[$p3]) {
                array_push($ans, $arr1[$p1]);
                $p1++;
                $p2++;
                $p3++;
                
            } else {
                if ($arr1[$p1] < $arr2[$p2]) {
                    $p1++;
                } else if ($arr2[$p2] < $arr3[$p3]) {
                    $p2++;
                } else {
                    $p3++;
                }
            }
        }
        
        return $ans;
    }
}
```