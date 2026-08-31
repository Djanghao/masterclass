# PHP. T - O(n * m), M - O(27).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/4974617/](https://leetcode.com/problems/find-and-replace-pattern/solutions/4974617/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Build alias for pattern
2. Compare all elements with pattern alias

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
     * @param String $pattern
     * @return String[]
     */
    function findAndReplacePattern($words, $pattern) {
        // build pattern alias
        $base = [];
        $d = [];
        for($i=0;$i<strlen($pattern);$i++){
            if(!isset($d[$pattern[$i]])){
                $d[$pattern[$i]] = $i;
            }
            $base[] = $d[$pattern[$i]];
        }

        // compare each element with base alias
        $res = [];
        foreach($words as $w){
            $d = [];
            for($i=0;$i<strlen($w);$i++){
                if(!isset($d[$w[$i]])){
                    $d[$w[$i]] = $i;
                }
                if($base[$i] !== $d[$w[$i]]){
                    continue(2);
                }
            }
            $res[] = $w;
        }

        return $res;
    }
}
```