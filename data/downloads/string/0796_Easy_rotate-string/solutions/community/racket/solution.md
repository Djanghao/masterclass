# racket 0ms?

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-string/solutions/6002709/](https://leetcode.com/problems/rotate-string/solutions/6002709/)

---


# Code
```racket []
(define/contract (rotate-string s goal)
  (-> string? string? boolean?)
  (for/or ([i (string-length s)])
    (string=? goal
              (string-append (substring s i) (substring s 0 i)))))
```