# PHP 0ms 100% / 100%

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/4787171/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/4787171/)

---



# Code
```
class Solution {
    function daysBetweenDates($date1, $date2) {
        $dates = [$date1,$date2];
        sort($dates);
        list($date1,$date2) = $dates;
        $m1 = [0,31,29,31,30,31,30,31,31,30,31,30,31,0];
        $m2 = [0,31,28,31,30,31,30,31,31,30,31,30,31,0];
        $nb = 0;
        list($year1,$month1,$day1) = array_map('intval',explode("-",$date1));
        list($year2,$month2,$day2) = array_map('intval',explode("-",$date2));
        if ($year1 != $year2){
            $nb += $year1%4 == 0 ? array_sum(array_slice($m1,$month1+1))+$m1[$month1]-$day1 : array_sum(array_slice($m2,$month1+1))+$m2[$month1]-$day1;
            for($x=$year1+1;$x<$year2;$x++){$nb+= $x%4==0 ? 366 : 365;}
            $nb += ($year2%4==0 && $year2!=2100) ? array_sum(array_slice($m1,0,$month2)) : array_sum(array_slice($m2,0,$month2));
            $nb += $day2;
        }
        else{
            if ($year1%4==0){
                $nb += array_sum(array_slice($m1,$month1+1)) + $m1[$month1] - $day1 - array_sum(array_slice($m1,$month2+1))- $m1[$month2]+$day2;
            }    
            else{
                $nb += array_sum(array_slice($m2,$month1+1)) + $m2[$month1] - $day1 - array_sum(array_slice($m2,$month2+1)) - $m2[$month2]+$day2;
            }
        }
        return $nb;
    }
}
```