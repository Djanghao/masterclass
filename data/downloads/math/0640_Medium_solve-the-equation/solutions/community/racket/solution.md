# Reduce the expressions

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/5838057/](https://leetcode.com/problems/solve-the-equation/solutions/5838057/)

---

# Intuition
Split the string on the "=", then run an auxiliary function that reduces each expression. The auxiliary function returns a list of the sum of coefficients of x and the sum of the standalone numbers. Then just subtract and divide.


# Code
```racket []
(define (solve-equation equation)
  (match-let* ([(list a b) (string-split equation "=")]
               [(list lx ln) (reduce-eq a)]
               [(list rx rn) (reduce-eq b)]
               [left (- lx rx)]
               [right (- rn ln)])
    (print (list a b lx ln rx rn))
    (if (zero? left)
        (if (zero? right) "Infinite solutions" "No solution")
        (format "x=~a" (/ right left)))))

(define (reduce-eq s)
  (let ([xs (regexp-match* #px"(-*\\\\d*)x" s)]
        [nums (regexp-match* #px"-?\\\\d+(?!x|\\\\d)" s)])
    (list
     (apply + (map (lambda (x)
                     (let ([ss (regexp-replace "x" x "")])
                       (cond ((string=? ss "") 1)
                             ((string=? ss "-") -1)
                             (else (string->number ss)))))
                   xs))
     (apply + (map string->number nums)))))
```