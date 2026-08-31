# Racket solution and explanation

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2227604/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2227604/)

---

Idea based [Tlatoani's solution](https://leetcode.com/contest/weekly-contest-299/ranking/2/).

We can iterate all possibilities and calculate the three xor of components.

There are two strategies:

1. iterate pair of edges, or
2. iterate pair of nodes

Here, strategy 2 is easier to understand in concept.

Firstly, we build the tree from any node as root. We choose node `0`.
Then, the edge becomes directed (from father to child).
We iterate every pair of nodes as children nodes of the two removed edges.

Let's say node `a` and `b` is a pair of nodes, if

1. `a` is not `b`'s ancestor and `b` is not `a`'s ancestor, then we get three xor values are
	`x = xor_subtree(a)`, `y = xor_subtree(b)`, `xor_subtree(0) xor x xor y`.
2. `a` is `b`'s ancestor, then we get `x = xor_subtree(a) xor y`, `y = xor_subtree(b)`, `xor_subtree(0) xor x xor y`
3. `b` is `a`'s ancestor ...

We use a special information to recognize if `a` is `b`'s ancestor, see below.

```scheme
(define/contract (minimum-score nums edges)
  (-> (listof exact-integer?) (listof (listof exact-integer?)) exact-integer?)

  (define n (length nums))
  (define adjacent (make-array n '()))

  (for ([e edges])
    (let ([a (car e)]
          [b (cadr e)])
      (aset! adjacent a
             (cons b (aref adjacent a)))
      (aset! adjacent b
             (cons a (aref adjacent b)))))
  
  (define id-preorder (make-array n 0)) ; the number of elements before `i` in preorder tree-walk
  (define maxid-in-subtree (make-array n 0))
  (define xor-subtree (list->vector nums)) ; partial xor in the subtree that root is `i`

  (define k 0)

  (define (walk-tree a parent)
    (aset! id-preorder a k)
    (set! k (add1 k))
    (for ([b (aref adjacent a)])
      (when (not (= b parent))
        (walk-tree b a)
        (aset! xor-subtree a
               (bitwise-xor (aref xor-subtree a)
                            (aref xor-subtree b)))))
    (aset! maxid-in-subtree a k))

  (define (ancestor? a b)
    (and (<= (aref id-preorder a)
             (aref id-preorder b))
         (<= (aref maxid-in-subtree b)
             (aref maxid-in-subtree a))))

  (let ([answer #e1e10])
    (walk-tree 0 -1)
    (for* ([a (range 1 n)]
           [b (range 1 a)])
      (let ([x (aref xor-subtree a)]
            [y (aref xor-subtree b)])
        (cond [(ancestor? a b) (set! x (bitwise-xor x y))]
              [(ancestor? b a) (set! y (bitwise-xor x y))])
        (define z (bitwise-xor (aref xor-subtree 0) x y))
        (set! answer (min answer (- (max x y z)
                                    (min x y z))))))
    answer))
	
;; helpers ;;

(define (make-array . dims)
  (if (= (length dims) 1) (car dims)
      (build-vector (car dims) (lambda _ (apply make-array (cdr dims))))))

(define (aref arr . dims)
  (if (= (length dims) 0) arr
      (apply aref (vector-ref arr (car dims)) (cdr dims))))

(define (aset! arr . dims)
  (if (= (length dims) 2) (vector-set! arr (car dims) (cadr dims))
      (apply aset! (vector-ref arr (car dims)) (cdr dims))
```