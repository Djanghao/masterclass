# JavaScript solution, In Order Transversal

**Author:** sivarbalan
**Votes:** 11
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/441198/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/441198/)

---

```
var treeToDoublyList = function(root) {
    if(!root) return;
    var head, previous;
    function inOrderTraverse(node){
        if(node.left) inOrderTraverse(node.left);
        if(!head) head = node;
        if(previous){
            previous.right = node;
            node.left = previous;
        }
        previous = node;
        if(node.right) inOrderTraverse(node.right);
    }
    inOrderTraverse(root);
    previous.right = head;
    head.left = previous;
    return head;
};
```