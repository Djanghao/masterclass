# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5002703/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5002703/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Step by step fill "I" with current number (from min to max)
2. If there is "D" - count and fill them (from cur+count to cur)
3. Return to step 1
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
     * @param String $pattern
     * @return String
     */
    function smallestNumber($pattern) {
        $res = "";
        $cur = 1;
        $pattern .= "I"; // one more loop
        $l=0;
        while($l<strlen($pattern)){
            if($pattern[$l] === "I"){
                $res .= $cur;
                $cur++;
                $l++;
            } else if($pattern[$l] === "D"){
                $r=$l;
                while($pattern[$r] === "D" && $r < strlen($pattern)){
                    $r++;
                }
                $cur += $r-$l;
                $tmp = $cur;
                while($l <= $r ){
                    $res .= $tmp;
                    $tmp--;
                    $l++;
                }
                $cur++;
            }
        }
        
        return $res;
    }
}
```