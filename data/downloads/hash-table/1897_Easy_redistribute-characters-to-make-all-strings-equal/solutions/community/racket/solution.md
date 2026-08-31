# Racket, 100/100 (by default)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476164/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476164/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The basic idea is to add up all the letter counts and divide each count by the number of words. If we can apportion the letters evenly, then we'll be able to make the words the same.

# Approach
<!-- Describe your approach to solving the problem. -->
I used a vector for the histogram because the time spent indexing for a list would be ridiculous. I also had to make sure to reset that vector every time (in fill-histo), so as not to get funny values. In the real world it would be better to pass 'histo' along.

There are a few places where I could have used lambdas, but decided not to for readability's sake.

If you get a slicker or faster solution, please comment!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
n

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
n

# Code
```
(define histo (make-vector 26 0))

(define (char->index chr)
  (- (char->integer chr) 97))

(define (inc-letter chr)
  (let ((loc (char->index chr)))
    (vector-set! histo loc (add1 (vector-ref histo loc)))))

(define (count-letters str)
  (map inc-letter (string->list str)))

(define (fill-histo words)
  (and
    (vector-fill! histo 0)
    (map count-letters words)))
      
(define (letter-counts-work? lst n)
  (cond ((empty? lst) #t)
	((not (= (modulo (car lst) n) 0)) #f)
	(#t (letter-counts-work? (cdr lst) n))))
 
(define/contract (make-equal words)
  (-> (listof string?) boolean?)
 (let* ((throwaway (fill-histo words))
	 (histolist (vector->list histo)))
    (letter-counts-work? histolist (length words))))
```