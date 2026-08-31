# racket balanced binary tree

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/2326545/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/2326545/)

---

We preconstruct a balanced binary tree for the offline data.
Time: `O(n lg m)` where `n` is the length of input array,
`m` is the number of unique numbers in the array.

```scheme
(define/contract (count-smaller nums)
  (-> (listof exact-integer?) (listof exact-integer?))

  (define .bstv (list->vector (sort (set->list (list->set nums)) <)))
  (define n (vector-length .bstv))
  (define .bst-cnt (make-array n 0)) ; frequencies of value of current node
  (define .bst-leftcnt (make-array n 0)) ; sum of frequencies of the left subtree of current node

  (define (make-bst) (cons 0 n))
  (define (bst-root-val bst) (aref .bstv (bst-root bst)))
  (define (bst-root bst) (quotient (+ (car bst) (cdr bst)) 2))
  (define (bst-left bst) (cons (car bst) (bst-root bst)))
  (define (bst-right bst) (cons (bst-root bst) (cdr bst)))
  (define (bst-leftcnt bst) (aref .bst-leftcnt (bst-root bst)))
  (define (bst-cnt bst) (aref .bst-cnt (bst-root bst)))
  
  (define (bst-increase! bst arr)
    (aset! arr (bst-root bst)
           (add1 (aref arr (bst-root bst)))))
  
  (define (bst-insert! bst v)
    (cond [(= (bst-root-val bst) v) (bst-increase! bst .bst-cnt)]
          [(< v (bst-root-val bst)) (bst-increase! bst .bst-leftcnt)
                                    (bst-insert! (bst-left bst) v)]
          [(> v (bst-root-val bst)) (bst-insert! (bst-right bst) v)]))

  (define (bst-count< bst v)
    (cond [(< v (bst-root-val bst)) (bst-count< (bst-left bst) v)]
          [(> v (bst-root-val bst)) (+ (bst-leftcnt bst)
                                       (bst-cnt bst)
                                       (bst-count< (bst-right bst) v))]
          [(= v (bst-root-val bst)) (bst-leftcnt bst)]))

  (let ([rev (reverse nums)]
        [bst (make-bst)])
    (reverse (for/list ([v rev])
               (bst-insert! bst v)
               (bst-count< bst v)))))

;; helpers ;;

(define (make-array . dims)
  (if (= (length dims) 1) (car dims)
      (build-vector (car dims) (lambda _ (apply make-array (cdr dims))))))

(define (aref arr . dims)
  (if (= (length dims) 0) arr
      (apply aref (vector-ref arr (car dims)) (cdr dims))))

(define (aset! arr . dims)
  (if (= (length dims) 2) (vector-set! arr (car dims) (cadr dims))
      (apply aset! (vector-ref arr (car dims)) (cdr dims))))
```