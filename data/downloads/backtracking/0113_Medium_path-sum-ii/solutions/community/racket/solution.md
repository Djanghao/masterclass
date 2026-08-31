# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/4637766/](https://leetcode.com/problems/path-sum-ii/solutions/4637766/)

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

(define/contract (is-leaf? root)
  (-> (or/c tree-node? #f) boolean?)
  (and (tree-node? root) (not (tree-node? (tree-node-left root))) (not (tree-node? (tree-node-right root)))) 
  )

(define/contract (path-sum-recur root acc targetSum)
  (-> (or/c tree-node? #f) exact-integer? exact-integer? (listof (listof exact-integer?)))
      (cond
        [(not (tree-node? root)) empty]
        [else (let ([v (tree-node-val root)][l (tree-node-left root)][r (tree-node-right root)])
                (cond [(is-leaf? root)
                       (cond [(= (+ acc v) targetSum) (list (list v))]
                             [else empty])]
                      [else (map (lambda (lst) (cons v lst))
                    (append (path-sum-recur l (+ acc v) targetSum) (path-sum-recur r (+ acc v) targetSum)))]))]))

(define/contract (path-sum root targetSum)
  (-> (or/c tree-node? #f) exact-integer? (listof (listof exact-integer?)))
  (path-sum-recur root 0 targetSum))
```