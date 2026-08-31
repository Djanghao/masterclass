# Racket recursive solution

**Author:** esehara
**Votes:** 1
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/1277398/](https://leetcode.com/problems/deepest-leaves-sum/solutions/1277398/)

---

```scheme

(struct value-pair (depth val))

(define (walk root depth)
  (if (not root) 0
      (flatten (let ([val (tree-node-val root)]
            [left (tree-node-left root)]
            [right (tree-node-right root)]
            [depth (+ depth 1)])
        (cond [(and (not left) (not right)) (value-pair depth val)]
              [(not left) (walk right depth)]
              [(not right) (walk left depth)]
              [else (list (walk right depth) (walk left depth))])))))

(define (walk-sort lst)
  (sort lst (lambda (a b) (> (value-pair-depth a) (value-pair-depth b)))))

(define (walk-filter lst)
  (let ([maximo (value-pair-depth (car lst))])
      (filter (lambda (a) (= maximo (value-pair-depth a))) lst)))

(define (walk-sum lst)
  (foldl (lambda (a result) (+ (value-pair-val a) result)) 0 lst))

(define/contract (deepest-leaves-sum root)
  (-> (or/c tree-node? #f) exact-integer?)
  (walk-sum (walk-filter (walk-sort (walk root 0)))))
```