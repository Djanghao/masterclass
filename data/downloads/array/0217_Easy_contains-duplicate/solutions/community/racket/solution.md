# One-line Racket solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/4262245/](https://leetcode.com/problems/contains-duplicate/solutions/4262245/)

---


# Code
```
(define (contains-duplicate nums)
  (not (= (length nums) (set-count (list->set nums)))))
```