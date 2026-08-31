# Racket ( scan ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4819485/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4819485/)

---

# Approach

A `scan` higher-order function can be used with the addition function to provide a running sum as we move through the list. The number of zeroes (ant on the boundary) in the resulting list can be counted to provide the result.

**Note**:  Racket does not provide `scan` as a primitive function (although one is provided in the [Algorithms](https://docs.racket-lang.org/algorithms/index.html#%28def._%28%28lib._algorithms%2Fmain..rkt%29._scanl%29%29) package), so I had to write one here.


# Code
```
; scan :: (T -> T -> U) -> [T] -> [U]
(define (scanl f lst)
  (foldl
    (lambda (a acc) 
      (if (null? acc) (append acc (list a))
          (append acc (list (f (last acc) a)))))
    '()
    lst))


(define/contract (return-to-boundary-count nums)
  (-> (listof exact-integer?) exact-integer?)
  (count zero? (scanl + nums)))
```