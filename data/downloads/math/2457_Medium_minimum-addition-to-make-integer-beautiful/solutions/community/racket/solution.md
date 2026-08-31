# racket (0ms?) without converting to string

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5979677/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5979677/)

---

# Code
```racket []
(define (make-integer-beautiful n target)
  (- (let loop ([cur n] [power 1])
       (if (<= (digit-sum cur) target)
           cur
           (loop (next-zero cur power) (add1 power))))
     n))

(define (digit-sum n)
  (let loop ([cur n])
    (if (zero? cur)
        0
        (let-values ([(a b) (quotient/remainder cur 10)])
          (+ b (loop a))))))

(define (next-zero n power)
  (* (expt 10 power) (ceiling (/ (add1 n) (expt 10 power)))))
```