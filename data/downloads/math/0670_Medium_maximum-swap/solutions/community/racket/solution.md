# racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5928293/](https://leetcode.com/problems/maximum-swap/solutions/5928293/)

---

# Intuition
Start with the left-most digit and work to the right. If there is a digit to the right of the left digit that is higher than the left digit, then the left digit will be swapped. Swapped with what? The final occurrence of the highest digit to the right of the left digit.

# Code
```racket []
(define (maximum-swap num)
  (let ([num (number->string num)])
    (or
     (for/or ([i (in-range (string-length num))])
       (let ([val (highest-after num i)]) 
         (and val (string->number (swap num i (second val))))))
     (string->number num))))

(define (highest-after s i)
  "If there is a digit to the right of the digit at i 
that is higher than the digit at i, then return the maximum
digit after i and the final index where it appears."
  (let ([mx (list (string-ref s i) i)])
    (for ([j (in-range (add1 i) (string-length s))])
      (when (char>=? (string-ref s j) (car mx))
        (set! mx (list (string-ref s j) j))))
    (if (char>? (car mx) (string-ref s i))
        mx
        #f)))

(define (swap s a b)
"Swap the values at two indices in string S."
  (let ([tmp (string-ref s a)])
    (string-set! s a (string-ref s b))
    (string-set! s b tmp)
    s))
```