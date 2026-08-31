# JavaScript, recursion

**Author:** sivarbalan
**Votes:** 10
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/436800/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/436800/)

---

```
var printLinkedListInReverse = function(head) {
    function reverseTraverse(node){
        if(node == null) return;
        reverseTraverse(node.getNext());
        node.printValue();
    }
    reverseTraverse(head);
};
```