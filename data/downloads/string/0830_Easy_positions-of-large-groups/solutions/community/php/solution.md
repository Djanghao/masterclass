# 100% faster of php solution

**Author:** terrorbyte01
**Votes:** 0
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/5292137/](https://leetcode.com/problems/positions-of-large-groups/solutions/5292137/)

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
     * @param String $s
     * @return Integer[][]
     */
    function largeGroupPositions($s) {
        $group_list=[];
        $last_char='';
        $start_array=0;
        for($i=0;$i<strlen($s);$i++){
            if($last_char=='')$last_char=$s[$i];
            if($i===(strlen($s)-1) && $s[$i]===$last_char){
                if($i-$start_array+1>=3){
                    $group_list[]=[$start_array,$i];
                }
            }else if($s[$i]!==$last_char){
                if($i-$start_array>=3){
                    $group_list[]=[$start_array,$i-1];
                }
                
                $start_array=$i;
                $last_char=$s[$i];
            }
            

        }
        return $group_list;
    }
}
```