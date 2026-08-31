# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5163238/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5163238/)

---

```
(define/contract (evaluate-tree root)
  (-> (or/c tree-node? #f) boolean?)
  (case (tree-node-val root)
    ((0) #f)
    ((1) #t)
    ((2) (or (evaluate-tree (tree-node-left root))
             (evaluate-tree (tree-node-right root))))
    ((3) (and (evaluate-tree (tree-node-left root))
              (evaluate-tree (tree-node-right root))))))
```