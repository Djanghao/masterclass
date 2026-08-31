# PHP solution, O(n)

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5014050/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5014050/)

---

# Code
```
class Solution {
    function verifyPreorder($preorder) {
        $min = PHP_INT_MIN;
        $stack = [];

        foreach($preorder as $num){
            // If the current number is supposed to be on the right 
            // of the last node in the stack  and it is smaller than 
            // the last node, update the minimum and remove the node 
            // from the stack.
            while($stack && end($stack) < $num){
                $min = array_pop($stack);
            }
            // If the current number is less than the minimum, it 
            // violates the binary search tree properties.
            if($min > $num){
                return false;
            }
            $stack[] = $num;
        }
        return true;
    }
}
```
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
