# My First LeetCode 100% (Just on Memory, Though)!

**Author:** nathaniel-ingle
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/4698031/](https://leetcode.com/problems/string-to-integer-atoi/solutions/4698031/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Intuitively, the problem consists of trimming off the excess whitespace, trimming the junk characters from the end of the string, converting the string to an integer, and then clamping the value of that integer to the specified range. Therefore, the function definition for my-atoi shows exactly that. 

# Approach
<!-- Describe your approach to solving the problem. -->
In implementing each of these steps, there were a few issues I had to address. The most consistent problem I faced was the way Racket functions handle empty strings. Because string-ref and substring both throw errors when fed empty strings with the given conditions, I had to add in an extra check to avoid this. The default behavior of string->number also posed a problem, since it will simply return #f if handed a string it cannot convert. I utilized a vector to effeciently build up the resulting string from the back. There's probably a function to add an element to a vector, but I couldn't find it, and appending two vectors worked well enough. 

The ints-seen flag was the last edition, purely added to pass the "-13+8" test, but it likely saved some time. Thankfully string->number handles signed numbers as you would expect, so no need to fiddle with that. I've fiddled with the code to remove unnecessary checks and components, but it hasn't had much effect on the overall speed and memory reported. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
(define (clamp x)
  (let ([lower-bound (- (expt 2 31))]
        [upper-bound (- (expt 2 31) 1)])
    (cond
      [(< x lower-bound) lower-bound]
      [(> x upper-bound) upper-bound]
      [else x])))

;; custom function to get first character in a string
;; since string-ref is not safe to use on empty strings
(define (first-char str)
  (if (equal? str "") #\
ul (string-ref str 0)))

;; custome function to get remaining characters in a string
;; since substring with a start-index of 1 will throw
;; an index out of range error on empty strings
(define (rest-string str) 
  (if (equal? str "") "" (substring str 1 (string-length str))))

;; custom string-to-integer, because string->number produces
;; a Boolean false for strings that cannot be converted
(define (safe-string->number str)
  (let ([n (string->number str)])
    (if n n 0)))

(define (trim-left str)
   (if (equal? (first-char str) #\\space)
       (trim-left (rest-string str))
       str))
    
(define (trim-right str [result (vector)] [ints-seen #f])
   (let ([initial (first-char str)]
          [remaining-string (rest-string str)])
     (if (or (char<=? #\\0 initial #\\9)
             (and (not ints-seen) 
                  (or (equal? initial #\\+) (equal? initial #\\-))))
         (trim-right remaining-string (vector-append result (vector initial)) #t)
         (apply string (vector->list result)))))

(define/contract (my-atoi s)
  (-> string? exact-integer?)
  (clamp (safe-string->number (trim-right (trim-left s)))))
```