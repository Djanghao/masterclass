# PHP Solution

**Author:** tsymbarevych
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/2309347/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/2309347/)

---

```
class Solution {

    /**
     * @param String $current
     * @param String $correct
     * @return Integer
     */
    function convertTime($current, $correct) {
        $result = 0;
        $steps = [60, 15, 5, 1];
        
        $currentData = explode(':', $current);
        $correctData = explode(':', $correct);
        
        $diffInMin = 
            (intval($correctData[0]) * 60 + $correctData[1]) - 
            (intval($currentData[0]) * 60 + $currentData[1]);
        
        foreach ($steps as $step) {
            while($diffInMin >= $step) {
                $diffInMin -= $step;
                ++$result;
            }    
        }
        
        return $result;        
    }
}
```