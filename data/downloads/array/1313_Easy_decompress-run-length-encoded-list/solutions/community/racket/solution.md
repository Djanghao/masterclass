# racket - simple solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/1252445/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/1252445/)

---

```scheme
(define (solve lst result)
  (if (= 0 (length lst)) result
      (let ([freq (car lst)]
            [val (cadr lst)])
        (solve (cddr lst) (append result (make-list freq val))))))

(define/contract (decompress-rl-elist nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  (solve nums (list)))
```