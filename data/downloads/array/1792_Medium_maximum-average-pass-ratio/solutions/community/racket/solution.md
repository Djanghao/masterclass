# Racket Solution

**Author:** imakira
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/3989625/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/3989625/)

---



# Code
```

(define (ratio-delta class)
  (- (/ (add1 (first class))
        (add1 (second class)))
     (/ (first class)
        (second class))))

(define/contract (max-average-ratio classes extraStudents)
  (-> (listof (listof exact-integer?)) exact-integer? flonum?)
  (let ((heap (make-heap (lambda (a b)
                           (> (car a)
                              (car b)))))
        (classes (map (lambda (class)
                        (let ((class (map real->double-flonum class)))
                          (cons (ratio-delta class)
                                class)))
                      classes)))
    (heap-add-all! heap classes)
    (for ((i (range 0 extraStudents)))
      (let* ((m (heap-min heap))
             (new (list (add1 (second m))
                        (add1 (third m))) )
             (new (cons (ratio-delta new)
                        new)))
        (heap-remove-min! heap)
        (heap-add! heap new)))
    (/ (apply + (map (lambda (a) (/ (second a)
                                    (third a)))
                     (vector->list (heap->vector heap))))
       (length classes))))

```