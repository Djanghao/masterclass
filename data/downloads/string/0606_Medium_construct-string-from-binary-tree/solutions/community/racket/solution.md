# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4379852/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4379852/)

---

# Code
```
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

(define/contract (tree2str root)
  (-> (or/c tree-node? #f) string?)
  (cond  [(boolean? root) ""]
         [else
          (let ([l (tree2str (tree-node-left root))]
                [r (tree2str (tree-node-right root))])
       (string-append (number->string (tree-node-val root))
                           (cond [(non-empty-string? r) (string-append "(" l ")" "(" r ")")]
                                 [else (if (non-empty-string? l) (string-append "(" l ")") "")])))]
      
    )
  )
```