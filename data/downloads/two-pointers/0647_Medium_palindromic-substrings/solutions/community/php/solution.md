# PHP Solution

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/3393856/](https://leetcode.com/problems/palindromic-substrings/solutions/3393856/)

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
     * @return Integer
     */
    function countSubstrings($s) {
        // qmaddamr
        // qmadamr
        $count = 0;

        for($i=0; $i<strlen($s); $i++){
            $l = $i;
            $r = $i;
            while($l>=0 && $r<=strlen($s) && $s[$l]===$s[$r]){
                $count++;
                $l--;
                $r++;
            }

            // for event string
            $l = $i;
            $r = $i+1;
            while($l>=0 && $r<=strlen($s) && $s[$l]===$s[$r]){
                $count++;
                $l--;
                $r++;
            }
        }

        return $count;
    }
}
```