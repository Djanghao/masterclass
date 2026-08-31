# Optimal O(n) tail recursive implementation

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/4475789/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/4475789/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ (discounting the size of the output list)

# Code
```
(define (replace-elements arr)
    (define (go lst max-right acc)
        (match lst
            ['() acc]
            [(cons x xs) (go xs (max max-right x) (cons max-right acc))]))
    (go (reverse arr) -1 '()))
```