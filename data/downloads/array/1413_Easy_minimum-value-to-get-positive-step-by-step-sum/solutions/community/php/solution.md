# working code

**Author:** xutso
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/5130896/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/5130896/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function minStartValue($nums){
        for ($i = 1;$i<=10001;$i++){
                //$rez = $i;
                $m = 101; 
                $sum =$i;
                //echo "<br>$i<br>";
                foreach($nums as $v) {               
                    $sum+=$v;
                    $m = min($m,$sum);
                    //echo $m . ' _ ';        
                    if($m < 1) { break;}
                }
        if($m >= 1) {         
            //echo " <br>----$i----";//break; 
            return $i;        
        }
        }
    }
}
```