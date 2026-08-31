# PHP Solution

**Author:** hrabardzmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/5629877/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/5629877/)

---

# Code
```
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Integer
     */
    function minSteps($s, $t) {
        $sArr = str_split($s);
        $tArr = str_split($t);
        $counter = 0;

        foreach($sArr as $key=>$value){
            $sHas[$value]++; 
        }

        foreach($tArr as $key=>$value){
            if($sHas[$value]){
                $sHas[$value]--;
            }else{
                $counter++;
            }
        }

        return $counter;

    }

}
```