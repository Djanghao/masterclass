# racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/2259727/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/2259727/)

---

```scheme
(define/contract (valid-subarray-size nums threshold)
  (-> (listof exact-integer?) exact-integer? exact-integer?)

  (define (count>= lst)
    (let ([stk '((-1 . -1))]
          [ret '()])
      (for ([v lst]
            [i #e1e8])
        (let ([rem (memf (lambda (x) (< (cdr x) v)) stk)])
          (set! ret (cons (- i (car (car rem)) 1) ret))
          (set! stk (cons (cons i v) rem))))
      (reverse ret)))

  (define count-before>= (count>= nums))
  (define count-after>= (reverse (count>= (reverse nums))))
  
  (let ([res -1])
    (for ([v nums]
          [c1 count-before>=]
          [c2 count-after>=])
      (when (> (+ c1 c2 1) (/ threshold v))
        (set! res (+ c1 c2 1))))
    res))
```