# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792094/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792094/)

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

(define/contract (recur root)
    (-> (or/c tree-node? #f) (cons/c exact-integer? exact-integer?))
    (if (equal? root #f) (cons 0 -1)
         (let* ([leftRecur (recur (tree-node-left root))]
                [rightRecur (recur (tree-node-right root))]
                [leftNum (car leftRecur)]
                [leftDepth (cdr leftRecur)]
                [rightNum (car rightRecur)]
                [rightDepth (cdr rightRecur)])
         (cond 
         [(and (equal? leftDepth -1) (equal? rightDepth -1))
         (cons (tree-node-val root) 0)]
         [(> rightDepth leftDepth) (cons rightNum (add1 rightDepth))]
         [else (cons leftNum (add1 leftDepth))]))))

(define/contract (find-bottom-left-value root)
  (-> (or/c tree-node? #f) exact-integer?)
  (car (recur root)))
```