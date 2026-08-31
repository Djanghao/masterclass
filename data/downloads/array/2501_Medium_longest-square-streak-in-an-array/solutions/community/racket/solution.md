# racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5979128/](https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5979128/)

---

# Code
```racket []
(define (longest-square-streak nums)
  (let ([nums (list->set nums)]
        [best 0])
    (for ([n nums])
      (set! best (max best
                      (add1
                       (let loop ([cur n])
                         (if (set-member? nums (* cur cur))
                             (add1 (loop (* cur cur)))
                             0))))))
    (if (= best 1) -1 best)))
```