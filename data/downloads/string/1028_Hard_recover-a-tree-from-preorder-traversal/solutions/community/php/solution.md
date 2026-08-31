# Solution Recover a Tree From Preorder Traversal

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/4872181/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/4872181/)

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

    function recoverFromPreorder($traversal) {
        $stack = new SplStack();

        $i = 0;
        $n = strlen($traversal);

        while ($i < $n) {
            $level = 0;
            while ($traversal[$i] == '-') {
                $level++;
                $i++;
            }
            
            $value = 0;
            while ($i < $n && is_numeric($traversal[$i])) {
                $value = $value * 10 + intval($traversal[$i]);
                $i++;
            }
            
            $node = new TreeNode($value);

            while ($level < $stack->count()) {
                $stack->pop();
            }
            
            if (!$stack->isEmpty()) {
                if ($stack->top()->left === null) {
                    $stack->top()->left = $node;
                } else {
                    $stack->top()->right = $node;
                }
            }
            
            $stack->push($node);
        }
        
        return $stack->bottom();
    }
}

```