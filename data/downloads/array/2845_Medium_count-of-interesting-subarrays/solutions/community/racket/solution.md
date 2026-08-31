# O(n) Racket Solution

**Author:** imakira
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995084/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995084/)

---

As you might have seen this is a prefix sum problem, the core idea is to calculate the prefix sum of the number of elements which `nums[i] % modulo == k`, then leverage the fact $$(a + b) \\mod n = [(a \\mod n) + (b \\mod n)] \\mod n.$$.

# Code
```

(define (prefix-sum nums)
  (reverse
   (let loop ((nums nums)
              (res '(0)))
     (if (null? nums)
         res
         (loop (cdr nums)
               (cons (+ (car res)
                        (car nums))
                     res))))))

(define (count-interesting-subarrays nums modulo k)
  (let ((prefix (map (lambda (a)
                       (remainder a modulo))
                     (prefix-sum
                      (map (lambda (n)
                             (if (= (remainder n modulo)
                                    k)
                                 1
                                 0))
                           nums))))
        (m (make-hash)))
    (for/sum ((p prefix))
      (let ((ans (hash-ref m (remainder (+ (- p k) modulo) modulo) 0)))
        (hash-update! m p add1 0)
        ans))))
```