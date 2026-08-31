# Racket solution 100% / 100%

**Author:** HereComesTheMoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3805616/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3805616/)

---

# Racket:
We use Racket. No one on LeetCode uses Racket. The submission page shows 'Sorry, there are not enough accepted submissions to show data'. 

For this reason, on any problem any solution you hand in will be 100% / 100%.

The syntax highlighting in the codw down there might be messed up because LeetCode does not have great Racket support.



# Code
```scheme
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

(define/contract (all-possible-fbt n)
  (-> exact-integer? (listof (or/c tree-node? #f)))
  (if (= n 1)
    (list (tree-node 0 #f #f))
    (flatten
      (for/list ([k (in-range 1 (- n 1))])
        (map
          (lambda (vals) (apply tree-node vals))
          (cartesian-product
            (list 0)
            (all-possible-fbt k)
            (all-possible-fbt (- n (+ k 1)))
          )
        )
      )
    )
  )
)
```