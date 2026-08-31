# racket solution

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4624004/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4624004/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
;(define/contract (pseudo-palindromic-paths  root)
;  (-> (or/c tree-node? #f) exact-integer?)
;  )

(define (trace node bits)
  (if (eq? node #f) 0 
(let* (
    [newBits (bitwise-xor bits (arithmetic-shift 1  (- (tree-node-val node) 1)))]
    [polindrom (bitwise-and newBits (- newBits 1))])
    (cond [
        (and (eq? (tree-node-left node) #f) (eq? (tree-node-right node) #f)) 
        (if (= polindrom 0) 1 0)
        ]
    [else (+ 
        (trace (tree-node-left node) newBits) 
        (trace (tree-node-right node) newBits))]))))

(define (pseudo-palindromic-paths root)
    (trace root 0)
)

```