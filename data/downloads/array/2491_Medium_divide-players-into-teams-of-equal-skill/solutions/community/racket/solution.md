# 344ms - sort array, then pointer at beginning and pointer at end...

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5922388/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5922388/)

---

# Intuition
Sort the array into a vector. Put pointers at the beginning and end of the vector. Move the pointers toward each other. If ever the sum of the values at the pointers is not equal to the sum of the first and last elements, return -1. Otherwise keep a sum of the product of the values at the pointers.

# Code
```racket []
(define (divide-players skill)
  (let* ([L (list->vector (sort skill <))]
         [c (+ (vector-ref L 0) (vector-ref L (sub1 (vector-length L))))]
         [res 0])
    (if
     (for/and ([left (in-range 0 (/ (vector-length L) 2))]
               [right (in-range (sub1 (vector-length L)) -1 -1)])
       (let ([a (vector-ref L left)]
             [b (vector-ref L right)])
         (set! res (+ res (* a b)))
         (eq? c (+ a b))))
     res
     -1)))

```