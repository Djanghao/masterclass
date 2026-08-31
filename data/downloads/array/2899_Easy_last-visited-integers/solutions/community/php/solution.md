# PHP. T - O(n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4334699/](https://leetcode.com/problems/last-visited-integers/solutions/4334699/)

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
O(n)
# Code
```
class Solution {

    /**
     * @param String[] $words
     * @return Integer[]
     */
    function lastVisitedIntegers($words) {
        $stack = [];
        $res = [];
        $i = 0;
        foreach($words as $v){
            if($v == "prev"){
                $cur = -1;
                if(count($stack) > 0 && $i >= 0){
                    $cur = $stack[$i];
                    $i--;
                }
                $res[] = $cur;
            } else {
                $stack[] = $v;
                $i = count($stack)-1;
            }
        }

        return $res;
    }
}
```