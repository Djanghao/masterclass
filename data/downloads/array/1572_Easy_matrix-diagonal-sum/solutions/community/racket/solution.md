# Racket with math/matrix

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/1826581/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/1826581/)

---

The idea here:
1. convert input arr into matrix data structure
2. take the sum of the diagonal (the trace) and the diagonal of the mirror'ed (each sublist is reversed) matrix
3. if n is odd (nxn matrix) then subtract the center element from the sum, otherwise subtract 0 if n is even

```
(require (only-in math/matrix matrix matrix-num-cols matrix-trace matrix-ref list->matrix))

(define (ls->mat ls)
  (let ([side-len (length ls)])
    (list->matrix side-len side-len (flatten ls))))

(define (get-odd-center-element m)
  (if (odd? (matrix-num-cols m))
      (let ([mid (floor (/ (matrix-num-cols m) 2))])
        (matrix-ref m mid mid))
      0))

(define (diagonal-sum mat)
  (if (= (length mat) 1)
      (caar mat)
      (let ([mat (ls->mat mat)]
            [rev-mat (ls->mat (map reverse mat))])
        (- (+ (matrix-trace mat)
              (matrix-trace rev-mat))
           (get-odd-center-element mat)))))
```