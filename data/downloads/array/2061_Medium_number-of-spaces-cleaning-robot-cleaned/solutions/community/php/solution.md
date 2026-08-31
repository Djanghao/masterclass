# PHP solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5162490/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5162490/)

---

# Code
```
class Solution {
    function numberOfCleanRooms($room) {
        $map=[];
        $i=$j=$clean=0;
        $d = 'r'; // direction
        while(true){           
            if($map[$i][$j][$d]){
                // loop detected
                return $clean;
            }
            $map[$i][$j][$d] = true;
            // count only first visit
            if(!$map[$i][$j]['clean']){
                $map[$i][$j]['clean']=true;
                $clean++;
            }
            if($d == 'r'){
                if($j+1 == count($room[0]) || $room[$i][$j+1] == 1){
                    $d = 'd';
                }else{
                    $j++;
                }
            }elseif($d == 'l'){
                if($j==0 || $room[$i][$j-1] == 1){
                    $d = 't';
                }else{
                    $j--;
                }
            }elseif($d == 'd'){
                if($i+1 == count($room) || $room[$i+1][$j] == 1){
                   $d = 'l';
                }else{
                    $i++;
                }
            }else{
                if($i == 0 || $room[$i-1][$j] == 1){
                    $d = 'r';
                }else{
                    $i--;
                }
            }
        }

    }
}
```