# racket inorder traversal + heap

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4614009/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4614009/)

---

# Code
```scheme
(require data/heap)

(define (inorder-traversal tree)
  (if (not tree)
      '()
      (append (inorder-traversal (tree-node-left tree))
              (list (tree-node-val tree))
              (inorder-traversal (tree-node-right tree)))))

(define (closest-k-values root target k)
  (let* ([car<=? (\u03BB (x y) (< (car x) (car y)))]
         [hp (make-heap car<=?)])
  (let ([dev-cons (map (\u03BB (v) (cons (abs (- target v)) v)) (inorder-traversal root))])
    (heap-add-all! hp dev-cons))
  (for/list ([_ (in-range k)]
             [val (in-heap/consume! hp)])
    (cdr val))))
```