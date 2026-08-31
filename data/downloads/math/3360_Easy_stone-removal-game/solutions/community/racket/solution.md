# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6076591/](https://leetcode.com/problems/stone-removal-game/solutions/6076591/)

---

```racket []
(define/contract (can-alice-win n)
  (-> exact-integer? boolean?)
  (let loop ((num n)
             (stones-to-remove 10)
             (is-alices-turn #t))
    (if (>= num stones-to-remove)
        (loop (- num stones-to-remove)
              (- stones-to-remove 1)
              (not is-alices-turn))
        (not is-alices-turn))))
```