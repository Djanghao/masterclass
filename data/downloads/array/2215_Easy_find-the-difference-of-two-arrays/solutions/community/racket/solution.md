# Racket solution

**Author:** hijman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3938378/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3938378/)

---

# Code
```
(define (make-cal exists)
    (lambda (v result)
        (if (set-member? exists v) result (set-add result v))))
            
(define/contract (find-difference nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof (listof exact-integer?)))
    (let* (
        [n1-set (list->set nums1)]
        [n2-set (list->set nums2)]
        )
        (list
            (set->list (foldl (make-cal n2-set) (set) nums1))
            (set->list (foldl (make-cal n1-set) (set) nums2))
        )
    )
  )
```