# recursion, 250ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5882506/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5882506/)

---

# Code
```racket []
(define (min-length s)
  (if (and (not (string-contains? s "AB"))
           (not (string-contains? s "CD")))
      (string-length s)
      (if (string-contains? s "AB")
          (min-length (string-replace s "AB" ""))
          (min-length (string-replace s "CD" "")))))
```