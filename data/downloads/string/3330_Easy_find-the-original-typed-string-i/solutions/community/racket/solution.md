# 148ms racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5991080/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5991080/)

---

# Code
```racket []
(define (possible-string-count word)
  (let loop ([i     0]
             [prev  (string-ref word 0)]
             [total 0])
    (if (= i (string-length word))
        total
        (let ([cur (string-ref word i)])
          (loop (add1 i) cur (+ total (if (char=? cur prev) 1 0)))))))
```