# racket 0ms?

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/6027919/](https://leetcode.com/problems/type-of-triangle/solutions/6027919/)

---

# Code
```racket []
(define (triangle-type nums)
  (match-let ([(list a b c) (sort nums <)])
    (if (> (+ a b) c)
        (list-ref '("" "equilateral" "isosceles" "scalene")
                  (set-count (set a b c)))
        "none")))
```