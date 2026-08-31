# php solution:

**Author:** menniablaise
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/3344811/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/3344811/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $brackets
     * @param Integer $income
     * @return Float
     */
    function calculateTax($brackets, $income) {
        if($income == 0){
            return 0;
        }
        $res = [];
        for($i = 0; $i < count($brackets); $i++){
            if($i == 0){
                if($brackets[$i][0] > $income){
                        $temp = $income  * $brackets[$i][1]/100;
                        array_push($res, $temp);
                        break;
                    }else{
                        $temp = $brackets[$i][0] * $brackets[$i][1]/100;
                    }
            }else{
                if($i == (count($brackets) - 1)){
                    if($brackets[$i][0] > $income){
                        $temp = ($income - $brackets[$i-1][0])  * 
                        $brackets[$i][1]/100;
                    }else{

                        $temp = ($brackets[$i][0] - $brackets[$i-1][0]) * 
                        $brackets[$i][1]/100;
                    }

                }else{
                    if($brackets[$i][0] > $income){
                        $temp = ($income - $brackets[$i-1][0])  * 
                        $brackets[$i][1]/100;
                        array_push($res, $temp);
                        break;
                    }else{

                        $temp = ($brackets[$i][0] - $brackets[$i-1][0]) * 
                        $brackets[$i][1]/100;
                    }
                        $temp = ($brackets[$i][0] - $brackets[$i-1][0]) * 
                        $brackets[$i][1]/100;
                }
            }
            array_push($res, $temp);
        }
        print_r($res);
        return abs(array_sum($res));
    }
}
```