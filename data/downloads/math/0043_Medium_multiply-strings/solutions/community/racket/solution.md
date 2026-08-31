# Racket Solution

**Author:** imakira
**Votes:** 0
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/3991939/](https://leetcode.com/problems/multiply-strings/solutions/3991939/)

---

# Code
```
(define (map-safe fn #:filler (filler '()) . lst)
  (let* ((args (let loop ((lst lst)
                          (cars '())
                          (noempty? false)
                          (cdrs '()))
                 (if (null? lst)
                     (list (reverse cars) noempty? (reverse cdrs))
                     (loop 
                      (cdr lst)
                      (cons (if (null? (car lst))
                                filler
                                (caar lst))
                            cars)
                      (or noempty?
                          (not (null? (car lst)))) 
                      (cons (if (null? (car lst))
                                '()
                                (cdar lst))
                            cdrs))))))
    (if (second args)
        (cons (apply  fn (first args))
              (apply map-safe #:filler filler fn (third args)))
        '())))

(define BASE (char->integer #\\0))

(define (__process-carry lst)
  (let loop ((lst lst)
             (carry 0))
    (if (null? lst)
        (if (not (= carry 0))
            (loop (list carry) 0)
            '())
        (let ((current (+ carry (car lst))))
          (if (>= current 10)
              (cons (remainder current 10)
                    (loop (cdr lst)
                          (quotient current 10)))
              (cons current
                    (loop (cdr lst)
                          0)))))))

(define  (string->number-list str)
  (map (lambda (s)
         (- (char->integer s) BASE))
       (string->list str)))

(define (__number-list+ . lsts)
  (__process-carry (apply map-safe + #:filler 0 lsts)))

(define (__number-list<< lst1 count)
  (if (= count 0)
      lst1
      (cons 0 (__number-list<< lst1 (sub1 count)))))

(define (__number-list* lst x)
  (__process-carry (map (lambda (a) (* a x)) lst)))

(define (multiply num1 num2)
  (let* ((lst1 (reverse (string->number-list num1)))
         (lst2 (reverse (string->number-list num2)))
         (ans (string-join
               (map number->string
                    (dropf
                     (reverse
                      (apply __number-list+
                             (for/list ((l lst2)
                                        (i (range 0 (length lst2))))
                               (__number-list<< (__number-list* lst1 l) i))))
                     (lambda (a) (= a 0))))
               "")))
    (if (equal? ans "")
        "0"
        ans)))


```