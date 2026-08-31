# racket 0ms?

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/6024472/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/6024472/)

---

# Code
```racket []
(define (max-good-number nums)
  (apply max
         (map (compose bin->dec (lambda (x) (apply string-append x)))
              (permutations (map (lambda (x) (format "~b" x)) nums)))))

(define (bin->dec s)
  (let loop ([i (sub1 (string-length s))] [power 0] [cur 0])
    (if (negative? i)
        cur
        (loop (sub1 i) (add1 power) (+ cur (if (char=? (string-ref s i) #\\1)
                                               (expt 2 power)
                                               0))))))
```