# racket succing

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5971741/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5971741/)

---

# Intuition
If the remainder of the sum of the row number and column number divided by 2 is the same, then they are on the same square. It so happens that the character codes for the digits and letters fall into the same odd/even pattern.

# Code
```racket []
(define (check-two-chessboards a b)
  (match-let ([(list a b c d)
               (map char->integer (string->list (string-append a b)))])
    (and (= (remainder (+ a b) 2)
            (remainder (+ c d) 2)))))
```