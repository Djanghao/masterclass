# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5638303/](https://leetcode.com/problems/lemonade-change/solutions/5638303/)

---

```
(define/contract (lemonade-change bills)
  (-> (listof exact-integer?) boolean?)
  (let ((correct-change? (lambda (payment register)
                           (letrec ((owe (- payment 5))
                                    (fives (car register))
                                    (tens (cadr register))
                                    (twenties (caddr register))
                                    (register-value (+ (* 5 fives)
                                                       (* 10 tens)
                                                       (* 20 twenties)))
                                    (make-change (lambda (due fives tens twenties)
                                                   (cond ((= 0 due) (cons #t (list fives
                                                                                   tens
                                                                                   twenties)))
                                                         ((and (>= due 20)
                                                               (> twenties 0)) (make-change
                                                                                (- due 20)
                                                                                fives
                                                                                tens
                                                                                (- twenties 1)))
                                                         ((and (>= due 10)
                                                               (> tens 0)) (make-change
                                                                            (- due 10)
                                                                            fives
                                                                            (- tens 1)
                                                                            twenties))
                                                         ((and (>= due 5)
                                                               (> fives 0)) (make-change
                                                                             (- due 5)
                                                                             (- fives 1)
                                                                             tens
                                                                             twenties))
                                                         (else (cons #f null))))))
                             (cond ((> owe register-value) (cons #f null))
                                   (else (make-change
                                          owe
                                          (if (= 5 payment) (+ 1 fives) fives)
                                          (if (= 10 payment) (+ 1 tens) tens)
                                          (if (= 20 payment) (+ 1 twenties) twenties))))))))
    (car (foldl
          (lambda (payment acc)
            (let ((valid (car acc))
                  (register (cdr acc)))
              (if (not valid)
                  (cons #f null) ; invalid
                  (correct-change? payment register))))
          '(#t . (0 0 0)) ; (valid? . register)
          bills))))

```