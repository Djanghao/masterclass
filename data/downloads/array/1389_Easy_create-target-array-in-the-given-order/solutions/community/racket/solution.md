# Foldl

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/3209000/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/3209000/)

---

# Intuition
Just use insert at.

# Approach
There no insert in Racket so implemented manually.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
(define/contract (create-target-array nums index)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
   (foldl (lambda (pos x result) (insert-at result pos x))
          '()
          index
          nums))
(define (insert-at lst pos x)
  (define-values (before after) (split-at lst pos))
    (append before (cons x after)))

```