# Racket - dynamic programming solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/1250594/](https://leetcode.com/problems/jump-game-ii/solutions/1250594/)

---

```scheme
(define (init-vec len)
  (let ([prepare-vec (make-vector len 99999)])
    (begin (vector-set! prepare-vec 0 0) prepare-vec)))

(define (set-cost! vec p elem)
  (if (= elem 0) vec
      (let* ([p-cost (vector-ref vec p)]
             [now-cost (add1 p-cost)]
             [target-cost (vector-ref vec (+ p elem))])
        (begin (vector-set! vec (+ p elem) (min now-cost target-cost))
               (set-cost! vec p (- elem 1))))))

(define (simple-dp cache p steps)
  (if (= 0 (length steps)) (vector-ref cache (- p 1))
      (simple-dp (set-cost! cache p (car steps)) (add1 p) (cdr steps))))

(define (start-dp steps) (simple-dp (init-vec 200000) 0 steps))

(define/contract (jump nums)
  (-> (listof exact-integer?) exact-integer?)
  (start-dp nums))
```