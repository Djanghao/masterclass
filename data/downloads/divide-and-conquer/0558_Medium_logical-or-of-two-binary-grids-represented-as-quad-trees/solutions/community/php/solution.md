# Solution Logical OR of Two Binary Grids Represented as Quad-Trees

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/4744165/](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/4744165/)

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
/**
 * Definition for a QuadTree node.
 * class Node {
 *     public $val = null;
 *     public $isLeaf = null;
 *     public $topLeft = null;
 *     public $topRight = null;
 *     public $bottomLeft = null;
 *     public $bottomRight = null;
 *     function __construct($val, $isLeaf) {
 *         $this->val = $val;
 *         $this->isLeaf = $isLeaf;
 *         $this->topLeft = null;
 *         $this->topRight = null;
 *         $this->bottomLeft = null;
 *         $this->bottomRight = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param Node $quadTree1
     * @param Node $quadTree2
     * @return Node
     */
    function intersect($quadTree1, $quadTree2) {
        if (!$quadTree1 || !$quadTree2) {
            return null;
        }

        // If both nodes are leaf nodes, merge and quit
        if ($quadTree1->isLeaf && $quadTree2->isLeaf) {
            $quadTree1->val = $quadTree1->val || $quadTree2->val;
            return $quadTree1;
        }

        $this->split($quadTree1);
        $this->split($quadTree2);

        $quadTree1->topLeft = $this->intersect($quadTree1->topLeft, $quadTree2->topLeft);
        $quadTree1->topRight = $this->intersect($quadTree1->topRight, $quadTree2->topRight);
        $quadTree1->bottomLeft = $this->intersect($quadTree1->bottomLeft, $quadTree2->bottomLeft);
        $quadTree1->bottomRight = $this->intersect($quadTree1->bottomRight, $quadTree2->bottomRight);

        $this->mergeChildren($quadTree1);

        return $quadTree1;
    }

    private function split(&$node) {
        if (!$node->isLeaf) {
            return;
        }

        $node->isLeaf = false;
        $node->topLeft = new Node($node->val, true);
        $node->topRight = new Node($node->val, true);
        $node->bottomLeft = new Node($node->val, true);
        $node->bottomRight = new Node($node->val, true);
    }

    private function mergeChildren(&$node) {
        if ($node->isLeaf) {
            return;
        }

        if (
            $node->topLeft->isLeaf &&
            $node->topRight->isLeaf &&
            $node->bottomLeft->isLeaf &&
            $node->bottomRight->isLeaf
        ) {
            if (
                $node->topLeft->val == $node->topRight->val &&
                $node->topLeft->val == $node->bottomLeft->val &&
                $node->topLeft->val == $node->bottomRight->val
            ) {
                $node->val = $node->topLeft->val;
                $node->isLeaf = true;
                $node->topLeft = null;
                $node->topRight = null;
                $node->bottomLeft = null;
                $node->bottomRight = null;
            }
        }
    }
}

```