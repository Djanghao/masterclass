# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-gap/solutions/4693964/](https://leetcode.com/problems/binary-gap/solutions/4693964/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function binaryGap($n) {
        $res = 0;
        $n = decbin($n);
        $i=0;
        while($i<strlen($n)-1){
            $cur = $n[$i];
            if($cur == "1"){
                $j=$i+1;
                
                while($j<strlen($n) && $n[$j] != "1"){
                    $j++;
                }
                if($j < strlen($n)){
                    $res = max($res,$j-$i);
                }
                
                $i=$j;
            } else {
                $i++;
            }

        }
        return $res;
    }
}
```