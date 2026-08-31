# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5441964/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5441964/)

---

Rotate the string by the modulus of k and the length of the string.
```
(define/contract (get-encrypted-string s k)
  (-> string? exact-integer? string?)
  (let ((n (modulo k (string-length s))))
    (string-append (substring s n)
                   (substring s 0 n))))
```