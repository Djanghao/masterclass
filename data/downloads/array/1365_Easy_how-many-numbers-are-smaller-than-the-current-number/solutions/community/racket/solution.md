# Declarative programming magic

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/3169835/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/3169835/)

---

# Intuition
I've heard somewhere that the declarative paradigm is a reflection of human mind, and imperative one is a reflection of underlying machine structure. However I feel it like the magic: ~10 words + ~14 parenthesis and it works. I understand on high level how it works but does not feel it like imperative one. Yeah, it's a magic.

# Approach
Map the list into `lists:count` using two lambdas.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
(define/contract (smaller-numbers-than-current nums)
  (-> (listof exact-integer?) (listof exact-integer?))
    (define enum (map cons (sequence->list (in-range 0 (length nums))) nums))
     (map (\u03BB (i) (count (\u03BB (j) (> i j)) nums)) nums)
  )
```