# O(n) time solution (forgive me in advance...)

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/4662076/](https://leetcode.com/problems/minimum-window-substring/solutions/4662076/)

---

The solution is $O(n)$, but boy is it long. 

May attention to the `loop` function. That's the bulk of the logic. 

# Code
```Racket
(define (zip lst1 lst2)
  (map cons lst1 lst2))

(define (make-zero-hash lst)
  (make-immutable-hash (zip lst (make-list (length lst) 0))))

(define (hash-inc k ht)
  (hash-update ht k add1 0))

(define (safe-hash-inc k ht)
  (if (hash-ref ht k #f) (hash-update ht k add1) ht))

(define (safe-hash-dec k ht)
  (if (hash-ref ht k #f) (hash-update ht k sub1) ht))

(define (frequencies lst)
  (foldl hash-inc (hash) lst))

(define (pair-min l1 r1 l2 r2)
  (if (< (- r1 l1) (- r2 l2)) (values l1 r1) (values l2 r2)))

(define (sref s i) (string-ref s (min (sub1 (string-length s)) i)))

(define (min-window s t)
  (define t-lst (string->list t))

  (define target (frequencies t-lst))

  (define (delta-dec delta seen c)
    (cond
      [(and (hash-ref target c #f) 
            (< (hash-ref seen c) (hash-ref target c)))
       (sub1 delta)]
      [else delta]))
  
  (define (delta-inc delta seen c)
    (cond 
      [(and (hash-ref target c #f)
            (<= (hash-ref seen c) (hash-ref target c)))
       (add1 delta)]
      [else delta]))

  (let loop ([l 0] [r 0] [seen (make-zero-hash t-lst)] 
             [delta (length t-lst)] [sl 0] [sr 0])
    (define-values (left-char right-char) (values (sref s l) (sref s r)))
    (define-values (l* r*) (pair-min l r sl sr))
    (cond
      [(and (= 0 sr) 
            (= delta 0))
       (loop (add1 l) r (safe-hash-dec left-char seen)
             (delta-inc delta seen left-char) l r)]
      [(and (= r (string-length s)) (= delta 0)) 
       (loop (add1 l) r (safe-hash-dec left-char seen) 
             (delta-inc delta seen left-char) l* r*)]
      [(= r (string-length s)) 
       (substring s sl sr)]
      [(= delta 0)
       (loop (add1 l) r (safe-hash-dec left-char seen)
             (delta-inc delta seen left-char) l* r*)]
      [else
       (loop l (add1 r) (safe-hash-inc right-char seen) 
             (delta-dec delta seen right-char) sl sr)])))
```