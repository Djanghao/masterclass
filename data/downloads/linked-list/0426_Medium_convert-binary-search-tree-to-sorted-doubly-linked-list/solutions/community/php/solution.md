# PHP DFS solution with comments

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/4503548/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/4503548/)

---

# Code
```
class Solution {
    private $head;
    private $tail;
    function treeToDoublyList($root) {
        if($root == null){
            return null;
        }
        $this->dfs($root);
        // After traversal, links the tail of the list to the head and vice versa to make it circular.
        $this->tail->right = $this->head;
        $this->head->left = $this->tail;
        return $this->head;
    }

    function dfs($node){
        if($node == null){
            return;
        }
        // Recursively traverse the left subtree.
        $this->dfs($node->left); 
        // The leftmost element is the beginning of the list
        if($this->head == null){
            $this->head = $node;
        }

        if($this->tail != null){
            $this->tail->right = $node;
            $node->left = $this->tail;
        }
        $this->tail = $node;
        // Recursively traverse the right subtree.
        $this->dfs($node->right);
    }
}
```