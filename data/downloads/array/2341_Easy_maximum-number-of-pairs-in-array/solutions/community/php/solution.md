# sort($nums ) and  loop $nums and array_push results

**Author:** ccdsiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/4860870/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/4860870/)

---

# Intuition
sort($nums ) and  loop $nums and array_push results

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
   
    function numberOfPairs($nums) {
        $res = [];
        sort($nums);
        for ($i = 0; $i < count($nums); $i++) {
            if(($i+1)<count($nums) && ($nums[$i] == $nums[$i+1])){
                $a = [$nums[$i],$nums[$i+1]];
                array_push($res,$a);
                $nums[$i] = "";
                $nums[$i+1] = "";
            }
        }
        return [count($res),count($nums)-(2*count($res))];
    }



}
```