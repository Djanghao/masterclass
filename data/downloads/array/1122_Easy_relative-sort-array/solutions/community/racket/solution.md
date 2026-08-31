# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5292512/](https://leetcode.com/problems/relative-sort-array/solutions/5292512/)

---

```
(define/contract (relative-sort-array arr1 arr2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  (let ((sort-fn (lambda (a b)
                   (let ((get-pos (lambda (a)
                                    (let ((pos (index-of arr2 a)))
                                      (if pos pos (+ a 1001))))))
                     (< (get-pos a)
                        (get-pos b))))))
    (sort arr1 sort-fn)))
```