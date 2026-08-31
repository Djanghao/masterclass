# O(n) solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/3184202/](https://leetcode.com/problems/wiggle-sort/solutions/3184202/)

---

# Code
```
class Solution {
    function wiggleSort(&$nums) {
        for($i=1;$i<count($nums);$i++){
            if ($i%2 == 0){
                if($nums[$i] > $nums[$i-1]){
                     $tmp = $nums[$i];
                     $nums[$i] = $nums[$i-1];
                     $nums[$i-1] = $tmp; 
                }
            }else{
                if($nums[$i]<$nums[$i-1]){
                     $tmp = $nums[$i];
                     $nums[$i] = $nums[$i-1];
                     $nums[$i-1] = $tmp; 
                }
            }        
        }
    }
}
```