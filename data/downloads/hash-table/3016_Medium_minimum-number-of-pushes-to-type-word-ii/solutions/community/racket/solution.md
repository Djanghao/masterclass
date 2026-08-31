# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5597938/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5597938/)

---

# Code
```racket
(define/contract (char->pos c)
  (-> char? exact-integer?)
  (- (char->integer c) (char->integer #\\a)))

(define/contract (minimum-pushes word)
  (-> string? exact-integer?)
  (let ([v (make-vector 26)])
    (for ([c word])
      (vector-set! v (char->pos c) (add1 (vector-ref v (char->pos c)))))
    (vector-sort! v >)
    (for/sum ([i (in-range 26)]) (* (add1 (quotient i 8)) (vector-ref v i)))))
```