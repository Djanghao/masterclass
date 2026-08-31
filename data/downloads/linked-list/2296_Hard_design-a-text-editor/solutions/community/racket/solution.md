# Racket two list solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2112445/](https://leetcode.com/problems/design-a-text-editor/solutions/2112445/)

---

Use two list.

```scheme
(define text-editor%
  (class object%
    (super-new)

    (init-field [-before '()]
                [-after '()])

    (define-syntax-rule (movek from to k)
      (let ([real-move 0])
        (for ([_ k])
          (when (not (null? from))
            (set! to (cons (car from) to))
            (set! from (cdr from))
            (set! real-move (add1 real-move))))
        real-move))

    (define (take10 lst)
      (let loop ([lst lst]
                 [cnt 10])
        (if (or (null? lst) (= cnt 0)) '()
            (cons (car lst)
                  (loop (cdr lst) (sub1 cnt))))))

    ; add-text : string? -> void?
    (define/public (add-text text)
      (let ([text (string->list text)])
        (movek text -before (length text))))

    ; delete-text : exact-integer? -> exact-integer?
    (define/public (delete-text k)
      (let ([deleted '()])
        (movek -before deleted k)))

    ; cursor-left : exact-integer? -> string?
    (define/public (cursor-left k)
      (movek -before -after k)
      (list->string (reverse (take10 -before))))

    ; cursor-right : exact-integer? -> string?
    (define/public (cursor-right k)
      (movek -after -before k)
      (list->string (reverse (take10 -before))))))
```