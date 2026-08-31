# Racket

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5128535/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5128535/)

---

```
(define/contract (added-integer nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  (let ((get-reference (lambda (lst) (car (sort lst <)))))
    (- (get-reference nums2)
       (get-reference nums1))))
```