# O(n) time, O(1) space

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/4507149/](https://leetcode.com/problems/find-pivot-index/solutions/4507149/)

---

# Intuition
Keep a running sum of the left `sl` and a running sum of the right `sr`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define (pivot-index nums)
  (let loop ([l nums] [i 0] [sl 0] [sr (apply + (cdr nums))])
    (match l
        ['() -1]
        [(list x) #:when (not (zero? sl)) -1]
        [_ #:when (= sl sr) i]
        [(cons x xs) (loop xs (add1 i) (+ sl x) (- sr (car xs)))])))
```