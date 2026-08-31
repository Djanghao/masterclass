# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4520030/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4520030/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
; (define findElement
;   (lambda (arr x)
;     (cond
;       [(empty? arr) false]
;       [else
;        (if (= (first arr) x)
;            true
;            (findElement (rest arr) x))])))

; (define maxElement
;   (lambda (arr mx)
;     (cond
;       [(empty? arr) mx]
;       [else
;        (if (> (first arr) mx)
;            (maxElement (rest arr) (first arr))
;            (maxElement (rest arr) mx))])))

; (define sumArray
;   (lambda (arr acc)
;     (cond
;       [(empty? arr) acc]
;       [else (sumArray (rest arr) (+ (first arr) acc))])))
    
; (define prefix
;   (lambda (arr p)
;     (cond
;       [(= 1 (length arr)) (append p (list (first arr)))]
;       [else
;        (if (= (+ 1 (first arr)) (first (rest arr)))
;            (prefix (rest arr) (append p (list (first arr))))
;            (append p (list (first arr))))])))

; (define getValue
;   (lambda (arr s mx)
;     (cond
;       [(> s mx) s]
;       [else
;        (if (not (findElement arr s))
;            s
;            (getValue arr (+ 1 s) mx))])))

; (define missing-integer
;   (lambda (arr)
;     (begin
;       (define p (prefix arr '()))
;       (define s (sumArray p 0))
;       (define mx (+ 1 (maxElement arr 0)))
;       (getValue arr s mx))))


(define getValue
  (lambda (arr s mx)
    (cond
      [(> s mx) s]
      [else
       (if (not (member s arr))
           s
           (getValue arr (+ 1 s) mx))])))

(define prefix
  (lambda (arr p)
    (cond
      [(= 1 (length arr)) (append p (list (first arr)))]
      [else
       (if (= (+ 1 (first arr)) (first (rest arr)))
           (prefix (rest arr) (append p (list (first arr))))
           (append p (list (first arr))))])))

(define missing-integer
  (lambda (arr)
    (begin
      (define p (prefix arr '()))
      (define s (apply + p))
      (define mx (first (sort arr >)))
      (getValue arr s mx))))

```