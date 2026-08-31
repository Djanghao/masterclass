# racket 3ms--just follwed the hint

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008557/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008557/)

---

# Code
```racket []
(define (min-changes s)
  (for/sum ([i (in-range 0 (string-length s) 2)])
    (if (char=? (string-ref s i)
                (string-ref s (add1 i)))
        0
        1)))
```