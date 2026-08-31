# ok

**Author:** yrod
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5593733/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5593733/)

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
     * @param String[] $arr
     * @param Integer $k
     * @return String
     */
    function kthDistinct($arr, $k) {
        $tmnarray = count($arr);
        $norepeat = []; 
        for($i = 0; $i < $tmnarray; $i++){
            
            foreach($arr as $value){
                if($value == $arr[$i]){
                    $saida++;
                }
            }
            if ($saida == 1){
                $newarray[] = $i;
            }
            $saida = 0;
        }
        foreach($newarray as $value){
            echo "NoRepeat: $arr[$value], ";
        }
        if($arr[$newarray[$k-1]]){
        return $arr[$newarray[$k-1]];
        }else{
            return "";
        }

    }
}
```