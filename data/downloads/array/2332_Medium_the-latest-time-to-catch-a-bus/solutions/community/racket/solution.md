# Racket recursive emulation

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2260109/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2260109/)

---

`last-time` should always less than the current passenger arrival time.

```scheme
(define/contract (latest-time-catch-the-bus buses passengers capacity)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? exact-integer?)

  (define (rec last-time last-passenger cap buses passengers)
    (cond [(null? buses) ; no bus
           last-time]
          [(= cap capacity) ; current bus is full
           (rec last-time last-passenger 0 (cdr buses) passengers)]
          [(> (car passengers) (car buses)) ; current passenger can't catch current bus
           (let ([last-time (if (> (car buses) last-passenger)
                                (car buses) ; you can catch when bus arrived
                                last-time)]) ; you can't
             (rec last-time last-passenger 0 (cdr buses) passengers))]
          [else ; current passenger catched current bus
           (let ([last-time (if (> (car passengers) (add1 last-passenger))
                                (sub1 (car passengers)) ; you can catch before current passenger
                                last-time)]) ; you can't
             (rec last-time (car passengers) (add1 cap) buses (cdr passengers)))]))

  (let ([max-time (apply max buses)])
    (rec 0 0 0 (sort buses <)
         (append (sort passengers <)
                 (list (add1 max-time))))))
```