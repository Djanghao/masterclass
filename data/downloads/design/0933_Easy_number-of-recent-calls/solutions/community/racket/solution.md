# Racket with dropf-right and mutation

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/4010868/](https://leetcode.com/problems/number-of-recent-calls/solutions/4010868/)

---

# Approach
This isn't particularly Racket-y, but it'll do.

In order to filter out the time range, dropf-right works nicely

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define recent-counter%
  (class object%
    (super-new)
    (init-field
     [requests '()]
     [time-range '()])
    ; ping : exact-integer? -> exact-integer?
    (define/public (ping t)
      (set! time-range (list (- t 3000) t))
      (set! requests
            (dropf-right (cons t requests) (\u03BB (r) (not (and (>= r (first time-range))
                                                            (<= r (last time-range)))))))
      (length requests))))

```