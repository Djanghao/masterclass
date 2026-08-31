# PHP

**Author:** leettastic
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4179302/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4179302/)

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
     * @param Integer $n
     * @param Integer[] $leftChild
     * @param Integer[] $rightChild
     * @return Boolean
     */
    function validateBinaryTreeNodes($n, $leftChild, $rightChild) {
        $q = [];
        $parrent = [];
        $counter = [];

        for ($i=0;$i<$n;$i++) {
            $left = $leftChild[$i];
            $right = $rightChild[$i];
            if ($left == -1 && $right == -1)
                $q[] = $i;

            if ($left != -1)
                $parrent[$left] = $i;

            if ($right != -1)
                $parrent[$right] = $i;
        }
    
        if (count($parrent) != $n-1)
            return false;

        while (count($q)){
            $node = array_pop($q);
            if (in_array($node, $counter))
                continue;

            $counter[] = $node;
            if (in_array($node, $counter)) {
                $q[] = $parrent[$node];
            }
        }
    
        return count($counter) == $n;
    }
}
```