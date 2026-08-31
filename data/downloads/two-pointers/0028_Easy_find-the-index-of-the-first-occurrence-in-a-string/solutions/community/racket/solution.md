# Fast, 6-line simple solution using pattern matching

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/4489336/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/4489336/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
(define (str-str haystack needle)
    (let loop ([left 0] [right (string-length needle)])
        (if (> right (string-length haystack)) -1
        (match (substring haystack left right)
            [(? (lambda (sub) (equal? sub needle))) left]
            [_ (loop (add1 left) (add1 right))]))))
```