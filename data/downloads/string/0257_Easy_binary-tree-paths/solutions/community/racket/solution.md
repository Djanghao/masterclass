# racket - simple recursion

**Author:** esehara
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/1277352/](https://leetcode.com/problems/binary-tree-paths/solutions/1277352/)

---

```scheme
(define (walk root path)
  (if (not root) path
      (let* ([val (tree-node-val root)]
            [left (tree-node-left root)]
            [right (tree-node-right root)]
            [path (append path (list (number->string val)))])
        (flatten 
             (cond 
              [(and (not left) (not right)) (string-join path "->")]
              [(not left) (walk right path) ]
              [(not right) (walk left path) ]
              [else (list (walk left path) (walk right path))])))))

(define/contract (binary-tree-paths root)
  (-> (or/c tree-node? #f) (listof string?))
  (walk root (list)))
```