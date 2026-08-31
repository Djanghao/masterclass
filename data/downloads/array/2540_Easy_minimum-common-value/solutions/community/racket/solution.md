# Racket 100/100 (by default, few submissions)

**Author:** ctd
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/3321583/](https://leetcode.com/problems/minimum-common-value/solutions/3321583/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a problem tailor-made for the basic LISP structure. We only consider the heads of each list.

# Approach
<!-- Describe your approach to solving the problem. -->
If either list is empty, we've failed. If the heads are equal, we're done. Otherwise, pick the list with the lower-valued head, remove that head, and try again.

Binary solutions aren't workable given that the Racket function is given lists, not vectors.

Note: I use a let statement to avoid the multiple calls to (car nums1) and (car nums2), but it only saved on the order of 10-20ms.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N1 + N2) - you might have to iterate almost completely through both lists.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - no extra data is used (ok, O(M+N) for the function calls).

# Code
```
(define/contract (get-common nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
    (if (or (empty? nums1) (empty? nums2)) -1
      (let ((n1 (car nums1))
            (n2 (car nums2)))
          (cond ((= n1 n2) n1)
                ((< n1 n2) (get-common (cdr nums1) nums2))
                (else (get-common nums1 (cdr nums2)))))))
```