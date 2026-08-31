# racket 3ms: inchworm sliding window

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/6056487/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/6056487/)

---

# Code
```racket []
(define (min-sub-array-len target nums)
  (let* ([nums (list->vector nums)]
         [N (vector-length nums)])
    (let loop ([l 0] [r 0] [sum 0] [ans (add1 N)])
      (cond [(>= sum target)
             (loop (add1 l) r (- sum (vector-ref nums l)) (min ans (- r l)))]
            [(= r N)
             (if (= ans (add1 N)) 0 ans)]
            [else
             (loop l (add1 r) (+ sum (vector-ref nums r)) ans)]))))
```