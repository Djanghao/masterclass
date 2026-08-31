# Racket || Simple brute force solution

**Author:** sunfl4wer
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/3267148/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/3267148/)

---

```
(define/contract (is-sum-equal firstWord secondWord targetWord)
  (-> string? string? string? boolean?)
    (= (+ (my-sum firstWord) (my-sum secondWord)) (my-sum targetWord))
  )

(define (my-sum lst)
 (string->number (sum (string->list lst))))

(define (sum lst)
  (if (empty? lst)
      ""
      (string-append (number->string (char-index (first lst))) (sum (rest lst)))
   )
)
  
(define (char-index c)
  (- (char->integer c) (char->integer #\\a)))
  ```