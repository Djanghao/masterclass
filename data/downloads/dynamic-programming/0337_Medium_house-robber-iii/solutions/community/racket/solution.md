# Lisp/Racket, Recursion, Pattern matching

**Author:** frankli2598
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/5673461/](https://leetcode.com/problems/house-robber-iii/solutions/5673461/)

---

# Code
```racket []
(define (make-tree-node [val 0])
  (tree-node val #f #f))

(define (rob node)
    (match-let ([(cons inc exc) (rob2 node)])
       (max inc exc)))

(define (rob2 node)
  (if (not node)
    (cons 0 0)
    (match-let* ([left (tree-node-left node)]
           [right (tree-node-right node)]
           [v (tree-node-val node)]
           [(cons ls lskip) (rob2 left)]
           [(cons rs rskip) (rob2 right)])
           (cons (+ v lskip rskip) (+ (max ls lskip) (max rs rskip))))))
           
```