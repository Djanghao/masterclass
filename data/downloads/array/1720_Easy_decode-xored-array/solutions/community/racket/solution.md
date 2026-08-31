# Using scanl (recursive)

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/3207507/](https://leetcode.com/problems/decode-xored-array/solutions/3207507/)

---

# Intuition
Using scanl.

# Approach
It's strange that even C++ have `scanl` analog - `inclusive_scan` or `exclusive_scan` but no in Racket and Erlang.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define/contract (decode encoded first1)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  (scanl bitwise-xor first1 encoded))
(define (scanl func acc xs)
  (if (empty? xs) (list acc) 
  (cons acc (scanl func (func acc (first xs)) (rest xs)))))
```