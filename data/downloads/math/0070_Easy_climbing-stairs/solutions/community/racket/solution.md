# Racket Solution Time Limit Exceeded

**Author:** phoe6
**Votes:** 1
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/1134283/](https://leetcode.com/problems/climbing-stairs/solutions/1134283/)

---

```
(define/contract (climb-stairs n)
  (-> exact-integer? exact-integer?)
  (cond ((< 2 n) (+ (climb-stairs (- n 1)) (climb-stairs (- n 2))))
        ((= n 2) 2)
        ((= n 1) 1)
        (else 0)))
```

What is wrong here? Why is this giving me Time Limit Exceeded?