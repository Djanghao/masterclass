# PHP Beats 100% with only one Stack

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/3284289/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/3284289/)

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
     * @param Integer $k
     * @return String
     */
    function removeDuplicates($s, $k) {
        $stack = new SplStack();
        $ans = '';

        for($i=0; $i<strlen($s); $i++){
            if(!$stack->isEmpty() && $stack->top()[0] === $s[$i]){
                $char = $stack->pop();
                if($char[1]+1 < $k){
                    $stack->push([$char[0], $char[1]+1]);
                }
            }else{
                $stack->push([$s[$i], 1]);
            }
        }

        while(!$stack->isEmpty()){
            $val = $stack->shift();
            $char = $val[0];
            $count = $val[1];

            for($i=0; $i<$count; $i++){
                $ans .= $char;
            }
        }

        return $ans;
    }
}
```