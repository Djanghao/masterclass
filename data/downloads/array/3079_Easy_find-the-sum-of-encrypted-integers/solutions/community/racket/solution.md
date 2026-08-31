# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4904935/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4904935/)

---

```
(define/contract (sum-of-encrypted-int nums)
  (-> (listof exact-integer?) exact-integer?)
  (let ((convert (lambda (num) ; int -> int
                   (let* ((char->ord (lambda (c) ; char -> int
                                       (- (char->integer c)
                                          (char->integer #\\0))))
                          (digits (map ; [int]
                                    char->ord
                                    (string->list (number->string num))))
                          (out-digits (make-list ; [int]
                                       (length digits)
                                       (apply max digits)))
                          (ord->char (lambda (ord) ; int -> char
                                       (integer->char (+ ord
                                                         (char->integer #\\0))))))
                     (string->number
                       (list->string
                         (map ord->char out-digits)))))))
    (foldl
      (lambda (num acc)
        (+ acc
           (if (< num 10)
               num
               (convert num))))
      0
      nums)))
```