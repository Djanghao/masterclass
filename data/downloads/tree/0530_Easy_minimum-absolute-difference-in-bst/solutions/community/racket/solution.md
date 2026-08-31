# racket inorder traversal + srfi1 map

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/4505701/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/4505701/)

---


# Code

```scheme
(require (only-in srfi/1 map))

(define (inorder-traversal tree)
  (if (not tree)
      '()
      (append (inorder-traversal (tree-node-left tree))
              (list (tree-node-val tree))
              (inorder-traversal (tree-node-right tree)))))

(define (get-minimum-difference root)
  (let ([inorder (inorder-traversal root)])
    (apply min (map (compose abs (curry apply -) list) inorder (rest inorder)))))
```