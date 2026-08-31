# Simple Pattern Match

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3421922/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3421922/)

---

# Intuition

The order of existed characters will be remained. We try to insert characters between two existed characters greedy based on some rules. 

# Approach

just pattern match based on 9 cases.

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(1)$

# Code
```
(define/contract (add-minimum word)
  (-> string? exact-integer?)

  (define prevc #\\c)
  (define cnt 0)
  (for ([c word])
    (set! cnt
          (+ cnt
             (match* (prevc c)
               [(#\\a #\\a) 2]
               [(#\\b #\\a) 1]
               [(#\\c #\\a) 0]
               [(#\\a #\\b) 0]
               [(#\\b #\\b) 2]
               [(#\\c #\\b) 1]
               [(#\\a #\\c) 1]
               [(#\\b #\\c) 0]
               [(#\\c #\\c) 2])))
    (set! prevc c))
  (+ cnt
     (match (string-ref word (sub1 (string-length word)))
       [#\\a 2]
       [#\\b 1]
       [#\\c 0])))

```

# More

It's possible to summary the math in the code and get the formula.
