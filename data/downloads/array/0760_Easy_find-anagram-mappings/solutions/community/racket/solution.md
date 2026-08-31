# racket hash comprehension / list comprehension

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/4540767/](https://leetcode.com/problems/find-anagram-mappings/solutions/4540767/)

---

# Code

```scheme
(define (anagram-mappings nums1 nums2)
  (let ([hsh (for/hash ([num nums1])
               (values num (index-of nums2 num)))])
    (for/list ([num nums1])
      (hash-ref hsh num))))
```