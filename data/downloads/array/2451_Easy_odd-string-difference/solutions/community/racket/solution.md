# Racket, 100/100

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2888781/](https://leetcode.com/problems/odd-string-difference/solutions/2888781/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
First, figure out which difference is more common. Look at the first two diffs. If they're the same, then that's the common diff and we can look for exceptions. If not, then we've already found the outlier - just look at the third value to check it.

One inefficiency is that I'm calculating the diff for the correct word each time. This is because I wanted to more easily retrieve the word for final output. 

In general this solution feels too verbose. There's probably a slicker way to do this.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
n
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
n


# Code
```
(define (arr-equal a1 a2)
  (cond ((and (empty? a1) (empty? a2)) #t)
        ((or (empty? a1) (empty? a2)) #f)
        ((not (= (car a1) (car a2))) #f)
        (else (arr-equal (cdr a1) (cdr a2)))))

(define (diff-equal w1 w2)
    (arr-equal (diff-array w1) (diff-array w2)))

(define (diff-array a)
  (if (empty? (cdr a)) empty
      (cons (- (char->integer (cadr a)) (char->integer (car a))) (diff-array (cdr a)))))

(define (odd-initial word-arrays)
  (if (diff-equal (cadr word-arrays) (caddr word-arrays)) (car word-arrays)
    (cadr word-arrays)))

(define (find-non-matching word-arrays correct)
    (if (diff-equal (car word-arrays) correct) (find-non-matching (cdr word-arrays) correct)
    (car word-arrays)))

(define/contract (odd-string words)
  (-> (listof string?) string?)
    (let ((word-arrays (map string->list words)))
        (if (not (diff-equal (car word-arrays) (cadr word-arrays))) (list->string(odd-initial word-arrays))
            (let ((correct (car word-arrays)))
                (list->string (find-non-matching (cddr word-arrays) correct)))))
  )
```