# Simple O(n) space, O(n) time solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4489362/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4489362/)

---

# Code
```
(define (my-remove st x)
    (if (set-member? st x) (set-remove st x) st))

(define (find-disappeared-numbers nums)
    (let loop ([lst nums] [res (list->set (inclusive-range 1 (length nums)))])
        (match lst
            ['() (set->list res)]
            [(cons x xs) (loop xs (my-remove res x))])))
```