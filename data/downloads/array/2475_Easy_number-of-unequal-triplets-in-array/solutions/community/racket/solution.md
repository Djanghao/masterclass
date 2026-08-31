# racket 130ms, verbose but efficient

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5979547/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5979547/)

---

# Code
```racket []
(define (unequal-triplets nums)
  (let ([nums (list->vector nums)])
    (let loop ([i 0] [j 1] [k 2])
      (cond ((= i (vector-length nums))
             0)
            ((= j (vector-length nums))
             (loop (add1 i) (+ i 2) (+ i 3)))
            ((= k (vector-length nums))
             (loop i (add1 j) (+ 2 j)))
            ((= (vector-ref nums i) (vector-ref nums j))
             (loop i (add1 j) (+ 2 j)))
            (else
             (+ (if (and (not (= (vector-ref nums i)
                                 (vector-ref nums j)))
                         (not (= (vector-ref nums i)
                                 (vector-ref nums k)))
                         (not (= (vector-ref nums j)
                                 (vector-ref nums k))))
                    1
                    0)
                (loop i j (add1 k))))))))
```