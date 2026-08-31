# Racket 3 Solutions (list traversal, binary search, hash maps)

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/1777042/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/1777042/)

---

```
;; simple version with lists
(define (intersect nums1 nums2 [results '()])
  (cond [(empty? nums1) results]
        [(member (first nums1) nums2)
         (intersect (rest nums1) (remove (first nums1) nums2) (append results (take nums1 1)))]
        [else (intersect (rest nums1) nums2 results)]))
```

```
;; with binary search
;; idea
;; sort one of the lists
;; then for the other, traverse it using binary search to check if the current element is in the other list.
;; If so, append it to a results list and remove it from the other list.
(define (bsearch ls target)
  (define (ptr-narrow left right)
    (let* ([mid (quotient (+ left right) 2)]
           [mid-val (list-ref ls mid)])
      (cond [(> left right) #f]
            [(= target mid-val) #t]
            [(> target mid-val) (ptr-narrow (add1 mid) right)]
            [else (ptr-narrow left (sub1 mid))])))
  (ptr-narrow 0 (sub1 (length ls))))

(define (intersect nums1 nums2)
  (let rc ([nums1 nums1]
           [nums2 (sort nums2 <)]
           [intersection '()])
    (cond [(or (empty? nums1) (empty? nums2)) intersection]
          [(bsearch nums2 (first nums1)) (rc (rest nums1)
                                             (remove (first nums1) nums2)
                                             (append intersection (take nums1 1)))]
          [else (rc (rest nums1) nums2 intersection)])))
```

```
;; with a hash map
;; put all the elements of one list into a hash map
;; then traverse the second list, adding values to a results list if it is in a hash map and its value there is not 0
;; if the value is found, subtract one from the hash map counter
(define (hash-table-counter ls)
  (let ([counts (make-hash)])
    (for-each (\u03BB (v) (hash-update! counts v add1 0)) ls)
    counts))

(define (intersect nums1 nums2)
  (let rc ([htc (hash-table-counter nums2)]
           [nums1 nums1]
           [results '()])
    (cond [(empty? nums1) results]
          [(hash-has-key? htc (first nums1))
           (if (zero? (hash-ref htc (first nums1)))
               (rc htc (rest nums1) results)
               (begin
                 (hash-update! htc (first nums1) sub1)
                 (rc htc (rest nums1) (append results (take nums1 1)))))]
          [else (rc htc (rest nums1) results)])))
```