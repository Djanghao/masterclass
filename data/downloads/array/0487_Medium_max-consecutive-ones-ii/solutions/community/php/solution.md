# Sliding windows Concept

**Author:** ccdsiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/4844075/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/4844075/)

---

# Intuition
Sliding windows Concept

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    
    function findMaxConsecutiveOnes($nums) {
        if(count($nums)==1){return 1;}
         if(!in_array(0,$nums)){
             return count($nums);
         }

        $left = 0;
        $ans = 0;
        $window = 0;
        for($right=0;$right<count($nums);$right++){
               $window = $window+$nums[$right];
               while(!($window==($right-$left+1) || $window==($right-$left))){
                  $window = $window-$nums[$left];
                  $left = $left+1;
               }
           $ans = max($ans,($right-$left+1));
           //echo "L:".$left." | R:".$right." | V:".$nums[$right]." | W:".$window." | A:".$ans."\
";
        }
        return $ans;
    }

}
```