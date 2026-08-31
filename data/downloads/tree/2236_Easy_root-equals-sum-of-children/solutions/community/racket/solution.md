# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/3785326/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/3785326/)

---

```
(define/contract (check-tree root)
    (-> (or/c tree-node? #f) boolean?)
    (equal?
        (tree-node-val root)
        (+ (tree-node-val (tree-node-left root))
           (tree-node-val (tree-node-right root)))))
```