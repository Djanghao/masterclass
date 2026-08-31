# Racket Binary Search

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/4126565/](https://leetcode.com/problems/find-peak-element/solutions/4126565/)

---

# Intuition
This is a translation from a python solution I saw. It uses binary search, but first it converts the input list to a vector to provide constant index lookup.

# Code
```
(define (find-peak-element nums)
  (let ([nums (list->vector nums)])
    (let loop ([lhs 0]
               [rhs (sub1 (vector-length nums))])
    (cond [(>= lhs rhs) rhs]
          [else
           (let ([mid (quotient (+ lhs rhs) 2)])
             (if (> (vector-ref nums mid)
                    (vector-ref nums (add1 mid)))
                 (loop lhs mid)
                 (loop (add1 mid) rhs)))]))))

```