# 93ms, faster than regex

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5993651/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5993651/)

---

# Code
```racket []
(define (make-fancy-string s)
  (apply string
         (let loop ([i 0] [prev1 #\\.] [prev2 #\\.])
           (if (= i (string-length s))
               '()
               (if (char=? (string-ref s i) prev1 prev2)
                   (loop (add1 i) (string-ref s i) prev1)
                   (cons (string-ref s i)
                         (loop (add1 i) (string-ref s i) prev1)))))))
```