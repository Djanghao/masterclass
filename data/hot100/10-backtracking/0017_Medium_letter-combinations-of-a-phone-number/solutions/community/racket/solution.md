# Racket using cartesian-product

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5691024/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5691024/)

---

Convert `digits` to `letters`, a list of lists of characters. Then run `cartesian-product` on `letters`. See `dr-neptune`'s solution.

# Code
```racket []
(define (letter-combinations digits)
  (let* ((numpad (vector-map string->list
                      (vector "" "" "abc" "def" "ghi" "jkl" "mno" "pqrs" "tuv" "wxyz")))
         (letters (map (lambda (x) (vector-ref numpad x))
                        (map (compose string->number string) (string->list digits)))))
    (filter non-empty-string? (map list->string (apply cartesian-product letters)))))
```