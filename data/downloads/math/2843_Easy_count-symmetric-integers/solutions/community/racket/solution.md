# Racket solution ( functional )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/4885929/](https://leetcode.com/problems/count-symmetric-integers/solutions/4885929/)

---

```
(define/contract (count-symmetric-integers low high)
  (-> exact-integer? exact-integer? exact-integer?)
  (let* ((char->value (lambda (c) (- (char->integer c) 48)))
         (char-sum (lambda (lst)
                     (foldl
                        (lambda (c acc) (+ acc (char->value c)))
                        0
                        lst)))
         (is-symmetric? (lambda (a)
                          (let* ((chars (string->list (number->string a)))
                                 (len (length chars)))
                            (if (odd? len)
                              false
                              (= (char-sum (take chars (/ len 2)))
                                 (char-sum (drop chars (/ len 2)))))))))
    (count
      (lambda (n)
        (is-symmetric? n))
      (range low (add1 high)))))
```