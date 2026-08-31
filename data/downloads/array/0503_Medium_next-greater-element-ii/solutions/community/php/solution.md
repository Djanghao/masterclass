# Php Stack || Beats 100%

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/2937106/](https://leetcode.com/problems/next-greater-element-ii/solutions/2937106/)

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
     * @param Integer[] $nums
     * @return Integer[]
     */
    function nextGreaterElements($nums) {
        $stack = new SplStack();
        $arr = array_fill(0,count($nums), -1);

        for($i=1; $i<=2; $i++){
           foreach($nums as $k=>$v){
               while(!$stack->isEmpty() && $nums[$stack->top()]<$v){
                   $pop = $stack->pop();
                   $arr[$pop] = $v;
               }

               $stack->push($k);
           }
        }

        return $arr;
    }
}
```