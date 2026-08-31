# Finite automaton solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2569432/](https://leetcode.com/problems/utf-8-validation/solutions/2569432/)

---

Most pattern match problem can be reduced to a finite automaton, which more easy to process correctly and fast.

Graph

![](./images/0.png)

In the graph, number in square means states, numbers on line means prefix.
We use number `0` to denote both states `start` and `success` (they can be merged).
By choose appropriate state number, code can be simplified a lot.
But here I only give the original implementation.

```scheme
(define/contract (valid-utf8 data)
  (-> (listof exact-integer?) boolean?)

  (define (p0 bits) (= #b00000000 (bitwise-and bits #b10000000)))
  (define (p1 bits) (= #b10000000 (bitwise-and bits #b11000000)))
  (define (p2 bits) (= #b11000000 (bitwise-and bits #b11100000)))
  (define (p3 bits) (= #b11100000 (bitwise-and bits #b11110000)))
  (define (p4 bits) (= #b11110000 (bitwise-and bits #b11111000)))

  (define (match-utf8 data st)
    (match* (st data)
      [(0 '()) #t]
      [(0 (list* (? p0) rem)) (match-utf8 rem 0)]
      [(0 (list* (? p2) rem)) (match-utf8 rem 1)]
      [(0 (list* (? p3) rem)) (match-utf8 rem 2)]
      [(0 (list* (? p1) rem)) (match-utf8 rem 3)]
      [(1 (list* (? p1) rem)) (match-utf8 rem 0)]
      [(2 (list* (? p1) rem)) (match-utf8 rem 1)]
      [(3 (list* (? p1) rem)) (match-utf8 rem 2)]
      [(_ _) #f]))

  (match-utf8 data 0))

```