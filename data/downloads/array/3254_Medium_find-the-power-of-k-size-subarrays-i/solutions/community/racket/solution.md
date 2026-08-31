# racket 3ms: running total of consecutive elements

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6052235/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6052235/)

---

# Intuition
Keep track of the number of consecutive elements counting down from the end of the window. Update at each iteration. If the number of consecutive elements equals k, the result is the most recent one added, otherwise -1.

# Code
```racket []
(define (results-array nums k)
  (let* ([L (list->vector nums)]
         [consec (let loop ([i (- k 2)] [c 1])
                   (cond ((<= i 0) c)
                         ((not (= (vector-ref L i)
                                  (add1 (vector-ref L (sub1 i)))))
                          c)
                         (else (loop (sub1 i) (add1 c)))))])
    (for/list ([i (in-range (sub1 k) (vector-length L))])
      (let ([cur (vector-ref L i)]
            [prev (if (zero? i) -inf.0 (vector-ref L (sub1 i)))])
        (set! consec (if (= cur (add1 prev))
                         (if (< consec k)
                             (add1 consec)
                             consec)
                         1))
        (if (>= consec k)
            cur
            -1)))))

```