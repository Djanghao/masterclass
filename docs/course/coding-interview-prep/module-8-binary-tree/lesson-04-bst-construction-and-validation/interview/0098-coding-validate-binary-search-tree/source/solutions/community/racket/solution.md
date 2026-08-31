# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/4617302/](https://leetcode.com/problems/validate-binary-search-tree/solutions/4617302/)

---

# Code
```racket
; Definition for a binary tree node.
#|

; val : integer?
; left : (or/c tree-node? #f)
; right : (or/c tree-node? #f)
(struct tree-node
  (val left right) #:mutable #:transparent)

; constructor
(define (make-tree-node [val 0])
  (tree-node val #f #f))

|#

(define/contract (is-valid-bst-recur root low high)
    (-> (or/c tree-node? #f) exact-integer? exact-integer? boolean?)
  (if (tree-node? root)
      (let ([v (tree-node-val root)])
      (and (< low v) (> high v) (is-valid-bst-recur (tree-node-left root) low v) (is-valid-bst-recur (tree-node-right root) v high)))
      true))

(define/contract (is-valid-bst root)
  (-> (or/c tree-node? #f) boolean?)
  (is-valid-bst-recur root (- (-(expt 2 31)) 5) (expt 2 31)))
```