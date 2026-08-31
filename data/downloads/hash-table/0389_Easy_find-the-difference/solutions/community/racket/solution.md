# Racket ( XOR )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/3829762/](https://leetcode.com/problems/find-the-difference/solutions/3829762/)

---

Perform XOR operation on all values (converted from char to integer) in both strings. Final result will be integer value of added character. Convert back to char.
```
(define/contract (find-the-difference s t)
  (-> string? string? char?)
  (integer->char
    (apply bitwise-xor
      (map char->integer (string->list (string-append s t))))))
```