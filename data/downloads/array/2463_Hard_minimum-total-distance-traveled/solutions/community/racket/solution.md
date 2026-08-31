# recursion with memoization

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5990385/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5990385/)

---

# Intution
Sort robots and factories by position. The current robot can be assigned to the current factory or not. I is the index of robots, J is the index of factories, and K is the index within the factory of the factory's capacity.


# Code
```racket []
(define (minimum-total-distance robots factories)
  (let* ([rs (list->vector (sort robots <))]
         [fs (list->vector (sort (unfold-list factories)
                                 (lambda (a b) (< (vector-ref a 0)
                                                  (vector-ref b 0)))))]
         [memo (make-hash)])
    (exact-floor
     (let loop ([i 0] [j 0] [k 0])
       (or (hash-ref memo (list i j k) #f)
           (cond ((= i (vector-length rs))
                  0)
                 ((>= j (vector-length fs))
                  +inf.0)
                 ((= k (vector-length (vector-ref fs j)))
                  (loop i (add1 j) 0))
                 (else
                  (let ([val (min
                              (loop i (add1 j) 0)
                              (+  (abs (- (vector-ref rs i)
                                          (vector-ref (vector-ref fs j) k)))
                                  (loop (add1 i) j (add1 k))))])
                    (hash-set! memo (list i j k) val)
                    val))))))))

(define (unfold-list L)
  (let loop ([L L])
    (if (null? L)
        '()
        (if (zero? (second (car L)))
            (loop (cdr L))
            (cons (make-vector (second (car L)) (first (car L)))
                  (loop (cdr L)))))))

```