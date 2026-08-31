# PHP solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/4465699/](https://leetcode.com/problems/faulty-sensor/solutions/4465699/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $sensor1
     * @param Integer[] $sensor2
     * @return Integer
     */
    function badSensor($sensor1, $sensor2) {
        $i=0;
        while($sensor1[$i]==$sensor2[$i] && $i < count($sensor1)){
            $i++;
        }

        $isSensor1=true;
        for($j=$i;$j<count($sensor1)-1;$j++){
            if($sensor1[$j] != $sensor2[$j+1]){
                $isSensor1 = false;
                break;
            }
        }
        $isSensor2 = true;
        for($j=$i;$j<count($sensor2)-1;$j++){

            if($sensor2[$j] != $sensor1[$j+1]){
                $isSensor2 = false;
                break;
            }
        }

        if($isSensor1 && !$isSensor2){
            return 1;
        }
        if(!$isSensor1 && $isSensor2){
            return 2;
        }
        return -1;
    }
}
```