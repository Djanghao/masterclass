# List comprehension and Euclidean distance

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3182598/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3182598/)

---

# Intuition
Check Eucledean distance.

# Approach
- `check` - checking if point inside circle;
- `number_of_hits` - sum up the quantity of hits;
- finally traverse through list of queries.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
(define/contract (count-points points queries)
  (-> (listof (listof exact-integer?)) 
      (listof (listof exact-integer?)) 
        (listof exact-integer?))
  (for/list ([q queries]) (number_of_hits q points)))
(define (sq x) (* x x))
(define (check? circle point)
  (let ([xr (list-ref circle 0)]
        [yr (list-ref circle 1)]
        [r (list-ref circle 2)]
        [x (list-ref point 0)]
        [y (list-ref point 1)])
  (<= (+ (sq(- x xr)) (sq(- y yr))) (sq r))))
(define (number_of_hits query points)
  (apply + 
    (for/list ([point points]
               #:when (check? query point)) 1)))
```