# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/5001173/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/5001173/)

---

```
(define/contract (max-sum nums)
  (-> (listof exact-integer?) exact-integer?)
  (let* ((get-max-digit (lambda (num)
                          (apply max
                            (map
                             char->integer
                             (string->list (number->string num))))))
         (max-digit-map (map ; (num . max-digit)
                         (lambda (num)
                           (cons num (get-max-digit num)))
                         nums))
         (max-digits (remove-duplicates (map cdr max-digit-map)))
         (get-largest-pair (lambda (lst)
                             (take (sort lst >) 2))))
    (foldl
     (lambda (digit max-pair-sum-so-far)
       (let ((nums-with-max-digit (filter-map
                                   (lambda (p)
                                     (and (= digit (cdr p))
                                          (car p)))
                                   max-digit-map)))
         (max (if (> (length nums-with-max-digit) 1)
                  (apply + (get-largest-pair nums-with-max-digit))
                  -1)
              max-pair-sum-so-far)))
     -1
     max-digits)))
```