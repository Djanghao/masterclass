# PHP: Easy to understand solution

**Author:** zihadxomar
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/1478801/](https://leetcode.com/problems/non-overlapping-intervals/solutions/1478801/)

---

```
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer
     */
    function eraseOverlapIntervals($intervals) {
        sort($intervals);
        $count = 0;
        $end = $intervals[0][1];
        $j=1;
        while($j<count($intervals)){
            $curr_arr = $intervals[$j];
            $curr_start = $curr_arr[0];
            $curr_end = $curr_arr[1];
            if($curr_start<$end){
                $count++;
                if($curr_end<$end){
                    $end = $curr_end;
                }
            }else{
                $end = $curr_end;
            }
            $j++;
        }
        
        return $count;
    }
}
```

