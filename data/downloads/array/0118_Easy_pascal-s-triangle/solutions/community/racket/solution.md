# Simple Racket solution

**Author:** lgeorgiev
**Votes:** 2
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/3031455/](https://leetcode.com/problems/pascals-triangle/solutions/3031455/)

---

# Intuition
You can directly calculate the value in the i-th row at index j
by the formula for combinations of (i-1) from j elements.

# Approach
Define helper function *nCr* calculating combinations of **R** from **N** elements. Define helper function *fact* calculating the factiorial on **N**

# Complexity
- Time complexity:
O(N^3)

# Like and follow me in Linkedin if I was helpfull
#### https://www.linkedin.com/in/lyuben-georgiev/

# Code
```
(define (generate numRows)
    (define (fact n)
        (if (zero? n) 1 (* n (fact (sub1 n))))
      )
    (define (nCr n r)
        (quotient (foldl (lambda (x res) (* x res)) 1 (range (add1 r) (add1 n))) (fact (- n r)))
      )
    (map (lambda (i) (map (lambda (j) (nCr i j)) (range 0 (add1 i)))) (range 0 numRows))
  )
```