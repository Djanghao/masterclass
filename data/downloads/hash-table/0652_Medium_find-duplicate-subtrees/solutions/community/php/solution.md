# PHP - easy understanding / Beats 100%

**Author:** tinghaolai
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238423/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238423/)

---

# Explain

Save the structure as string while travel the nodes.

# Code
```
class Solution {

    /**
     * @param TreeNode $root
     * @return TreeNode[]
     */
    function findDuplicateSubtrees($root) {
        $this->subTrees = [];
        $this->result = [];
        $this->runNode($root);

        return $this->result;
    }

    function runNode($node) {
        if (!$node) {
            return 'null';
        }

        $leftString = $this->runNode($node->left);
        $rightString = $this->runNode($node->right);
        $string = 'v-' . $node->val . 'l-' . $leftString . 'r-' . $rightString;
        if (empty($this->subTrees[$string])) {
            $this->subTrees[$string] = [
                'count' => 1,
                'tree' => $node,
            ];
        } else {
            $this->subTrees[$string]['count']++;
            // put into answer only at second times
            if ($this->subTrees[$string]['count'] === 2) {
                $this->result[] = $node;
            }
        }

        return $string;
    }
}
```