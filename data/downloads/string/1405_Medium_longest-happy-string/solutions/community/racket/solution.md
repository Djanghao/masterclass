# 195ms greedy approach

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-string/solutions/5919073/](https://leetcode.com/problems/longest-happy-string/solutions/5919073/)

---

# Code
```racket []
(define (longest-diverse-string a b c)
  (let loop ([ct (list (cons "a" a)
                       (cons "b" b)
                       (cons "c" c))]
             [res ""])
    (let ([ct (sort ct (lambda (a b) (> (cdr a) (cdr b))))])
      (cond ((andmap (lambda (x) (zero? (cdr x))) ct)
             res)
            ((or (< (string-length res) 2)
                 (not (string=? (string-append (caar ct) (caar ct))
                                (substring res 0 2))))
             (loop (cons (cons (caar ct) (sub1 (cdar ct))) (cdr ct))
                   (string-append (caar ct) res)))
            ((string=? (string-append (caar ct) (caar ct))
                       (substring res 0 (min 2 (string-length res))))
             (if (zero? (cdadr ct))
                 res
                 (loop (list (first ct)
                             (cons (car (second ct))
                                   (sub1 (cdr (second ct))))
                             (third ct))
                       (string-append (car (second ct)) res))))))))
```