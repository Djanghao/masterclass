# Racket ( xor )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/3795807/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/3795807/)

---

The ascii values of the coordinates of the black squares are either both even or both odd. Perform XOR to determin if the are both odd or both even. If not, the square is white.
```
(define/contract (square-is-white coordinates)
  (-> string? boolean?)
  (let ([f (lambda (n acc) (xor acc (odd? n)))])
    (not (foldl f #t (map char->integer (string->list coordinates))))))
```