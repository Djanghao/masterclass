# A small interpreter in racket

**Author:** 6cdh
**Votes:** 2
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/2048344/](https://leetcode.com/problems/parse-lisp-expression/solutions/2048344/)

---

This small interpreter parse the input string into S-expr, then interpret (evaluate) it.

```
parser -> evaluater
```

Here I wrote two solutions.
The first use Racket builtin reader. The second use hand-written parser.

Solution with Racket builtin S-expr reader

```scheme
(define/contract (evaluate expression)
  (-> string? exact-integer?)
  ; builtin-functions
  (eval-form (list (cons 'add (lambda (x y) (+ x y)))
                   (cons 'mult (lambda (x y) (* x y))))
             (expr->form expression)))

;; parser ;;

; use Racket builtin reader
(define (expr->form s)
  (read (open-input-string s)))

;; evaluator ;;

(define (eval-form env form)
  (cond [(number? form) form]
        [(symbol? form) (env-get env form)]
        [(eq? (car form) 'let) (eval-let env form)]
        [else (eval-call env form)]))

(define (env-get env symbol)
  (cdr (assq symbol env)))

(define (eval-let env form)
  (define (rec env form)
    (if (null? (cdr form)) (eval-form env (car form))
        (rec (cons (cons (car form) (eval-form env (cadr form)))
                   env)
             (cddr form))))
  (rec env (cdr form)))

(define (eval-call env form)
  (apply (eval-form env (car form))
         (map (lambda (f) (eval-form env f))
              (cdr form))))
```

A hand-written parser (copy paste to replace `expr->form` procedure above)

```scheme
(define (expr->form s)
  (result.form (read-expr (string->list s))))

; expr = list | atom
(define (read-expr lst)
  (let ([rl (read-list lst)])
    (if rl rl (read-atom lst))))

; list = "(", expr+, ")"
(define (read-list lst)
  (if (or (null? lst)
          (not (char=? (car lst) #\\()))
      (make-empty-result)
      (let ([res (repeat+ (cdr lst) read-expr)])
        (make-result (ignore-space (cdr (member #\\) (result.remain res))))
                     (result.form res)))))

; atom = char+, delimiter
; delimiter = " " | ")"
(define (read-atom lst)
  (let-values ([(atom remain)
                (splitf-at lst (lambda (c)
                                 (not (or (char=? c #\\space)
                                          (char=? c #\\))))))])
    (if (null? atom)
        (make-empty-result)
        (make-result (ignore-space remain)
                     (transform-atom (list->string atom))))))

(define (transform-atom atom)
  (if (pair? atom)
      (map transform-atom atom)
      (if (char-lower-case? (string-ref atom 0))
          (string->symbol atom)
          (string->integer atom))))

; result data structure ;

(define (make-result lst form) (cons form lst))

(define (make-empty-result) #f)

(define (result-empty? res)
  (eq? res #f))

(define (result.remain res)
  (if (pair? res)
    (cdr res)
    #f))

(define (result.form res)
  (if (pair? res)
    (car res)
    #f))

; helpers ;

; one or multiple repeats
(define (repeat+ lst read1)
  (define (next lst res)
    (if (null? lst)
        (make-result lst (reverse res))
        (let ([r (read1 lst)])
          (if (result-empty? r)
            (make-result lst (reverse res))
            (next (result.remain r) (cons (result.form r) res))))))
  (next lst '()))

(define (ignore-space lst)
  (if (and (not (null? lst)) 
           (char=? (car lst) #\\space))
      (cdr lst)
      lst))

(define (string->integer s)
  (define (char->int c)
    (- (char->integer c)
       (char->integer #\\0)))

  (define (list->positive lst)
    (for/fold ([int 0])
              ([c lst])
      (+ (* int 10) (char->int c))))

  (let ([lst (string->list s)])
    (if (char=? #\\- (car lst)) 
        (- (list->positive (cdr lst)))
        (list->positive lst))))
```