# Racket Recursive Tree Traversal

**Author:** frankli2598
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5611301/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5611301/)

---

# Description
Basic recursive tree traversal, using optional arg to fit the solution call.

# Code
```
(define (leaf? node)
    (and (not (tree-node-left node)) (not (tree-node-right node))))

(define (sum-numbers node [cur 0])
    (if (not node)
        0
        (let ([path (+ (* 10 cur) (tree-node-val node))])
            (if (leaf? node)
                path
                (+ (sum-numbers (tree-node-left node) path) 
                   (sum-numbers (tree-node-right node) path))))))


```