# Racket with Floating Point Damping

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-three/solutions/1777028/](https://leetcode.com/problems/power-of-three/solutions/1777028/)

---

This solution uses basic math:

n = 3^x iff log_3 n = x
n is divisible by 3 if x is also an integer

The solution below applies a damping effect on the result. This way if we get a value back like 4.9999999999999, we can coerce it to 5.

It does this by checking if the floating point returned is within some threshold (a very small threshold based on the length of the input value) and if it is, rounding to the integer.

```
(define (count-digits n)
  (+ 1 (floor (/ (log n) (log 10)))))

(define (damping-log n base)
  (let* ([log-result (log n base)]
         [result (inexact->exact (round log-result))])
    (if (< (- (ceiling log-result) log-result)
           (expt 10 (- (+ (count-digits n) 3))))
        result
        log-result)))

(define (is-power-of-three n)
  (and (> n 0)
       (integer? (damping-log n 3))))
```

And here is the clever/popular answer in the comments that doesn't use log:

```
(define (is-power-of-three n)
  (and (> n 0)
       (= 0 (remainder (expt 3 19) n))))
```