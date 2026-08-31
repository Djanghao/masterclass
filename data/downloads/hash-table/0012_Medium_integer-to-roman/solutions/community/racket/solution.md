# Racket hash map

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/4474998/](https://leetcode.com/problems/integer-to-roman/solutions/4474998/)

---

# Approach

start with an integer -> char list

then take the num initial value, and starting from the top see if we can subtract the highest value from it
going down the list

special situations (i.e. 4) should be treated no differently from regular situations

every time something is found, cons it to a list. At the end flatten the list and turn it into a string


# Code
```
(define roman-hash
  (make-hash
   '((1 #\\I)
     (4 #\\I #\\V)
     (5 #\\V)
     (9 #\\I #\\X)
     (10 #\\X)
     (40 #\\X #\\L)
     (50 #\\L)
     (90 #\\X #\\C)
     (100 #\\C)
     (400 #\\C #\\D)
     (500 #\\D)
     (900 #\\C #\\M)
     (1000 #\\M))))

(define (int-to-roman num)
  ((compose list->string flatten)
   (let loop ([v num]
              [rmn-ints (sort (hash-keys roman-hash) >)])
     (let ([curr-int (first rmn-ints)])
       (cond [(zero? v) '()]
             [(> curr-int v) (loop v (rest rmn-ints))]
             [(= curr-int v) (cons (hash-ref roman-hash v) (loop 0 (list curr-int)))]
             [(< curr-int v) (cons (hash-ref roman-hash curr-int) (loop (- v curr-int) rmn-ints))])))))
```