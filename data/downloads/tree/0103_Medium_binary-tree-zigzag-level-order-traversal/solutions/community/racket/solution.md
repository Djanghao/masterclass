# racket level order + odd reverse

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/4505617/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/4505617/)

---

# Code

```scheme
(define (preorder-traversal root [level 0])
  (if (not (tree-node? root))
      '()
      (cons
       (cons (list (tree-node-val root) level)
             (preorder-traversal (tree-node-left root) (add1 level)))
       (preorder-traversal (tree-node-right root) (add1 level)))))

(define (split-into ls subls-size)
  (if (<= (length ls) subls-size)
      (list ls)
      (append (list (take ls subls-size))
              (split-into (drop ls subls-size) subls-size))))

(define (level-order root)
  (if (not (tree-node? root))
      '()
      (let ([pre (preorder-traversal root)])
        (map (\u03BB (ls) (map first ls))
             (group-by (\u03BB (x) (second x)) (split-into (flatten pre) 2))))))

(define (zigzag-level-order root)
  (let ([l-order (level-order root)])
    (for/list ([idx (in-range (length l-order))]
               [level l-order])
      (if (odd? idx)
          (reverse level)
          level))))
```