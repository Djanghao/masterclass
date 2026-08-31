# Racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1888690/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1888690/)

---

The input is too large (`queries[i] <= 10^9`). we should find the formula.
In this solution, we count the first half of a palindrome, then expand it, append it into the results.

```scheme
(define/contract (kth-palindrome queries intLength)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))

  (let* ([base (quotient (- intLength 1) 2)]
         [first (expt 10 base)]
         [results null])
    (for ([v queries])
      (let ([ret (if (> v (* first 9))
                   -1
                   (first-half->palindrome (+ first v -1) intLength))])
        (set! results (cons ret results))))
    (reverse results)))

;; helpers ;;

(require srfi/13)

(define (first-half->palindrome x n)
  (let ([last-half (if (even? n)
                     x
                     (quotient x 10))])
    (if (= last-half 0) x
      (string->number
        (string-append (number->string x)
                       (string-reverse (number->string last-half)))))))
```