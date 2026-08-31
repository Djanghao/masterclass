# racket - simple solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1252548/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1252548/)

---

```scheme
(define (solve-help p lst result)
  (if (< (length lst) p) result
      (solve-help p (cdr lst) (+ result (foldl + 0 (take lst p))))))

(define (solve p lst result)
  (if (< (length lst) p) result
      (solve (+ p 2) lst (+ result (solve-help p lst 0)))))

(define/contract (sum-odd-length-subarrays arr)
  (-> (listof exact-integer?) exact-integer?)
  (solve 1 arr 0))
```